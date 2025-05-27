import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import readingTime from 'reading-time'

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
})

const blogsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
    slug: string
    title: string
    date: string
    excerpt: string
    content: string
    readingTime: string
    tags: string[]
}

export async function getBlogPosts(): Promise<BlogPost[]> {
    // Get file names under /content/blog
    const fileNames = fs.readdirSync(blogsDirectory)
    const allPostsData = fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(fileName => {
            // Remove ".md" from file name to get slug
            const slug = fileName.replace(/\.md$/, '')

            // Read markdown file as string
            const fullPath = path.join(blogsDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, 'utf8')

            // Use gray-matter to parse the post metadata section
            const { data, content } = matter(fileContents)
            const readTime = readingTime(content)

            // Combine the data with the slug
            return {
                slug,
                content: md.render(content),
                readingTime: readTime.text,
                excerpt: data.excerpt || content.slice(0, 150) + '...',
                date: data.date,
                title: data.title,
                tags: data.tags || [],
            }
        })

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
    try {
        console.log('slug', slug, blogsDirectory)
        const fullPath = path.join(blogsDirectory, `${slug}.md`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const { data, content } = matter(fileContents)
        const readTime = readingTime(content)

        return {
            slug,
            content: md.render(content),
            readingTime: readTime.text,
            excerpt: data.excerpt || content.slice(0, 150) + '...',
            date: data.date,
            title: data.title,
            tags: data.tags || [],
        }
    } catch {
        return null
    }
}