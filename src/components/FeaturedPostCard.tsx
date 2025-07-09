"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface FeaturedPostCardProps {
    href: string;
    title: string;
    hook: string;
    thumbnail: string;
    tags?: string[];
}

const FeaturedPostCard: FC<FeaturedPostCardProps> = ({ href, title, hook, thumbnail, tags }) => {
    return (
        <Link href={href} className="group block overflow-hidden rounded-2xl shadow-lg bg-gray-50 dark:bg-gray-800">
            <div className="relative aspect-[16/9]">
                <Image src={thumbnail} alt={title} fill priority className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-6"
            >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-muted-foreground mb-4">{hook}</p>
                {tags && (
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </motion.div>
        </Link>
    );
};

export { FeaturedPostCard }; 