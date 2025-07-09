import { notFound } from "next/navigation";
import { getContentBySlug } from "@/lib/content";

interface ProductPageProps {
    params: {
        slug: string[];
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const content = await getContentBySlug("products", params.slug);

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
                    <img
                        src={content.frontmatter.image}
                        alt={content.frontmatter.title}
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
export async function generateStaticParams() {
    const products = await getContentBySlug('products', []);
    return products ? [{ slug: products.slugPath }] : [];
} 