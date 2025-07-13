import { readFile, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import matter from 'gray-matter';
import { type ContentType, type ContentItem, type Frontmatter } from '@/lib/types';

const CONTENT_PATH = join(process.cwd(), 'content');

// Map content types to their directory names
const contentTypeMap: Record<ContentType, string> = {
    products: 'products',
    'case-studies': 'case-studies',
    blogs: 'blogs',
};

// Helper function to process directory
async function processDirectory(dir: string, slugPath: string[] = []): Promise<ContentItem[]> {
    const items: ContentItem[] = [];
    const entries = await readdir(dir);

    for (const entry of entries) {
        const fullPath = join(dir, entry);
        const stat = await readFile(fullPath).then(() => true).catch(() => false);

        if (!stat) {
            // If we can't read it as a file, try as a directory
            try {
                const subItems: ContentItem[] = await processDirectory(fullPath, [...slugPath, entry]);
                items.push(...subItems);
            } catch (error) {
                console.error(`Error processing directory ${fullPath}:`, error);
            }
            continue;
        }

        if (entry.endsWith('.mdx')) {
            try {
                const content = await readFile(fullPath, 'utf-8');
                const { data, content: mdxContent } = matter(content);

                // Handle index.mdx files
                const isIndex = entry === 'index.mdx';
                const currentSlugPath = isIndex ? slugPath : [...slugPath, entry.replace('.mdx', '')];

                // Get sub-routes if this is an index file
                let subRoutes: string[] | undefined;
                if (isIndex) {
                    const parentDir = dirname(fullPath);
                    try {
                        const dirEntries = await readdir(parentDir);
                        subRoutes = dirEntries
                            .filter(file => file !== 'index.mdx' && file.endsWith('.mdx'))
                            .map(file => file.replace('.mdx', ''));
                    } catch (error) {
                        console.error(`Error reading parent directory ${parentDir}:`, error);
                    }
                }

                items.push({
                    content: mdxContent,
                    frontmatter: data as Frontmatter,
                    slugPath: currentSlugPath,
                    subRoutes,
                });
            } catch (error) {
                console.error(`Error processing file ${fullPath}:`, error);
            }
        }
    }

    return items;
}

// Get all content files of a specific type
export async function getAllContent(type: ContentType): Promise<ContentItem[]> {
    try {
        const contentDir = join(CONTENT_PATH, contentTypeMap[type]);
        return await processDirectory(contentDir);
    } catch (error) {
        console.error(`Error getting all content for type ${type}:`, error);
        return [];
    }
}

// Get a specific content item by its slug path
export async function getContentBySlug(type: ContentType, slug: string[]): Promise<ContentItem | null> {
    try {
        const items = await getAllContent(type);
        return items.find(item => {
            const itemPath = item.slugPath.join('/');
            const requestPath = slug.join('/');
            return itemPath === requestPath;
        }) || null;
    } catch (error) {
        console.error(`Error getting content by slug for type ${type} and slug ${slug}:`, error);
        return null;
    }
}

// Get all unique categories for blogs
export async function getBlogCategories(): Promise<string[]> {
    try {
        const blogs = await getAllContent('blogs');
        const categories = new Set(blogs.map(blog => blog.slugPath[0]));
        return Array.from(categories);
    } catch (error) {
        console.error('Error getting blog categories:', error);
        return [];
    }
}

// Get all blog posts in a specific category
export async function getBlogsByCategory(category: string): Promise<ContentItem[]> {
    try {
        const blogs = await getAllContent('blogs');
        return blogs.filter(blog => blog.slugPath[0] === category);
    } catch (error) {
        console.error(`Error getting blogs for category ${category}:`, error);
        return [];
    }
} 