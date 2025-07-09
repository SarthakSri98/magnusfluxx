export type ContentType = 'products' | 'case-studies' | 'blogs';

export interface Frontmatter {
    title: string;
    slug: string;
    hook: string;
    tags: string[];
    metric: string;
    thumbnail: string;
    layout: string;
    learned: string[];
}

export interface ContentItem {
    content: string;
    frontmatter: Frontmatter;
    slugPath: string[];
    subRoutes?: string[];
} 