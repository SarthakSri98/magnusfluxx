'use client';

import { motion } from 'framer-motion';

export function AnimatedHero() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            </div>
            <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
                <motion.h1
                    className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Magnus Fluxx
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Building tools + prepping for PM
                </motion.p>
            </div>
        </section>
    );
} 