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
    // Product-specific fields
    demoVideo?: string;
    status?: 'Live' | 'Beta' | 'In Progress';
    learnings?: string[];
    sourceUrl?: string;
    liveUrl?: string;
}

export interface ContentItem {
    content: string;
    frontmatter: Frontmatter;
    slugPath: string[];
} 