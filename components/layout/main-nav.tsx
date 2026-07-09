"use client"

import { cn } from "@/lib/utils"

const navItems = [
    { href: "/profile", label: "Profile" },
    { href: "/project", label: "Projects" },
    { href: "/certifications", label: "Certifications" },
]

export function MainNav() {
    const pathname = typeof window === "undefined" ? "/profile" : window.location.pathname

    return (
        <div className="mr-4 hidden md:flex">
            <a href="/profile" className="mr-6 flex items-center space-x-2">
                <span className="hidden font-bold sm:inline-block">Portfolio</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
                {navItems.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname === item.href ? "text-foreground" : "text-foreground/60"
                        )}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </div>
    )
}
