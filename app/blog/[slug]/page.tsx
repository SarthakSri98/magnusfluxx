/* eslint-disable @typescript-eslint/no-explicit-any */
import { getBlogPost, getBlogPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'

// Generate static paths for all blog posts
export async function generateStaticParams() {
    const posts = await getBlogPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

// Generate metadata for each blog post
export async function generateMetadata(props: any): Promise<any> {
    const post = await getBlogPost(props.params.slug)
    if (!post) return { title: 'Not Found' }

    return {
        title: `${post.title} | Magnus Fluxx`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
        },
    }
}

export default async function BlogPost(props: any) {
    const post = await getBlogPost(props.params.slug)
    if (!post) notFound()

    return (
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 text-sm">
                <time
                    dateTime={post.date}
                    className="font-medium text-slate-500 dark:text-slate-400"
                >
                    {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </time>
                <span className="text-slate-400 dark:text-slate-500">•</span>
                <span className="font-medium text-slate-500 dark:text-slate-400">
                    {post.readingTime}
                </span>
            </div>

            <h1 className="mt-6 font-inter text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                {post.title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div
                className="prose prose-lg mt-8 prose-slate dark:prose-invert prose-headings:font-inter prose-a:text-indigo-600 dark:prose-a:text-indigo-400"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    )
} 