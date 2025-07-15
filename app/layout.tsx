import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import ThemeScript from './theme-script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Magnus Fluxx - Developer Portfolio',
  description: 'Full-stack developer passionate about building modern web applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.variable} ${openSans.variable} font-sans antialiased`}>
        <div className="relative min-h-screen bg-white text-slate-900 transition-colors">
          {/* Header with theme toggle */}
          {/* <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
              <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center gap-8">
                  <Link href="/" className="text-lg font-semibold">
                    Magnus Fluxx
                  </Link>
                  <Link href="/blog" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200">
                    Blog
                  </Link>
                </nav>
                <ThemeToggle />
              </div>
            </header> */}

          {/* Main content */}
          <main>{children}</main>

          {/* Footer */}
          {/* <footer className="mt-32 border-t border-slate-200 py-8 dark:border-slate-800">
              <div className="mx-auto max-w-7xl px-4 text-center text-sm text-slate-600 dark:text-slate-400 sm:px-6 lg:px-8">
                © {new Date().getFullYear()} Magnus Fluxx. All rights reserved.
              </div>
            </footer> */}
        </div>
      </body>
    </html>
  )
}
