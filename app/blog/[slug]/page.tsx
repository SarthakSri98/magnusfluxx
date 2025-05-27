import { getBlogPost, getBlogPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { remark } from 'remark'
import html from 'remark-html'

// Generate static paths for all blog posts
export async function generateStaticParams() {
    const posts = await getBlogPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = await getBlogPost(params.slug)
    if (!post) return { title: 'Not Found' }

    return {
        title: `${post.title} | Magnus Fluxx`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
        },
    }
}

async function markdownToHtml(markdown: string) {
    const result = await remark().use(html).process(markdown)
    return result.toString()
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = await getBlogPost(params.slug)
    if (!post) notFound()

    const content = await markdownToHtml(post.content)

    return (
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
            <div className="flex gap-2">
                {post.tags.map(tag => (
                    <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-lavender-50 px-2.5 py-0.5 text-xs font-medium text-lavender-700 dark:bg-lavender-900 dark:text-lavender-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold text-gray-900 dark:text-white">
                {post.title}
            </h1>
            <time className="mt-4 block text-sm text-gray-500 dark:text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}
            </time>
            <div
                className="prose prose-lg mt-8 dark:prose-invert prose-headings:font-display prose-a:text-lavender-600 dark:prose-a:text-lavender-400"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </article>
    )
} 