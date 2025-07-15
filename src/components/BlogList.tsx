'use client'

import { useState } from 'react'
import BlogCard from './BlogCard'

interface BlogListProps {
    initialPosts: any[] // TODO: Replace BlogPost with equivalent from '@/lib/blogs' if available
}

export default function BlogList({ initialPosts }: BlogListProps) {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredPosts = initialPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags?.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    return (
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map(post => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
            {filteredPosts.length === 0 && (
                <p className="text-center text-slate-600 dark:text-slate-400">
                    No posts found matching your search.
                </p>
            )}
        </div>
    )
}