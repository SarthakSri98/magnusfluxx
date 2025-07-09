import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import { getContentBySlug } from '@/lib/content';
import PostPage from '@/components/PostPage';

interface Props {
    params: {
        slug: string[];
    };
}

export default async function CaseStudyPage({ params }: Props) {
    const caseStudy = await getContentBySlug('case-studies', params.slug);

    if (!caseStudy) {
        notFound();
    }

    const mdxSource = await serialize(caseStudy.content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                rehypeHighlight,
            ],
        },
    });

    return (
        <PostPage
            item={caseStudy}
            type="case-studies"
            mdxSource={mdxSource}
        />
    );
}

// Generate static paths at build time
export async function generateStaticParams() {
    const caseStudies = await getContentBySlug('case-studies', []);
    return caseStudies ? [{ slug: caseStudies.slugPath }] : [];
} 