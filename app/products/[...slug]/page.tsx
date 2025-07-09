import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import { getContentBySlug, getAllContent } from "@/lib/content";
import { notFound } from "next/navigation";

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
    const relatedBlogs = blogs.filter(blog =>
        blog.frontmatter.tags?.some(tag =>
            product.frontmatter.tools?.includes(tag)
        )
    );

    return (
        <article className="min-h-screen py-12 bg-white dark:bg-gray-950">
            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-4 mb-12">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                </Link>
            </div>

            {/* Product Header */}
            <header className="max-w-7xl mx-auto px-4 mb-16">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                Product
                            </span>
                            {product.frontmatter.status && (
                                <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                                    {product.frontmatter.status}
                                </span>
                            )}
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {product.frontmatter.title}
                        </h1>

                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
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
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>Live Demo</span>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="w-full md:w-[400px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
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
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    {/* Product Content */}
                    <div className="prose dark:prose-invert max-w-none mb-12">
                        <div dangerouslySetInnerHTML={{ __html: product.content }} />
                    </div>

                    {/* What I Learned */}
                    {product.frontmatter.learnings && product.frontmatter.learnings.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold mb-6">What I Learned</h2>
                            <ul className="space-y-4">
                                {product.frontmatter.learnings.map((learning: string, index: number) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-900"
                                    >
                                        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500 mt-2" />
                                        <p className="text-gray-600 dark:text-gray-400">{learning}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <aside>
                    {/* Tech Stack */}
                    {product.frontmatter.tools && product.frontmatter.tools.length > 0 && (
                        <div className="mb-8">
                            <h2 className="text-lg font-semibold mb-4">Tech Stack</h2>
                            <div className="flex flex-wrap gap-2">
                                {product.frontmatter.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="text-sm px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Related Blog Posts */}
                    {relatedBlogs.length > 0 && (
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Related Articles</h2>
                            <div className="space-y-4">
                                {relatedBlogs.map((blog) => (
                                    <Link
                                        key={blog.slugPath.join("/")}
                                        href={`/blogs/${blog.slugPath.join("/")}`}
                                        className="block p-4 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    >
                                        <h3 className="font-medium mb-2 line-clamp-2">
                                            {blog.frontmatter.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                            {blog.frontmatter.description}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </aside>
            </div>
        </article>
    );
} 