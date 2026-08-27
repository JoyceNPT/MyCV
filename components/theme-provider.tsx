import * as React from "react"

type Theme = "light" | "dark" | "galaxy" | "system"

type ThemeContextValue = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

function resolveTheme(theme: Theme) {
    if (theme !== "system") {
        return theme
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function ThemeProvider({ children, defaultTheme = "system" }: { children: React.ReactNode; defaultTheme?: Theme }) {
    const [theme, setThemeState] = React.useState<Theme>(() => {
        if (typeof window === "undefined") {
            return defaultTheme
        }

        return (localStorage.getItem("theme") as Theme | null) ?? defaultTheme
    })

    React.useEffect(() => {
        const root = document.documentElement
        const applyTheme = () => {
            root.classList.remove("light", "dark", "galaxy")
            root.classList.add(resolveTheme(theme))
        }

        applyTheme()

        if (theme !== "system") {
            return
        }

        const media = window.matchMedia("(prefers-color-scheme: dark)")
        media.addEventListener("change", applyTheme)

        return () => media.removeEventListener("change", applyTheme)
    }, [theme])

    const setTheme = React.useCallback((themeValue: Theme) => {
        localStorage.setItem("theme", themeValue)
        setThemeState(themeValue)
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const value = React.useContext(ThemeContext)

    if (!value) {
        throw new Error("useTheme must be used inside ThemeProvider")
    }

    return value
}
