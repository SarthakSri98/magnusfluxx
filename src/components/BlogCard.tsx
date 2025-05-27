import Link from 'next/link'

export interface BlogPost {
    slug: string
    title: string
    excerpt: string
    date: string
    readingTime: string
    tags: string[]
}

interface BlogCardProps {
    post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <article className="group relative rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-slate-800/50 dark:shadow-slate-700/20">
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

            <h3 className="mt-4 font-inter text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-indigo-500 dark:text-white dark:group-hover:text-indigo-400">
                <Link href={`/blog/${post.slug}`}>
                    {post.title}
                </Link>
            </h3>

            <p className="mt-3 font-open-sans text-slate-600 dark:text-slate-300">
                {post.excerpt}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <Link
                href={`/blog/${post.slug}`}
                className="absolute inset-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
                <span className="sr-only">Read more about {post.title}</span>
            </Link>
        </article>
    )
}