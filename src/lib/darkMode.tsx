'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface DarkModeContextType {
    isDarkMode: boolean
    toggle: () => void
    setTheme: (theme: Theme) => void
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        // On mount, read the theme from localStorage or system preference
        const savedTheme = localStorage.getItem('theme')
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        const initialTheme = savedTheme === 'dark' || (!savedTheme && systemTheme)

        setIsDarkMode(initialTheme)

        // Apply the initial theme
        if (initialTheme) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const toggle = () => {
        setIsDarkMode(prev => {
            const newTheme = !prev
            if (newTheme) {
                document.documentElement.classList.add('dark')
                localStorage.setItem('theme', 'dark')
            } else {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('theme', 'light')
            }
            return newTheme
        })
    }

    const setTheme = (theme: Theme) => {
        setIsDarkMode(theme === 'dark')
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggle, setTheme }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export function useDarkMode() {
    const context = useContext(DarkModeContext)
    if (context === undefined) {
        throw new Error('useDarkMode must be used within a DarkModeProvider')
    }
    return context
} 