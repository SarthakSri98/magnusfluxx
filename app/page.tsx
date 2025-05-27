'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import VideoModal from '@/components/VIdeoModal'
import { getBlogPosts, type BlogPost } from '@/lib/blog'
import BlogCard from '@/components/BlogCard'

// Sample project data - replace with your actual projects
const projects = [
    {
        title: 'Project One',
        description: 'A modern web application built with Next.js and TypeScript',
        image: '/projects/project1.jpg',
        demoUrl: 'https://www.youtube.com/embed/your-video-id',
        blogUrl: '/blog/project-one',
        liveUrl: 'https://project-one.com'
    },
    {
        title: 'Project Two',
        description: 'Mobile-first design with React Native and Firebase',
        image: '/projects/project2.jpg',
        demoUrl: 'https://www.youtube.com/embed/your-video-id',
        blogUrl: '/blog/project-two'
    },
    {
        title: 'Project Three',
        description: 'AI-powered analytics dashboard',
        image: '/projects/project3.jpg',
        demoUrl: 'https://www.youtube.com/embed/your-video-id',
        liveUrl: 'https://project-three.com'
    }
]

export default function HomePage() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
    const [recentPosts, setRecentPosts] = useState<BlogPost[]>([])

    // Fetch blog posts on component mount
    useEffect(() => {
        async function fetchPosts() {
            const posts = await getBlogPosts()
            setRecentPosts(posts.slice(0, 2))
        }
        fetchPosts()
    }, [])

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950">
            {/* Hero Section */}
            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                        Hey, I&apos;m <span className="text-indigo-600 dark:text-indigo-400">Your Name</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-xl text-slate-600 dark:text-slate-400">
                        I&apos;m a full-stack developer passionate about building modern web applications.
                        Currently focused on React, TypeScript, and serverless architectures.
                    </p>
                    <div className="mt-8">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-indigo-700"
                        >
                            See My Projects
                            <span aria-hidden="true">↓</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">
                        Featured Projects
                    </h2>
                    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
            <section className="bg-slate-50 py-16 dark:bg-slate-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">
                            Recent Posts
                        </h2>
                        <Link
                            href="/blog"
                            className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                        >
                            View all posts →
                        </Link>
                    </div>
                    <div className="mt-8 grid gap-8 sm:grid-cols-2">
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