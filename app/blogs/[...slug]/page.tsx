import Image from "next/image";
import { notFound } from "next/navigation";
import { getContentBySlug, getAllContent } from "@/lib/content";

export default async function BlogPage({ params }: any) {
    const resolvedParams = await params;
    const content = await getContentBySlug("blogs", resolvedParams.slug);

    if (!content) {
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto py-16 px-4">
            <header className="mb-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{content.frontmatter.title}</h1>
                {content.frontmatter.description && (
                    <p className="text-xl text-muted-foreground">{content.frontmatter.description}</p>
                )}
                {content.frontmatter.image && (
                    <Image
                        src={content.frontmatter.image}
                        alt={content.frontmatter.title}
                        width={800}
                        height={400}
                        className="w-full h-[400px] object-cover rounded-lg mt-8"
                    />
                )}
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
                {content.content}
            </div>

            <footer className="mt-12 pt-8 border-t">
                <div className="flex justify-between items-center">
                    <div>
                        {content.frontmatter.tags?.map((tag: string) => (
                            <span key={tag} className="inline-block bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm mr-2">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                        {content.frontmatter.date && (
                            <time dateTime={content.frontmatter.date}>
                                {new Date(content.frontmatter.date).toLocaleDateString()}
                            </time>
                        )}
                    </div>
                </div>
            </footer>
        </article>
    );
}

// Generate static paths at build time
export async function generateStaticParams(): Promise<any> {
    const blogs = await getAllContent('blogs');
    return blogs.map((blog: any) => ({
        slug: blog.slugPath,
    }));
} 