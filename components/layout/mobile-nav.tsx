"use client"

import * as React from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Link } from "@/components/ui/link"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet"

export function MobileNav() {
    const [open, setOpen] = React.useState(false)
    const navItems = [
        { href: "/profile", label: "Profile" },
        { href: "/project", label: "Projects" },
        { href: "/certifications", label: "Certifications" },
    ]

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[340px] p-8 pt-12">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">Main navigation for mobile screens</SheetDescription>
                <div className="flex flex-col space-y-8">
                    <Link
                        href="/profile"
                        onClick={() => setOpen(false)}
                        className="text-2xl font-bold tracking-tight text-primary"
                    >
                        Portfolio
                    </Link>
                    <nav className="flex flex-col space-y-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </SheetContent>
        </Sheet>
    )
}
