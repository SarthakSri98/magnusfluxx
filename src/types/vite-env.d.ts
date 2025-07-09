/// <reference types="vite/client" />

interface ImportMetaGlob {
    glob<T = unknown>(
        pattern: string,
        options?: {
            as?: string;
            eager?: boolean;
        }
    ): Record<string, T>;
}

interface ImportMeta {
    glob: ImportMetaGlob['glob'];
} 