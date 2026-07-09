import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/95">
            <div className="container mx-auto flex h-16 max-w-7xl items-center px-5 sm:px-8 lg:px-10">
                <MainNav />
                <MobileNav />
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                    </div>
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}
