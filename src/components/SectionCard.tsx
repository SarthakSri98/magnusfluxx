"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface SectionCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    gradient: string;
}

export function SectionCard({ title, description, icon, href, gradient }: SectionCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Link href={href} className="group block">
                <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-1`}>
                    <div className="relative rounded-xl overflow-hidden bg-white dark:bg-gray-900 p-6 sm:p-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/0 dark:from-gray-900/50 dark:to-gray-900/0" />

                        <div className="relative">
                            <div className="inline-block p-3 rounded-xl bg-gray-100 dark:bg-gray-800 mb-6">
                                {icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                {title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                {description}
                            </p>

                            <div className="flex items-center gap-2 text-primary group-hover:translate-x-1 transition-transform">
                                <span className="font-medium">Explore</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
} 