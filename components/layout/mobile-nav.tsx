"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"

export function MobileNav() {
    const [open, setOpen] = React.useState(false)

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
            <SheetContent side="left" className="pr-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col space-y-3">
                    <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className="font-bold"
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/profile"
                        onClick={() => setOpen(false)}
                        className="text-foreground/70 transition-colors hover:text-foreground"
                    >
                        Profile
                    </Link>
                    <Link
                        href="/project"
                        onClick={() => setOpen(false)}
                        className="text-foreground/70 transition-colors hover:text-foreground"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/certifications"
                        onClick={() => setOpen(false)}
                        className="text-foreground/70 transition-colors hover:text-foreground"
                    >
                        Certifications
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    )
}
