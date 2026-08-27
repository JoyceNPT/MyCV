"use client"

import { cn } from "@/lib/utils"
import { Link } from "@/components/ui/link"
import { useState, useEffect } from "react"

const navItems = [
    { href: "/profile", label: "Profile" },
    { href: "/project", label: "Projects" },
    { href: "/certifications", label: "Certifications" },
]

export function MainNav() {
    const [pathname, setPathname] = useState(typeof window === "undefined" ? "/profile" : window.location.pathname)

    useEffect(() => {
        const handleLocationChange = () => setPathname(window.location.pathname)
        window.addEventListener("popstate", handleLocationChange)
        window.addEventListener("pushstate", handleLocationChange)
        return () => {
            window.removeEventListener("popstate", handleLocationChange)
            window.removeEventListener("pushstate", handleLocationChange)
        }
    }, [])

    return (
        <div className="mr-4 hidden md:flex">
            <Link href="/profile" className="mr-6 flex items-center space-x-2">
                <span className="hidden font-bold sm:inline-block">Portfolio</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname === item.href ? "text-foreground" : "text-foreground/60"
                        )}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </div>
    )
}
