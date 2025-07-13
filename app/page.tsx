import Link from "next/link";
import { getAllContent } from "@/lib/content";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default async function Home() {
    const products = await getAllContent("products");
    const blogs = await getAllContent("blogs");

    return (
        <main className="min-h-screen bg-white dark:bg-gray-950">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 py-24 sm:py-32">
                <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                    <div className="blur-[106px] h-56 bg-gradient-to-br from-blue-500 to-purple-400" />
                    <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600" />
                </div>
                <div className="max-w-7xl mx-auto px-4 relative">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-gray-300 mb-6">
                            Building the Future
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            A collection of innovative products pushing the boundaries of technology.
                            From AI-powered tools to developer utilities, explore what&apos;s possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="max-w-7xl mx-auto px-4 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured Products
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Explore innovative tools and applications that push the boundaries of technology.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product) => (
                        <Link
                            key={product.slugPath.join("/")}
                            href={`/products/${product.slugPath.join("/")}`}
                            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                        {product.frontmatter.status}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {product.frontmatter.title}
                                </h2>

                                {product.frontmatter.image && (
                                    <Image
                                        src={product.frontmatter.image}
                                        alt={`${product.frontmatter.title} cover`}
                                        width={500}
                                        height={192}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                        loading="lazy"
                                    />
                                )}

                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    {product.frontmatter.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {product.frontmatter.tools?.map((tool) => (
                                        <span
                                            key={tool}
                                            className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>

                                {/* Related Blogs */}
                                {product.frontmatter.relatedBlogs && product.frontmatter.relatedBlogs.length > 0 && (
                                    <div className="space-y-3">
                                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">Related Articles</h3>
                                        <div className="space-y-2">
                                            {product.frontmatter.relatedBlogs.map((blogPath) => {
                                                const blog = blogs.find(b => b.slugPath.join("/") === blogPath);
                                                if (!blog) return null;
                                                return (
                                                    <Link
                                                        key={blogPath}
                                                        href={`/blogs/${blogPath}`}
                                                        className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                                                    >
                                                        {blog.frontmatter.title}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                <div className="absolute bottom-8 right-8">
                                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Blogs Section */}
            {blogs.length > 0 && (
                <section className="max-w-7xl mx-auto px-4 py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Latest Articles
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Insights, stories, and technical deep-dives from our product development journey.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.slice(0, 6).map((blog) => (
                            <Link
                                key={blog.slugPath.join("/")}
                                href={`/blogs/${blog.slugPath.join("/")}`}
                                className="group block overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                            >
                                {blog.frontmatter.image && (
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={blog.frontmatter.image}
                                            alt={blog.frontmatter.title}
                                            width={400}
                                            height={200}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                                            Blog
                                        </span>
                                        {blog.frontmatter.date && (
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                {new Date(blog.frontmatter.date).toLocaleDateString()}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                        {blog.frontmatter.title}
                                    </h3>
                                    {blog.frontmatter.description && (
                                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                            {blog.frontmatter.description}
                                        </p>
                                    )}
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-2">
                                            {blog.frontmatter.tags?.slice(0, 2).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {blogs.length > 6 && (
                        <div className="text-center mt-12">
                            <Link
                                href="/blogs"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                            >
                                View All Articles
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    )}
                </section>
            )}
        </main>
    );
} 