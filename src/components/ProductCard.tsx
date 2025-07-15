"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "lucide-react";

export default function ProductCard({ product, blogs }: { product: any, blogs: any[] }) {
    const [showHow, setShowHow] = useState(false);
    const { title, image, why, highlight, how, tools, relatedBlogs, description, urls } = product.frontmatter;

    return (
        <div className="group relative flex flex-col md:flex-row items-stretch gap-10 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300 p-8">
            {/* Product Image */}
            {image && (
                <div className="flex-shrink-0 w-full md:w-80 h-56 md:h-64 rounded-lg overflow-hidden shadow border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
                    <Image
                        src={image}
                        alt={`${title} cover`}
                        width={320}
                        height={256}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                    />
                </div>
            )}
            {/* Product Content */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
                        {title}
                    </h2>

                    {urls && urls.length > 0 && (
                        <div className="mb-6 flex flex-wrap flex-row gap-2">
                            {urls.map((link: { title: string, url: string }, idx: number) => (
                                <span key={idx}>
                                    <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-300 hover:underline">
                                        {link.title} {idx < urls.length - 1 && <span className="text-gray-500 dark:text-gray-400">|</span>}
                                    </Link>
                                </span>
                            ))}
                        </div>
                    )}

                    {description && (
                        <blockquote className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-8 leading-relaxed border-l-4 border-pink-400 pl-4 bg-gray-50 dark:bg-gray-900">
                            {description}
                        </blockquote>
                    )}

                    {/* Why Section */}
                    {why && (
                        <div className="mb-6 p-4 rounded-lg border-l-4 border-blue-400 bg-blue-50 dark:bg-gray-800 flex items-start gap-3">
                            <span className="mt-1 text-blue-500 dark:text-blue-300">💡</span>
                            <div>
                                <div className="font-bold text-lg mb-1 text-blue-700 dark:text-blue-300">Why?</div>
                                <div className="text-lg text-gray-800 dark:text-gray-100">{why}</div>
                            </div>
                        </div>
                    )}
                    {/* Highlight Section */}
                    {highlight && highlight.length > 0 && (
                        <div className="mb-6 p-4 rounded-lg border-l-4 border-pink-400 bg-pink-50 dark:bg-gray-800 flex items-start gap-3">
                            <span className="mt-1 text-pink-500 dark:text-pink-300">🌟</span>
                            <div>
                                <div className="font-bold text-lg mb-1 text-pink-700 dark:text-pink-300">Highlights</div>
                                <ul className="list-disc pl-5 space-y-1 text-lg text-gray-800 dark:text-gray-100">
                                    {highlight.map((item: string, idx: number) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                    {/* How Section (collapsible) */}
                    {how && how.length > 0 && (
                        <div className="mb-6">
                            <button
                                onClick={() => setShowHow(v => !v)}
                                className="flex items-center gap-2 text-base font-semibold text-purple-700 dark:text-purple-300 hover:underline focus:outline-none mb-2"
                                aria-expanded={showHow}
                            >
                                <span className="text-xl">🛠️</span>
                                {showHow ? 'Hide Steps' : 'Show How It Works'}
                            </button>
                            {showHow && (
                                <div className="p-4 rounded-lg border-l-4 border-purple-400 bg-purple-50 dark:bg-gray-800 flex items-start gap-3">
                                    <div>
                                        <div className="font-bold text-lg mb-1 text-purple-700 dark:text-purple-300">How</div>
                                        <ol className="list-decimal pl-5 space-y-1 text-lg text-gray-800 dark:text-gray-100">
                                            {how.map((item: string, idx: number) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Tech Stack */}
                    {tools && tools.length > 0 && (
                        <div className="flex flex-wrap gap-3 mb-6">
                            {tools.map((tool: string) => (
                                <span
                                    key={tool}
                                    className="text-base px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold shadow-sm border border-gray-200 dark:border-gray-700"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                {/* Related Blogs */}
                {relatedBlogs && relatedBlogs.length > 0 && (
                    <div className="mt-6">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-gray-500 dark:text-gray-400" /> Related Stories
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {relatedBlogs.map((blogPath: string) => {
                                const blog = blogs.find(b => b.slugPath.join("/") === blogPath);
                                if (!blog) return null;
                                return (
                                    <Link
                                        key={blogPath}
                                        href={`/blogs/${blogPath}`}
                                        className="inline-block text-sm px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold shadow border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        {blog.frontmatter.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
} 