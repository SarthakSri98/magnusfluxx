"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface FeaturedPostCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    href: string;
    type: 'product' | 'case-study' | 'blog';
}

export function FeaturedPostCard({ title, description, image, tags, href, type }: FeaturedPostCardProps) {
    const typeColors = {
        'product': 'from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30',
        'case-study': 'from-orange-500/20 to-pink-500/20 group-hover:from-orange-500/30 group-hover:to-pink-500/30',
        'blog': 'from-green-500/20 to-teal-500/20 group-hover:from-green-500/30 group-hover:to-teal-500/30'
    };

    const typeLabels = {
        'product': 'Product',
        'case-study': 'Case Study',
        'blog': 'Blog Post'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Link href={href} className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-500 ease-out group-hover:opacity-100">
                        <div className={`absolute inset-0 bg-gradient-to-br ${typeColors[type]} transition-all duration-500`} />
                    </div>

                    <div className="relative p-6 sm:p-8">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                                {typeLabels[type]}
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                            {title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                            {description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-primary group-hover:translate-x-1 transition-transform">
                            <span className="font-medium">Learn more</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
} 