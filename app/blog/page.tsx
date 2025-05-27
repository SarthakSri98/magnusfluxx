import BlogList from '@/components/BlogList'
import { getBlogPosts } from '@/lib/blog'
// Removed the import of BlogList as it cannot be found

export default async function BlogPage() {
    const posts = await getBlogPosts()

    return <BlogList initialPosts={posts} />
} 