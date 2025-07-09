import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { type ContentType, type ContentItem, type Frontmatter } from './types';

// Helper to convert file path to slug path
function filePathToSlug(filePath: string): string[] {
    // Remove extension and split into parts
    return filePath.replace(/\.[^/.]+$/, '').split('/').filter(Boolean);
}

// Get all content files of a specific type
export async function getAllContent(type: ContentType): Promise<ContentItem[]> {
    let contentPath = '';
    switch (type) {
        case 'products':
            contentPath = 'products';
            break;
        case 'case-studies':
            contentPath = 'case-studies';
            break;
        case 'blogs':
            contentPath = 'blogs';
            break;
    }

    const items: ContentItem[] = [];
    const fullPath = path.join(process.cwd(), 'content', contentPath);

    try {
        const files = await fs.readdir(fullPath);
        const mdFiles = files.filter(file => file.endsWith('.md'));

        const contentPromises = mdFiles.map(async (file) => {
            const filePath = path.join(fullPath, file);
            const content = await fs.readFile(filePath, 'utf8');
            const { data: frontmatter, content: mdContent } = matter(content);

            return {
                content: mdContent,
                frontmatter: frontmatter as Frontmatter,
                slugPath: [file.replace(/\.md$/, '')],
            };
        });

        const contents = await Promise.all(contentPromises);
        items.push(...contents);
    } catch (error) {
        console.error(`Error loading content for ${type}:`, error);
    }

    return items;
}

// Get a specific content item by its slug path
export async function getContentBySlug(type: ContentType, slug: string[]): Promise<ContentItem | null> {
    const items = await getAllContent(type);
    return items.find(item => {
        const itemPath = item.slugPath.join('/');
        const requestPath = slug.join('/');
        return itemPath === requestPath;
    }) || null;
}

// Get all unique categories for blogs
export async function getBlogCategories(): Promise<string[]> {
    const blogs = await getAllContent('blogs');
    const categories = new Set(blogs.map(blog => blog.slugPath[0]));
    return Array.from(categories);
}

// Get all blog posts in a specific category
export async function getBlogsByCategory(category: string): Promise<ContentItem[]> {
    const blogs = await getAllContent('blogs');
    return blogs.filter(blog => blog.slugPath[0] === category);
} 