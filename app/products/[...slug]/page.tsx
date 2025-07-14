import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Code2, ChevronRight } from "lucide-react";
import { getContentBySlug, getAllContent } from "@/lib/content";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: any) {
    const resolvedParams = await params;
    const product = await getContentBySlug("products", resolvedParams.slug);
    if (!product) {
        notFound();
    }

    // Get all blog posts to find related ones
    const blogs = await getAllContent("blogs");
    const relatedBlogs = blogs.filter(blog => {
        const blogPath = blog.slugPath.join("/");
        return product.frontmatter.relatedBlogs?.includes(blogPath);
    });

    return (
        <article className="min-h-screen bg-white dark:bg-gray-950 mt-4">
            {/* Full Width & Height Layout */}
            <div className="w-full h-screen flex flex-col lg:flex-row overflow-hidden">
                {/* Fixed Left Side - Product Info (20% width) */}
                <div className="lg:w-[20%] lg:h-screen lg:fixed lg:left-0 lg:top-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-y-auto">
                    <div className="p-8 lg:p-10 h-full flex flex-col gap-10">
                        {/* Back Button */}
                        <div className="m-8">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span>Back to Home</span>
                            </Link>
                        </div>

                        {/* Product Image/Video */}
                        <div className="mb-8">
                            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 group hover:scale-[1.02] transition-transform duration-300">
                                {product.frontmatter?.demoVideo ? (
                                    <video
                                        src={product.frontmatter.demoVideo}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full aspect-video object-cover"
                                    />
                                ) : product.frontmatter?.image ? (
                                    <Image
                                        src={product.frontmatter.image}
                                        alt={product.frontmatter.title}
                                        width={400}
                                        height={225}
                                        className="w-full aspect-video object-cover"
                                        priority
                                    />
                                ) : (
                                    <div className="w-full aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 to-purple-900 flex items-center justify-center">
                                        <div className="text-3xl text-gray-400 dark:text-gray-600">📱</div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Product Title & Description */}
                        <div className="mb-8 flex flex-col gap-4">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                                    Product
                                </span>
                                {product.frontmatter.status && (
                                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800">
                                        {product.frontmatter.status}
                                    </span>
                                )}
                            </div>

                            <h1 className="text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
                                {product.frontmatter.title}
                            </h1>

                            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                {product.frontmatter.description}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-4 mb-8">
                            {product.frontmatter?.sourceUrl && (
                                <a
                                    href={product.frontmatter.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-sm group"
                                >
                                    <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                    <span>View Source</span>
                                </a>
                            )}
                            {product.frontmatter?.liveUrl && (
                                <a
                                    href={product.frontmatter.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl text-sm group"
                                >
                                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    <span>Live Website</span>
                                </a>
                            )}
                        </div>

                        {/* Tech Stack */}
                        {product.frontmatter?.tools && product.frontmatter.tools.length > 0 && (
                            <div className="mb-6">
                                <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Built with</h2>
                                <div className="flex flex-wrap gap-2">
                                    {product.frontmatter.tools.map((tool, index) => (
                                        <span
                                            key={tool}
                                            className="px-3 py-1 text-xs rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 font-semibold shadow-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 animate-fade-in hover:scale-110 transition-transform duration-300"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Key Learnings */}
                        {product.frontmatter?.learnings && product.frontmatter?.learnings.length > 0 && (
                            <div className="flex-1">
                                <h2 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Key Learnings</h2>
                                <div className="space-y-3">
                                    {product.frontmatter.learnings.map((learning: string, index: number) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3 p-3 rounded-lg bg-white/80 dark:bg-gray-800/80 shadow-lg dark:shadow-gray-900/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 animate-slide-in-left hover:translate-x-2 transition-transform duration-300"
                                            style={{ animationDelay: `${index * 150}ms` }}
                                        >
                                            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2" />
                                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{learning}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Scrollable Right Side - Blog Stories (80% width) */}
                {relatedBlogs.length > 0 && (
                    <div className="lg:w-[80%] lg:ml-[20%] bg-white dark:bg-gray-950 h-screen overflow-y-auto">
                        <div className="p-8 lg:p-16">
                            {/* Header */}
                            <div className="mb-16 animate-fade-in">
                                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-4">
                                    The Story Behind {product.frontmatter.title}
                                </h2>
                                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                                    Dive into the journey of building {product.frontmatter.title} - from initial concept to real-world impact.
                                    Each chapter reveals unique insights and learnings.
                                </p>
                            </div>

                            {/* Story Timeline with Alternating Left/Right */}
                            <div className="relative">
                                {/* Central Timeline Line */}
                                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-400 to-pink-400 shadow-[0_0_20px_4px_rgba(168,85,247,0.2)] -translate-x-1/2 z-0" />

                                <div className="space-y-24">
                                    {relatedBlogs.map((blog, index) => {
                                        const isLeft = index % 2 === 0;
                                        return (
                                            <Link
                                                key={blog.slugPath.join("/")}
                                                href={`/blogs/${blog.slugPath.join("/")}`}
                                                className="group relative block"
                                            >
                                                <div className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                                    {/* Story Card */}
                                                    <div className={`w-full lg:w-1/2 ${isLeft ? 'lg:pr-8' : 'lg:pl-8'}`}>
                                                        <article className="relative bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900/30 rounded-[2rem] p-8 lg:p-10 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.3)] transition-all duration-500 border border-purple-100/50 dark:border-purple-900/50 group-hover:scale-[1.02] overflow-hidden">
                                                            {/* Fancy Background Effects */}
                                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-[2rem] opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500" />

                                                            {/* Content */}
                                                            <div className="relative z-10">
                                                                <div className="flex items-center gap-4 mb-6">
                                                                    <span className="text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 text-white shadow-lg group-hover:shadow-purple-500/25 transition-shadow duration-500">
                                                                        Chapter {index + 1}
                                                                    </span>
                                                                    {blog.frontmatter.date && (
                                                                        <time className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                                                            {new Date(blog.frontmatter.date).toLocaleDateString('en-US', {
                                                                                year: 'numeric',
                                                                                month: 'long',
                                                                                day: 'numeric'
                                                                            })}
                                                                        </time>
                                                                    )}
                                                                </div>

                                                                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:via-blue-500 group-hover:to-pink-500 transition-all duration-300">
                                                                    {blog.frontmatter.title}
                                                                </h3>

                                                                {blog.frontmatter.description && (
                                                                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                                                        {blog.frontmatter.description}
                                                                    </p>
                                                                )}

                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex flex-wrap gap-2">
                                                                        {blog.frontmatter.tags?.slice(0, 3).map((tag) => (
                                                                            <span
                                                                                key={tag}
                                                                                className="text-xs px-3 py-1.5 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium shadow-sm border border-gray-100 dark:border-gray-700"
                                                                            >
                                                                                {tag}
                                                                            </span>
                                                                        ))}
                                                                    </div>

                                                                    <span className="flex items-center gap-2 text-purple-500 dark:text-purple-400 font-medium transition-all duration-300 bg-purple-500/10 dark:bg-purple-900/10 px-4 py-2 rounded-lg">
                                                                        Read
                                                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>

                                                    {/* Timeline Dot and Connector */}
                                                    <div className="hidden lg:flex flex-col items-center relative z-20">
                                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-blue-400 to-pink-400 border-4 border-white dark:border-gray-950 shadow-2xl group-hover:scale-110 transition-transform duration-300" />
                                                        <div className="mt-4 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold shadow-lg">
                                                            {blog.frontmatter.date ? new Date(blog.frontmatter.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : `Chapter ${index + 1}`}
                                                        </div>
                                                    </div>

                                                    {/* Empty space for balance */}
                                                    <div className="hidden lg:block w-1/2" />
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
} 