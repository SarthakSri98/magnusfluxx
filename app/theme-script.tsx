'use client'

export default function ThemeScript() {
    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `
                    (function() {
                        // Always set theme to light and remove dark mode
                        document.documentElement.classList.remove('dark');
                        localStorage.setItem('theme', 'light');
                    })();
                `,
            }}
        />
    )
} 