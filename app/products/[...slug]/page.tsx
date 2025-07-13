import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2, BookOpen } from "lucide-react";
import { getContentBySlug, getAllContent } from "@/lib/content";
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
    params: {
        slug: string[];
    };
}

export default async function ProductPage({ params }: Props) {
    const product = await getContentBySlug("products", params.slug);
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
        <article className="min-h-screen bg-white dark:bg-gray-950">
            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-4 pt-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                </Link>
            </div>

            {/* Product Header */}
            <header className="max-w-7xl mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="flex-1 max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                Product
                            </span>
                            {product.frontmatter.status && (
                                <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                                    {product.frontmatter.status}
                                </span>
                            )}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                            {product.frontmatter.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            {product.frontmatter.description}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {product.frontmatter.sourceUrl && (
                                <a
                                    href={product.frontmatter.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                                >
                                    <Code2 className="w-4 h-4" />
                                    <span>View Source</span>
                                </a>
                            )}
                            {product.frontmatter.liveUrl && (
                                <a
                                    href={product.frontmatter.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>Live Demo</span>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="w-full md:w-[480px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 shadow-xl dark:shadow-gray-900/30">
                        {product.frontmatter.demoVideo ? (
                            <video
                                src={product.frontmatter.demoVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full aspect-video object-cover"
                            />
                        ) : product.frontmatter.image ? (
                            <img
                                src={product.frontmatter.image}
                                alt={product.frontmatter.title}
                                className="w-full aspect-video object-cover"
                            />
                        ) : null}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 pb-24">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column - Main Content */}
                    <div className="flex-1 max-w-3xl">
                        {/* Tech Stack */}
                        {product.frontmatter.tools && product.frontmatter.tools.length > 0 && (
                            <div className="mb-12">
                                <h2 className="text-base font-semibold mb-4 text-gray-900 dark:text-white">Built with</h2>
                                <div className="flex flex-wrap gap-2">
                                    {product.frontmatter.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="px-4 py-1.5 text-sm rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Product Content */}
                        <div className="prose prose-gray prose-lg dark:prose-invert max-w-none">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    h1: (props) => <h1 className="text-3xl font-bold mb-6 mt-8" {...props} />,
                                    h2: (props) => <h2 className="text-2xl font-bold mb-4 mt-8" {...props} />,
                                    h3: (props) => <h3 className="text-xl font-bold mb-3 mt-6" {...props} />,
                                    p: (props) => <p className="mb-4 leading-relaxed" {...props} />,
                                    ul: (props) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
                                    ol: (props) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
                                    li: (props) => <li className="text-gray-700 dark:text-gray-300" {...props} />,
                                    strong: (props) => <strong className="font-bold text-gray-900 dark:text-white" {...props} />,
                                    em: (props) => <em className="italic text-gray-800 dark:text-gray-200" {...props} />,
                                    blockquote: (props) => (
                                        <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-4 italic my-4" {...props} />
                                    ),
                                    code: ({ children, className, ...props }: { children: React.ReactNode, className?: string, inline?: boolean }) => {
                                        const match = /language-(\w+)/.exec(className || '');
                                        const inline = !match;
                                        return inline
                                            ? <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5" {...props}>{children}</code>
                                            : <code className="block bg-gray-100 dark:bg-gray-800 rounded p-4 my-4 overflow-x-auto" {...props}>{children}</code>
                                    },
                                }}
                            >
                                {product.content}
                            </ReactMarkdown>
                        </div>

                        {/* What I Learned */}
                        {product.frontmatter.learnings && product.frontmatter.learnings.length > 0 && (
                            <div className="mt-16">
                                <h2 className="text-2xl font-bold mb-8">Key Learnings</h2>
                                <div className="grid gap-6">
                                    {product.frontmatter.learnings.map((learning: string, index: number) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-900/30"
                                        >
                                            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2.5" />
                                            <p className="text-gray-600 dark:text-gray-300 text-lg">{learning}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column - Related Content */}
                    <aside className="lg:w-[400px]">
                        <div className="sticky top-8">
                            {/* Related Blog Posts */}
                            {relatedBlogs.length > 0 && (
                                <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-sm dark:shadow-gray-900/30">
                                    <div className="flex items-center gap-2 mb-6">
                                        <BookOpen className="w-5 h-5 text-blue-500" />
                                        <h2 className="text-xl font-semibold">Related Articles</h2>
                                    </div>
                                    <div className="space-y-6">
                                        {relatedBlogs.map((blog) => (
                                            <Link
                                                key={blog.slugPath.join("/")}
                                                href={`/blogs/${blog.slugPath.join("/")}`}
                                                className="group block"
                                            >
                                                <div className="rounded-xl p-4 transition-colors border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500">
                                                    <h3 className="font-medium mb-2 line-clamp-2 group-hover:text-blue-500 transition-colors">
                                                        {blog.frontmatter.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                                        {blog.frontmatter.description}
                                                    </p>
                                                    <div className="flex items-center gap-2 mt-3 text-sm text-blue-500">
                                                        <span>Read more</span>
                                                        <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
} 