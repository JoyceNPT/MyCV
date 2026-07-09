export function SiteFooter() {
    return (
        <footer className="border-t border-border/80 bg-card/95">
            <div className="container mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
                <div>
                    <p className="font-mono text-sm font-semibold text-foreground">ThinhXDev</p>
                    <p className="mt-1 text-sm text-muted-foreground">.NET Software Engineer · AI-assisted builder</p>
                </div>
                <p className="font-mono text-xs text-muted-foreground">
                    © 2026 / portfolio.build --stable
                </p>
            </div>
        </footer>
    )
}
