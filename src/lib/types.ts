export type ContentType = 'products' | 'case-studies' | 'blogs';

export interface Frontmatter {
    title: string;
    description?: string;
    date?: string;
    image?: string;
    tags?: string[];
    role?: string;
    timeline?: string;
    tools?: string[];
}

export interface ContentItem {
    content: string;
    frontmatter: Frontmatter;
    slugPath: string[];
} 