// To use a modern, friendly font, add this to your layout or _app: 
// <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet" />
// and add 'font-nunito' to your Tailwind config if desired.
import Image from "next/image";
import { notFound } from "next/navigation";
import { getContentBySlug, getAllContent } from "@/lib/content";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ArrowLeftIcon } from "lucide-react";
import Link from 'next/link';

export default async function BlogPage({ params }: any) {
    const resolvedParams = await params;
    const content = await getContentBySlug("blogs", resolvedParams.slug);

    if (!content) {
        notFound();
    }

    // Generate TOC from markdown content
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const toc: { level: number; text: string; id: string }[] = [];
    let match;
    while ((match = headingRegex.exec(content.content)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        toc.push({ level, text, id });
    }

    // Custom heading renderer to add id attributes and style
    const components = {
        h1: (props: any) => <h1 id={slugify(props.children)} className="text-5xl font-extrabold text-black dark:text-white mt-12 mb-8 font-nunito" {...props} />,
        h2: (props: any) => <h2 id={slugify(props.children)} className="text-4xl font-bold text-black dark:text-white mt-10 mb-6 flex items-center gap-2 font-nunito"><span role='img' aria-label='section'>✨</span>{props.children}</h2>,
        h3: (props: any) => <h3 id={slugify(props.children)} className="text-3xl font-bold text-black dark:text-white mt-8 mb-4 flex items-center gap-2 font-nunito"><span role='img' aria-label='subsection'>🔸</span>{props.children}</h3>,
        blockquote: (props: any) => <blockquote className="border-l-4 border-pink-400 bg-pink-50 dark:bg-gray-900 text-2xl font-semibold italic px-6 py-4 my-8 rounded-r-lg font-nunito text-black dark:text-white">{props.children}</blockquote>,
        code: (props: any) => <code className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white px-2 py-1 rounded font-mono text-lg">{props.children}</code>,
        a: (props: any) => <a {...props} className="text-black dark:text-white underline hover:text-pink-600 dark:hover:text-pink-400 transition-colors" />,
        iframe: ({ ...props }) => (
            <div className="iframe-container my-8">
                <iframe {...props} className="w-full h-64 md:h-96 rounded-lg border-2 border-pink-200" />
            </div>
        ),
    };
    function slugify(children: any) {
        const text = Array.isArray(children) ? children.join(' ') : children;
        return String(text).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    // Reading progress bar (optional, fun)
    // This would require a client component for scroll tracking, so just leave a placeholder comment for now.
    // <ReadingProgressBar />

    return (
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto py-16 px-2 pl-1 gap-8 font-nunito bg-white dark:bg-gray-950">
            {/* Back Button */}
            <div className="absolute left-0 top-0 mt-8 ml-4 z-10">
                <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-semibold shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <ArrowLeftIcon className="w-5 h-5" />
                    Back
                </Link>
            </div>
            {/* Sidebar TOC */}



            {toc.length > 0 && (
                <aside className="hidden md:block w-72 flex-shrink-0 pr-8 sticky top-24 self-start">
                    <nav className="border-l-4 border-pink-300 pl-6">
                        <div className="mb-4 font-extrabold text-black dark:text-white text-xl tracking-wide">On this page</div>
                        <ul className="space-y-3">
                            {toc.map((item) => (
                                <li key={item.id} className={`ml-${(item.level - 1) * 4}`}>
                                    <a
                                        href={`#${item.id}`}
                                        className="block text-lg font-semibold text-black dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition-colors pl-2 border-l-2 border-transparent hover:border-pink-400"
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
            )}
            {/* Main Content */}
            <article className="flex-1 min-w-0">
                <header className="mb-16">
                    <h1 className="text-5xl font-extrabold text-black dark:text-white mb-6 font-nunito">{content.frontmatter.title}</h1>
                    {content.frontmatter.description && (
                        <p className="text-2xl text-black dark:text-white mb-8 font-nunito">{content.frontmatter.description}</p>
                    )}
                    {content.frontmatter.image && (
                        <Image
                            src={content.frontmatter.image}
                            alt={content.frontmatter.title}
                            width={800}
                            height={400}
                            className="w-full h-[400px] object-cover rounded-xl shadow-lg mt-8"
                        />
                    )}
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none text-2xl leading-relaxed font-nunito">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                        components={components}
                    >
                        {content.content}
                    </ReactMarkdown>
                </div>

                <footer className="mt-16 pt-8 border-t">
                    <div className="flex justify-between items-center">
                        <div>
                            {content.frontmatter.tags?.map((tag: string) => (
                                <span key={tag} className="inline-block bg-pink-100 dark:bg-pink-900 text-black dark:text-white rounded-full px-4 py-2 text-lg mr-2 font-semibold font-nunito">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        <div className="text-lg text-black dark:text-white font-nunito">
                            {content.frontmatter.date && (
                                <time dateTime={content.frontmatter.date}>
                                    {new Date(content.frontmatter.date).toLocaleDateString()}
                                </time>
                            )}
                        </div>
                    </div>
                </footer>
            </article>
        </div>
    );
}

// Generate static paths at build time
export async function generateStaticParams(): Promise<any> {
    const blogs = await getAllContent('blogs');
    return blogs.map((blog: any) => ({
        slug: blog.slugPath,
    }));
} 