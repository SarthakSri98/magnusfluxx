import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
})

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export interface Project {
    slug: string
    title: string
    description: string
    image: string
    demoUrl?: string
    blogUrl?: string
    liveUrl?: string
    content: string
    technologies: string[]
}

export async function getProjects(): Promise<Project[]> {
    const fileNames = fs.readdirSync(projectsDirectory)
    const allProjectsData = fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(fileName => {
            // Remove ".md" from file name to get slug
            const slug = fileName.replace(/\.md$/, '')

            // Read markdown file as string
            const fullPath = path.join(projectsDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, 'utf8')

            // Use gray-matter to parse the project metadata section
            const { data, content } = matter(fileContents)

            // Combine the data with the slug
            return {
                slug,
                title: data.title,
                description: data.description,
                image: data.image,
                demoUrl: data.demoUrl,
                blogUrl: data.blogUrl,
                liveUrl: data.liveUrl,
                content: md.render(content),
                technologies: data.technologies || [],
            }
        })

    return allProjectsData
}

export async function getProject(slug: string): Promise<Project | null> {
    try {
        const fullPath = path.join(projectsDirectory, `${slug}.md`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const { data, content } = matter(fileContents)

        return {
            slug,
            title: data.title,
            description: data.description,
            image: data.image,
            demoUrl: data.demoUrl,
            blogUrl: data.blogUrl,
            liveUrl: data.liveUrl,
            content: md.render(content),
            technologies: data.technologies || [],
        }
    } catch {
        return null
    }
} 