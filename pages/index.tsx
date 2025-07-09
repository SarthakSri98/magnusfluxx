"use client";

import { ArrowRight, BrainCog, LayoutTemplate, NotebookPen } from "lucide-react";
import { FeaturedPostCard } from "@/components/FeaturedPostCard";
import { SectionCard } from "@/components/SectionCard";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
    // Mock featured content — replace with real data fetching later
    const featured = {
        product: {
            href: "/my-products/inspector-saab",
            title: "InspectorSaab – AI Code Review",
            hook: "Ship cleaner code, 10x faster.",
            thumbnail: "https://images.unsplash.com/photo-1605902711622-cfb43c443c35?w=1200&q=80",
            tags: ["AI", "Developer Tool"],
        },
        caseStudy: {
            href: "/case-studies/cred-redesign",
            title: "CRED App UX Redesign",
            hook: "Boosted retention by 40% in 3 months.",
            thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db90ca?w=1200&q=80",
            tags: ["UX", "Mobile"],
        },
        blog: {
            href: "/blogs/philosophy/confidence-framework",
            title: "The Confidence Framework",
            hook: "A mental model for product bets.",
            thumbnail: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
            tags: ["Frameworks", "Strategy"],
        },
    };

    return (
        <main className="flex flex-col">
            {/* HERO */}
            <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-sky-900 via-indigo-900 to-black text-center text-white">
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_60%)]" />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-extrabold tracking-tight"
                >
                    Magnus Fluxx
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 text-lg md:text-2xl max-w-2xl"
                >
                    Building tools and prepping for PM roles
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-10 flex flex-wrap justify-center gap-4"
                >
                    <Link href="#products" className="btn-primary">View Products</Link>
                    <Link href="#case-studies" className="btn-secondary">Read Case Studies</Link>
                    <Link href="#blog" className="btn-secondary">Explore Blog</Link>
                </motion.div>
            </section>

            {/* FEATURED DROPS */}
            <section className="mx-auto w-full max-w-7xl px-4 py-24">
                <h2 className="mb-12 text-center text-4xl font-bold">Featured Drops</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    <FeaturedPostCard {...featured.product} />
                    <FeaturedPostCard {...featured.caseStudy} />
                    <FeaturedPostCard {...featured.blog} />
                </div>
            </section>

            {/* SECTION NAVIGATION */}
            <section className="space-y-20 bg-gray-50 py-24 dark:bg-gray-900">
                <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3" id="products">
                    <SectionCard
                        icon={<BrainCog className="h-8 w-8" />}
                        title="My Products"
                        subtitle="Tools and applications I’ve built to solve real-world problems"
                        cta="Browse Products"
                        href="/my-products"
                    />
                    <SectionCard
                        icon={<LayoutTemplate className="h-8 w-8" />}
                        title="Case Studies"
                        subtitle="Product breakdowns, UX redesigns, and teardown insights"
                        cta="See Case Studies"
                        href="/case-studies"
                        id="case-studies"
                    />
                    <SectionCard
                        icon={<NotebookPen className="h-8 w-8" />}
                        title="Blog"
                        subtitle="Frameworks, mental models, and behavior essays"
                        cta="Read the Blog"
                        href="/blogs"
                        id="blog"
                    />
                </div>
            </section>

            {/* ABOUT ME */}
            <section className="mx-auto max-w-4xl px-4 py-24 text-center">
                <h2 className="mb-6 text-3xl font-bold">About Me</h2>
                <p className="text-muted-foreground text-lg">
                    I’m a builder exploring product management by solving real problems, writing about frameworks, and launching tools along the way.
                </p>
                <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-primary hover:underline">
                    Learn more <ArrowRight className="h-4 w-4" />
                </Link>
            </section>

            {/* CONTACT / FOOTER */}
            <footer className="border-t bg-gray-100 py-12 dark:bg-gray-800 dark:border-gray-700">
                <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 md:flex-row md:justify-between">
                    <div className="space-x-4 text-muted-foreground">
                        <Link href="mailto:your@email.com">Email</Link>
                        <Link href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</Link>
                        <Link href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</Link>
                    </div>
                    <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Magnus Fluxx</p>
                </div>
            </footer>
        </main>
    );
}

// Tailwind Button utilities (could also be extracted to Button component)
const baseBtn = "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
const primaryBtn = `${baseBtn} bg-primary text-primary-foreground hover:bg-primary/90`;
const secondaryBtn = `${baseBtn} border border-primary text-primary hover:bg-primary/10`;

// @ts-expect-error – extend Link props
function Btn({ href, children, variant = "primary" }) {
    return (
        <Link href={href} className={variant === "primary" ? primaryBtn : secondaryBtn}>
            {children}
        </Link>
    );
} 