import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllContent } from "@/lib/content";
import { ContentItem } from "@/lib/types";
import { AnimatedHero } from "@/components/AnimatedHero";

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

    return (
        <main className="min-h-screen">
            <AnimatedHero />

            {/* Products Section */}
            {products.length > 0 && (
                <section className="py-24 bg-white dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">My Products</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Tools and applications I&apos;ve built to solve real-world problems
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {products.map((product: ContentItem) => (
                                <Link
                                    key={product.slugPath.join("/")}
                                    href={`/my-products/${product.slugPath.join("/")}`}
                                    className="group block bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                                >
                                    {product.frontmatter.image && (
                                        <div className="aspect-[16/9] relative">
                                            <img
                                                src={product.frontmatter.image}
                                                alt={product.frontmatter.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        </div>
                                    )}
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {product.frontmatter.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4">
                                            {product.frontmatter.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {product.frontmatter.tools?.map((tool) => (
                                                <span
                                                    key={tool}
                                                    className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Case Studies */}
            {caseStudies.length > 0 && (
                <section className="py-24 bg-gray-50 dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Deep dives into my product development and design process
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-12">
                            {caseStudies.map((study: ContentItem) => (
                                <Link
                                    key={study.slugPath.join("/")}
                                    href={`/case-studies/${study.slugPath.join("/")}`}
                                    className="group block bg-white dark:bg-gray-900 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="aspect-[4/3] md:aspect-auto relative">
                                            {study.frontmatter.image && (
                                                <img
                                                    src={study.frontmatter.image}
                                                    alt={study.frontmatter.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            )}
                                        </div>
                                        <div className="p-8 flex flex-col justify-center">
                                            <div className="mb-4">
                                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                                    {study.frontmatter.title}
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    {study.frontmatter.description}
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                {study.frontmatter.role && (
                                                    <div>
                                                        <h4 className="text-sm font-semibold mb-1">Role</h4>
                                                        <p className="text-muted-foreground">{study.frontmatter.role}</p>
                                                    </div>
                                                )}
                                                {study.frontmatter.timeline && (
                                                    <div>
                                                        <h4 className="text-sm font-semibold mb-1">Timeline</h4>
                                                        <p className="text-muted-foreground">{study.frontmatter.timeline}</p>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {study.frontmatter.tools?.map((tool) => (
                                                    <span
                                                        key={tool}
                                                        className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                                                    >
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Blog Posts */}
            {blogs.length > 0 && (
                <section className="py-24 bg-white dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Blog Posts</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Insights and stories on product, design, and technology
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {blogs.map((post: ContentItem) => (
                                <Link
                                    key={post.slugPath.join("/")}
                                    href={`/blogs/${post.slugPath.join("/")}`}
                                    className="group block bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                                >
                                    {post.frontmatter.image && (
                                        <div className="aspect-[16/9] relative">
                                            <img
                                                src={post.frontmatter.image}
                                                alt={post.frontmatter.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                            {post.frontmatter.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-3">
                                            {post.frontmatter.description}
                                        </p>
                                        {post.frontmatter.date && (
                                            <time className="text-sm text-muted-foreground">
                                                {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </time>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Contact */}
            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">Let&apos;s Connect</h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Whether you&apos;re looking to collaborate on a project or just want to chat
                        about product development, I&apos;d love to hear from you.
                    </p>
                    <Link
                        href="mailto:your@email.com"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-colors"
                    >
                        Get in Touch
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </main>
    );
} 