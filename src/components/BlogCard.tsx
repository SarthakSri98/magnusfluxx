import Link from 'next/link'
import { BlogPost } from '@/lib/blog'

interface BlogCardProps {
    post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <article className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-slate-800">
            <div className="flex items-center gap-4">
                <time
                    dateTime={post.date}
                    className="text-sm text-slate-500 dark:text-slate-400"
                >
                    {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </time>
                {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2">
                        {post.tags.map(tag => (
                            <span
                                key={tag}
                                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <h3 className="mt-4 font-display text-xl font-bold text-slate-900 dark:text-white">
                <Link href={`/blog/${post.slug}`}>
                    {post.title}
                </Link>
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
                {post.excerpt}
            </p>
            <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
                Read more →
            </Link>
        </article>
    )
}