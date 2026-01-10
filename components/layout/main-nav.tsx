"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav() {
    const pathname = usePathname()

    return (
        <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <span className="hidden font-bold sm:inline-block">Portfolio</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link
                    href="/profile"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname === "/profile" ? "text-foreground" : "text-foreground/60"
                    )}
                >
                    Profile
                </Link>
                <Link
                    href="/project"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname === "/project" ? "text-foreground" : "text-foreground/60"
                    )}
                >
                    Projects
                </Link>
                <Link
                    href="/certifications"
                    className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname === "/certifications" ? "text-foreground" : "text-foreground/60"
                    )}
                >
                    Certifications
                </Link>
            </nav>
        </div>
    )
}
