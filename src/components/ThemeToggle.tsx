'use client'

import { useDarkMode } from '@/lib/darkMode'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
    const { isDarkMode, toggle } = useDarkMode()

    return (
        <button
            onClick={toggle}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-300"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <div className="relative h-5 w-5">
                {/* Sun */}
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="absolute inset-0"
                    initial={{ scale: isDarkMode ? 1 : 0, opacity: isDarkMode ? 1 : 0 }}
                    animate={{ scale: isDarkMode ? 0 : 1, opacity: isDarkMode ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
                </motion.svg>
                {/* Moon */}
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="absolute inset-0"
                    initial={{ scale: isDarkMode ? 0 : 1, opacity: isDarkMode ? 0 : 1 }}
                    animate={{ scale: isDarkMode ? 1 : 0, opacity: isDarkMode ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </motion.svg>
            </div>
        </button>
    )
} 