'use client'

import { useState } from 'react'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import VideoModal from '@/components/VIdeoModal'
import BlogCard from '@/components/BlogCard'
import type { BlogPost } from '@/components/BlogCard'

// Sample project data - replace with your actual projects
const projects = [
    {
        title: 'Project One',
        description: 'A modern web application built with Next.js and TypeScript',
        image: '/projects/project1.jpg',
        demoUrl: 'https://www.youtube.com/embed/your-video-id',
        blogUrl: '/blog/project-1',
        liveUrl: 'https://project-one.com',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
        title: 'Project Two',
        description: 'Mobile-first design with React Native and Firebase',
        image: '/projects/project2.jpg',
        demoUrl: 'https://www.youtube.com/embed/your-video-id',
        blogUrl: '/blog/project-2',
        technologies: ['React Native', 'Firebase', 'Expo']
    },
    {
        title: 'Project Three',
        description: 'AI-powered analytics dashboard',
        image: '/projects/project3.jpg',
        demoUrl: 'https://www.youtube.com/embed/your-video-id',
        liveUrl: 'https://project-three.com',
        blogUrl: '/blog/project-3',
        technologies: ['Python', 'TensorFlow', 'React']
    }
]

// Sample blog posts - replace with your actual blog posts
const recentPosts: BlogPost[] = [
    {
        slug: 'building-modern-portfolio',
        title: 'Building a Modern Developer Portfolio with Next.js',
        excerpt: 'Learn how to create a stunning portfolio site using Next.js, Tailwind CSS, and modern design principles.',
        date: '2024-03-20',
        readingTime: '5 min read',
        tags: ['Next.js', 'Design', 'Portfolio']
    },
    {
        slug: 'typescript-best-practices',
        title: 'TypeScript Best Practices in 2024',
        excerpt: 'A comprehensive guide to writing better TypeScript code with modern patterns and practices.',
        date: '2024-03-15',
        readingTime: '8 min read',
        tags: ['TypeScript', 'Development', 'Best Practices']
    }
]

export default function HomePage() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* Hero Section */}
            <section className="relative overflow-hidden px-4 py-32 sm:px-6 lg:px-8">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-slate-50 dark:from-slate-900 dark:to-slate-950" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800" />
                </div>
                <div className="mx-auto max-w-7xl">
                    <h1 className="font-inter text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                        Hey, I&apos;m{' '}
                        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                            Magnus Fluxx
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl font-open-sans text-xl text-slate-600 dark:text-slate-300">
                        I&apos;m a full-stack developer passionate about building modern web applications.
                        Currently focused on React, TypeScript, and serverless architectures.
                    </p>
                    <div className="mt-8">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                        >
                            See My Projects
                            <span aria-hidden="true">↓</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="font-inter text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Featured Projects
                    </h2>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map(project => (
                            <ProjectCard
                                key={project.title}
                                {...project}
                                onOpenDemo={() => setSelectedVideo(project.demoUrl)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="border-t border-slate-200 bg-white py-24 dark:border-slate-800 dark:bg-slate-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <h2 className="font-inter text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Recent Posts
                        </h2>
                        <Link
                            href="/blog"
                            className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                        >
                            View all posts →
                        </Link>
                    </div>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2">
                        {recentPosts.map(post => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            <VideoModal
                isOpen={!!selectedVideo}
                onClose={() => setSelectedVideo(null)}
                videoUrl={selectedVideo || ''}
            />
        </main>
    )
} 