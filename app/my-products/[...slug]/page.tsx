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

export default async function ProductPage({ params }: Props) {
    const product = await getContentBySlug('products', params.slug);

    if (!product) {
        notFound();
    }

    const mdxSource = await serialize(product.content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                rehypeHighlight,
            ],
        },
    });

    return (
        <PostPage
            item={product}
            type="products"
            mdxSource={mdxSource}
        />
    );
}

// Generate static paths at build time
export async function generateStaticParams() {
    const products = await getContentBySlug('products', []);
    return products ? [{ slug: products.slugPath }] : [];
} 