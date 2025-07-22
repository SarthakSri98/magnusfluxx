import Link from "next/link";
import { getAllContent } from "@/lib/content";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import './globals.css'

export default async function Home() {
    const products = await getAllContent("products");
    const blogs = await getAllContent("blogs");

    return (
        <main className="min-h-screen scroll-smooth">
            {/* Indie Navigation Shortcuts */}
            <nav className="w-full flex justify-center gap-6 pt-4 mb-12">
                <a href="#products" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-lg font-semibold shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                    <span role="img" aria-label="Products">🛠️</span> Products
                </a>
                <a href="#case-studies" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-lg font-semibold shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                    <span role="img" aria-label="Case Studies">📖</span> Case Studies
                </a>
                <a href="#blogs" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-lg font-semibold shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                    <span role="img" aria-label="Blogs">📝</span> Blogs
                </a>
            </nav>
            {/* Hero Section */}
            <section className="relative py-20 sm:py-28 flex flex-col items-center justify-center border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h1 className="text-5xl sm:text-7xl font-extrabold text-gray-900 dark:text-white mb-8">
                        Hi, I’m Sarthak <span className="inline-block animate-wiggle">👋</span>
                    </h1>
                    <p className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
                        <span className="inline-flex items-center gap-2 font-bold text-2xl mt-2">
                            <Sparkles className="w-6 h-6 text-yellow-500 dark:text-yellow-400 animate-pulse" />
                            Building, learning, and sharing the journey.
                        </span>
                    </p>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Here you’ll find the products I’ve built, the stories behind them, and the lessons learned along the way.
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section id="products" className="max-w-7xl mx-auto px-4 py-20 border-b border-gray-100 dark:border-gray-800">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                        🚀 Featured Indie Products
                    </h2>
                    <p className="text-2xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto font-medium">
                        Not just tools stories, experiments, and playgrounds for new ideas.
                    </p>
                </div>
                <div className="flex flex-col gap-14">
                    {products.reverse().map((product) => (
                        <ProductCard key={product.slugPath.join("/")} product={product} blogs={blogs} />
                    ))}
                </div>
            </section>

            {/* Case Studies Section (placeholder) */}
            <section id="case-studies" className="max-w-7xl mx-auto px-4 py-20 border-b border-gray-100 dark:border-gray-800">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                        📖 Case Studies
                    </h2>
                    <p className="text-2xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto font-medium">
                        Deep dives and stories from my product journey. (Coming soon)
                    </p>
                </div>
            </section>

            {/* Featured Blogs Section */}
            {blogs.length > 0 && (
                <section id="blogs" className="max-w-7xl mx-auto px-4 py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                            ✨ Latest Stories & Deep Dives
                        </h2>
                        <p className="text-2xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto font-medium">
                            Insights, experiments, and behind-the-scenes from my indie product journey.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {blogs.slice(0, 6).map((blog) => (
                            <Link
                                key={blog.slugPath.join("/")}
                                href={`/blogs/${blog.slugPath.join("/")}`}
                                className="group block overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg border border-gray-200 dark:border-gray-800 hover:scale-[1.03] transition-all duration-300 p-8"
                            >
                                {blog.frontmatter.image && (
                                    <div className="relative h-48 overflow-hidden rounded-lg mb-6">
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
                                <div>
                                    <div className="mb-4 flex items-center gap-2 text-sm text-gray-500 font-medium">
                                        <span role="img" aria-label="Story">📖</span> Story
                                    </div>
                                    <blockquote className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6 leading-relaxed border-l-4 border-pink-400 pl-4 bg-gray-50 dark:bg-gray-900">
                                        {blog.frontmatter.description}
                                    </blockquote>
                                    <h3 className="text-2xl font-extrabold mb-4 text-gray-900 dark:text-white">
                                        {blog.frontmatter.title}
                                    </h3>
                                    {/* Blog Hook or Learnings */}
                                    {(blog.frontmatter.hook || (blog.frontmatter.learnings && blog.frontmatter.learnings.length > 0)) && (
                                        <div className="mb-6 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-800 shadow-inner flex items-start gap-3">
                                            <Sparkles className="w-6 h-6 text-yellow-500 dark:text-yellow-400 flex-shrink-0 mt-1" />
                                            <div>
                                                {blog.frontmatter.hook && (
                                                    <p className="text-lg font-bold text-pink-700 dark:text-pink-300 mb-1">
                                                        {blog.frontmatter.hook}
                                                    </p>
                                                )}
                                                {blog.frontmatter.learnings && blog.frontmatter.learnings.length > 0 && (
                                                    <ul className="list-disc pl-5 space-y-1 text-base text-purple-700 dark:text-purple-300">
                                                        {blog.frontmatter.learnings.map((item: string, idx: number) => (
                                                            <li key={idx}>{item}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex flex-wrap gap-2">
                                            {blog.frontmatter.tags?.slice(0, 2).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium shadow-sm border border-gray-100 dark:border-gray-700"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-pink-500 transform group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {blogs.length > 6 && (
                        <div className="text-center mt-16">
                            <Link
                                href="/blogs"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 text-lg font-bold shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                            >
                                View All Stories
                                <ArrowRight className="w-6 h-6" />
                            </Link>
                        </div>
                    )}
                </section>
            )}
        </main>
    );
} 