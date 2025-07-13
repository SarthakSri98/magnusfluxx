import Image from "next/image";
import { notFound } from "next/navigation";
import { getContentBySlug } from "@/lib/content";

export default async function CaseStudyPage({ params }: any) {
    const content = await getContentBySlug("case-studies", params.slug);

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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="col-span-2">
                    <h2 className="text-2xl font-bold mb-4">Overview</h2>
                    <div className="prose prose-lg dark:prose-invert">
                        {content.content}
                    </div>
                </div>
                <div className="space-y-8">
                    {content.frontmatter.role && (
                        <div>
                            <h3 className="font-semibold mb-2">Role</h3>
                            <p>{content.frontmatter.role}</p>
                        </div>
                    )}
                    {content.frontmatter.timeline && (
                        <div>
                            <h3 className="font-semibold mb-2">Timeline</h3>
                            <p>{content.frontmatter.timeline}</p>
                        </div>
                    )}
                    {content.frontmatter.tools && (
                        <div>
                            <h3 className="font-semibold mb-2">Tools Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {content.frontmatter.tools.map((tool: string) => (
                                    <span key={tool} className="inline-block bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
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
    const caseStudies = await getContentBySlug('case-studies', []);
    return caseStudies ? [{ slug: caseStudies.slugPath }] : [];
} 