import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
    title: string
    description: string
    image: string
    demoUrl?: string
    blogUrl?: string
    liveUrl?: string
    onOpenDemo: () => void
}

export default function ProjectCard({
    title,
    description,
    image,
    demoUrl,
    blogUrl,
    liveUrl,
    onOpenDemo
}: ProjectCardProps) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-xl dark:bg-slate-800">
            <div className="relative h-48">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    {title}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                    {description}
                </p>
                <div className="mt-4 flex gap-4">
                    {demoUrl && (
                        <button
                            onClick={onOpenDemo}
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                        >
                            Watch Demo →
                        </button>
                    )}
                    {blogUrl && (
                        <Link
                            href={blogUrl}
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                        >
                            Read More →
                        </Link>
                    )}
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                        >
                            View Live →
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}