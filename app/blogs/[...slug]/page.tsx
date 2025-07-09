import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import { getContentBySlug, getAllContent } from '@/lib/content';
import PostPage from '@/components/PostPage';

interface Props {
    params: {
        slug: string[];
    };
}

export default async function BlogPage({ params }: Props) {
    const blog = await getContentBySlug('blogs', params.slug);

    if (!blog) {
        notFound();
    }

    const mdxSource = await serialize(blog.content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                rehypeHighlight,
            ],
        },
    });

    return (
        <PostPage
            item={blog}
            type="blogs"
            mdxSource={mdxSource}
        />
    );
}

// Generate static paths at build time
export async function generateStaticParams() {
    const blogs = await getAllContent('blogs');
    return blogs.map(blog => ({
        slug: blog.slugPath,
    }));
} 