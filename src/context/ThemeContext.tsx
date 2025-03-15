"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"

interface ThemeContextType {
    isDarkMode: boolean
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
    isDarkMode: false,
    toggleTheme: () => { },
})

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem("theme")
        return savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches
    })

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode)
        localStorage.setItem("theme", isDarkMode ? "dark" : "light")
    }, [isDarkMode])

    const toggleTheme = (): void => {
        setIsDarkMode((prev) => !prev)
    }

    return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>
}

