'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import { type ContentItem } from '@/lib/types';
import PostCard from './PostCard';

interface PostPageProps {
    item: ContentItem;
    type: 'products' | 'case-studies' | 'blogs';
    mdxSource: MDXRemoteSerializeResult;
}

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

function extractTOC(content: string): TOCItem[] {
    const headingRegex = /^#{1,3} (.+)$/gm;
    const toc: TOCItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
        const level = match[0].split(' ')[0].length;
        const text = match[1];
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        toc.push({ id, text, level });
    }

    return toc;
}

export default function PostPage({ item, type, mdxSource }: PostPageProps) {
    const { frontmatter, content, subRoutes } = item;
    const { title, hook, tags, metric, thumbnail, learned } = frontmatter;
    const toc = extractTOC(content);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-8">
                    <div className="prose dark:prose-invert max-w-none">
                        <div className="relative h-64 mb-8 rounded-2xl overflow-hidden">
                            <Image
                                src={thumbnail || ''}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {tags && tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="mb-4">{title}</h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">{hook}</p>

                        {/* Metric Badge */}
                        <div className="inline-block px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium mb-8">
                            {metric}
                        </div>

                        {/* MDX Content */}
                        <MDXRemote {...mdxSource} />

                        {/* What I Learned Section */}
                        {learned && learned.length > 0 && (
                            <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <h3 className="text-lg font-bold mb-4">What I Learned</h3>
                                <ul className="space-y-2">
                                    {learned.map((item: string, index: number) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-green-500 mr-2">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Sub-routes Section */}
                    {subRoutes && subRoutes.length > 0 && (
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold mb-6">More Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {subRoutes.map((route) => (
                                    <PostCard
                                        key={route}
                                        frontmatter={frontmatter}
                                        href={`/${type}/${item.slugPath.join('/')}/${route}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4">
                    <div className="sticky top-8">
                        {/* Table of Contents */}
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                            <h3 className="text-lg font-bold mb-4">Table of Contents</h3>
                            <nav>
                                <ul className="space-y-2">
                                    {toc.map((item) => (
                                        <li
                                            key={item.id}
                                            style={{ paddingLeft: `${(item.level - 1) * 1}rem` }}
                                        >
                                            <a
                                                href={`#${item.id}`}
                                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                                            >
                                                {item.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 