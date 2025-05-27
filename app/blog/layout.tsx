import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog | Magnus Fluxx',
    description: 'Thoughts on product management, technology, philosophy, and human behavior.'
}

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 