'use client';

import Image from 'next/image';
import Link from 'next/link';
import { type Frontmatter } from '@/lib/content';

interface PostCardProps {
    frontmatter: Frontmatter;
    href: string;
}

export default function PostCard({ frontmatter, href }: PostCardProps) {
    const { title, hook, tags, metric, thumbnail } = frontmatter;

    return (
        <Link
            href={href}
            className="group block overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200"
        >
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
            </div>

            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {hook}
                </p>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {metric}
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                        →
                    </span>
                </div>
            </div>
        </Link>
    );
} 