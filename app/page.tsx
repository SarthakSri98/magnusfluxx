import Link from "next/link";
import { Boxes, FileText, Lightbulb, ArrowUpRight, ExternalLink, Code2, Sparkles } from "lucide-react";
import { getAllContent } from "@/lib/content";

async function getFeaturedContent() {
    const [products, caseStudies, blogs] = await Promise.all([
        getAllContent("products"),
        getAllContent("case-studies"),
        getAllContent("blogs"),
    ]);

    return {
        products,
        caseStudies,
        blogs,
    };
}

export default async function Home() {
    const { products = [], caseStudies = [], blogs = [] } = await getFeaturedContent();

    // Get one featured item of each type
    const featuredProduct = products[0];
    const featuredCaseStudy = caseStudies[0];
    const featuredBlog = blogs[0];

    return (
        <main className="min-h-screen bg-white dark:bg-gray-950">
            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 w-full h-full dark:opacity-50">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
                </div>

                {/* Radial gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/50 dark:from-gray-950 dark:via-gray-950/90 dark:to-gray-950/50" />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-block mb-8 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 p-1">
                        <div className="rounded-xl bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl px-4 py-2">
                            <span className="text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                                Product Builder & PM
                            </span>
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                        Magnus Fluxx
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Building tools and exploring product management through real-world problem solving, frameworks, and hands-on development.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/products"
                            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative flex items-center gap-2">
                                View Products
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                        </Link>
                        <Link
                            href="/case-studies"
                            className="px-8 py-4 rounded-full border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300"
                        >
                            Read Case Studies
                        </Link>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Scroll to explore</span>
                    <div className="w-1 h-12 rounded-full bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-700" />
                </div>
            </section>

            {/* Featured Content */}
            <section className="relative py-32">
                {/* Premium background with subtle pattern */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4">
                    <div className="text-center mb-24">
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                            Featured Work
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Explore my latest products, case studies, and insights that showcase my approach to product development
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-16">
                        {featuredProduct && (
                            <Link href={`/products/${featuredProduct.slugPath.join("/")}`} className="group">
                                <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 shadow-2xl">
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative flex flex-col md:flex-row gap-8 p-8 rounded-[22px] bg-white dark:bg-gray-900 overflow-hidden">
                                        {/* Background pattern */}
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />

                                        <div className="flex-shrink-0 w-full md:w-[500px] aspect-[4/3] relative rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                                            {featuredProduct.frontmatter.image ? (
                                                <>
                                                    <img
                                                        src={featuredProduct.frontmatter.image}
                                                        alt={featuredProduct.frontmatter.title}
                                                        className="w-full h-full object-cover transition-opacity duration-500"
                                                    />
                                                    {featuredProduct.frontmatter.demoVideo && (
                                                        <video
                                                            src={featuredProduct.frontmatter.demoVideo}
                                                            autoPlay
                                                            loop
                                                            muted
                                                            playsInline
                                                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                        />
                                                    )}
                                                </>
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <Boxes className="w-16 h-16 text-blue-500" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex-1 flex flex-col justify-between py-4">
                                            <div>
                                                <div className="flex items-center gap-3 mb-6">
                                                    <span className="text-sm font-semibold px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                                        Featured Product
                                                    </span>
                                                    {featuredProduct.frontmatter.status && (
                                                        <span className="text-sm font-semibold px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                                                            {featuredProduct.frontmatter.status}
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {featuredProduct.frontmatter.title}
                                                </h3>
                                                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                                    {featuredProduct.frontmatter.description}
                                                </p>

                                                {/* What I Learned Section */}
                                                {featuredProduct.frontmatter.learnings && (
                                                    <div className="mb-8">
                                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                                                            Key Learnings
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {featuredProduct.frontmatter.learnings.slice(0, 2).map((learning: string, index: number) => (
                                                                <li
                                                                    key={index}
                                                                    className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                                                                >
                                                                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5" />
                                                                    {learning}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex items-center justify-between">
                                                {featuredProduct.frontmatter.tools && (
                                                    <div className="flex flex-wrap gap-2">
                                                        {featuredProduct.frontmatter.tools.slice(0, 3).map((tool: string) => (
                                                            <span
                                                                key={tool}
                                                                className="text-sm px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                                                            >
                                                                {tool}
                                                            </span>
                                                        ))}
                                                        {featuredProduct.frontmatter.tools.length > 3 && (
                                                            <span className="text-sm px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                                                +{featuredProduct.frontmatter.tools.length - 3} more
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                                                    <span className="font-medium">View Details</span>
                                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}

                        {featuredCaseStudy && (
                            <Link href={`/case-studies/${featuredCaseStudy.slugPath.join("/")}`} className="group">
                                <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 shadow-2xl">
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative flex flex-col md:flex-row gap-8 p-8 rounded-[22px] bg-white dark:bg-gray-900 overflow-hidden">
                                        {/* Background pattern */}
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />

                                        <div className="flex-shrink-0 w-full md:w-[500px] aspect-[4/3] relative rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10" />
                                            {featuredCaseStudy.frontmatter.image ? (
                                                <img
                                                    src={featuredCaseStudy.frontmatter.image}
                                                    alt={featuredCaseStudy.frontmatter.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <Lightbulb className="w-16 h-16 text-orange-500" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex-1 flex flex-col justify-between py-4">
                                            <div>
                                                <div className="flex items-center gap-3 mb-6">
                                                    <span className="text-sm font-semibold px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400">
                                                        Featured Case Study
                                                    </span>
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                                    {featuredCaseStudy.frontmatter.title}
                                                </h3>
                                                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                                    {featuredCaseStudy.frontmatter.description}
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                {featuredCaseStudy.frontmatter.tools && (
                                                    <div className="flex flex-wrap gap-2">
                                                        {featuredCaseStudy.frontmatter.tools.slice(0, 3).map((tool: string) => (
                                                            <span
                                                                key={tool}
                                                                className="text-sm px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                                                            >
                                                                {tool}
                                                            </span>
                                                        ))}
                                                        {featuredCaseStudy.frontmatter.tools.length > 3 && (
                                                            <span className="text-sm px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                                                +{featuredCaseStudy.frontmatter.tools.length - 3} more
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                                                    <span className="font-medium">Read Case Study</span>
                                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}

                        {featuredBlog && (
                            <Link href={`/blogs/${featuredBlog.slugPath.join("/")}`} className="group">
                                <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 shadow-2xl">
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative flex flex-col md:flex-row gap-8 p-8 rounded-[22px] bg-white dark:bg-gray-900 overflow-hidden">
                                        {/* Background pattern */}
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />

                                        <div className="flex-shrink-0 w-full md:w-[500px] aspect-[4/3] relative rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10" />
                                            {featuredBlog.frontmatter.image ? (
                                                <img
                                                    src={featuredBlog.frontmatter.image}
                                                    alt={featuredBlog.frontmatter.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <FileText className="w-16 h-16 text-green-500" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex-1 flex flex-col justify-between py-4">
                                            <div>
                                                <div className="flex items-center gap-3 mb-6">
                                                    <span className="text-sm font-semibold px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                                                        Featured Article
                                                    </span>
                                                    {featuredBlog.frontmatter.date && (
                                                        <span className="text-sm text-gray-500">
                                                            {new Date(featuredBlog.frontmatter.date).toLocaleDateString('en-US', {
                                                                month: 'long',
                                                                day: 'numeric',
                                                                year: 'numeric'
                                                            })}
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                                    {featuredBlog.frontmatter.title}
                                                </h3>
                                                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                                    {featuredBlog.frontmatter.description}
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                {featuredBlog.frontmatter.tags && (
                                                    <div className="flex flex-wrap gap-2">
                                                        {featuredBlog.frontmatter.tags.slice(0, 3).map((tag: string) => (
                                                            <span
                                                                key={tag}
                                                                className="text-sm px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                        {featuredBlog.frontmatter.tags.length > 3 && (
                                                            <span className="text-sm px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                                                +{featuredBlog.frontmatter.tags.length - 3} more
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                                                    <span className="font-medium">Read Article</span>
                                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </section>

            {/* Products Showcase */}
            <section className="relative py-32 bg-white dark:bg-gray-950">
                {/* Background patterns */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] opacity-50" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-16">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                                Products
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
                                Real-world tools and applications I&apos;ve built, each teaching me valuable lessons in product development.
                            </p>
                        </div>
                        <Link
                            href="/products"
                            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            <span className="font-medium">View All</span>
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-12">
                        {products.map((product) => (
                            <Link
                                key={product.slugPath.join("/")}
                                href={`/products/${product.slugPath.join("/")}`}
                                className="group"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-1 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20">
                                    <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                                        {/* Video/GIF container with hover effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:opacity-0 transition-opacity duration-500" />

                                        {product.frontmatter.image && (
                                            <>
                                                <img
                                                    src={product.frontmatter.image}
                                                    alt={product.frontmatter.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                {product.frontmatter.demoVideo && (
                                                    <video
                                                        src={product.frontmatter.demoVideo}
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                    />
                                                )}
                                            </>
                                        )}

                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />

                                        {/* Bottom metadata */}
                                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                                            <div className="flex items-center gap-3">
                                                <span className="flex items-center gap-1">
                                                    <Code2 className="w-4 h-4" />
                                                    <span className="text-sm">View Source</span>
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <ExternalLink className="w-4 h-4" />
                                                    <span className="text-sm">Live Demo</span>
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Sparkles className="w-4 h-4" />
                                                <span className="text-sm">New</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                                Product
                                            </span>
                                            {product.frontmatter.status && (
                                                <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                                                    {product.frontmatter.status}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors">
                                            {product.frontmatter.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                                            {product.frontmatter.description}
                                        </p>

                                        {/* What I Learned Section */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                                                What I Learned
                                            </h4>
                                            <ul className="space-y-2">
                                                {product.frontmatter.learnings?.map((learning: string, index: number) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                                                    >
                                                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5" />
                                                        {learning}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tech Stack */}
                                        {product.frontmatter.tools && (
                                            <div className="flex flex-wrap gap-2">
                                                {product.frontmatter.tools.map((tool) => (
                                                    <span
                                                        key={tool}
                                                        className="text-sm px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                                                    >
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Content */}
            <section className="relative py-32 bg-gray-50 dark:bg-gray-900/50">
                {/* Background patterns */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/95 to-gray-50 dark:from-gray-900/50 dark:via-gray-900/95 dark:to-gray-900/50" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                        Recent Posts
                    </h2>

                    <div className="grid grid-cols-1 gap-px bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden backdrop-blur-xl">
                        {[...products, ...caseStudies, ...blogs].slice(0, 5).map((item, index) => (
                            <Link
                                key={item.slugPath.join("/")}
                                href={`/${item.slugPath.join("/")}`}
                                className="group relative bg-white dark:bg-gray-900 p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-sm text-gray-500">0{index + 1}</span>
                                            {item.frontmatter.date && (
                                                <span className="text-sm text-gray-500">
                                                    {new Date(item.frontmatter.date).toLocaleDateString('en-US', {
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-500 transition-colors">
                                            {item.frontmatter.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 line-clamp-1">
                                            {item.frontmatter.description}
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="relative py-32 bg-white dark:bg-gray-950">
                {/* Background patterns */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px] opacity-50" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
                </div>

                <div className="relative max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                        Stay Updated
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                        Get notified about new products, case studies, and insights.
                    </p>
                    <form className="flex gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:border-gray-900 dark:focus:border-gray-100 transition-colors"
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative py-16 bg-gray-50 dark:bg-gray-900/50">
                {/* Background patterns */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/95 to-gray-50 dark:from-gray-900/50 dark:via-gray-900/95 dark:to-gray-900/50" />
                </div>

                <div className="relative max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            © {new Date().getFullYear()} Magnus Fluxx
                        </p>
                        <div className="flex items-center gap-8">
                            <Link href="/about" className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                About
                            </Link>
                            <Link href="https://linkedin.com/in/yourusername" className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                LinkedIn
                            </Link>
                            <Link href="https://github.com/yourusername" className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                GitHub
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
} 