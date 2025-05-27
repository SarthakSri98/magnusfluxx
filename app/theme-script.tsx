'use client'

export default function ThemeScript() {
    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `
                    (function() {
                        function getTheme() {
                            const savedTheme = localStorage.getItem('theme');
                            if (savedTheme) {
                                return savedTheme;
                            }
                            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                        }

                        const theme = getTheme();
                        if (theme === 'dark') {
                            document.documentElement.classList.add('dark');
                        } else {
                            document.documentElement.classList.remove('dark');
                        }
                    })();
                `,
            }}
        />
    )
} 