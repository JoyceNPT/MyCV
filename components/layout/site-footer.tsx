import { PROFILE } from "@/lib/data"
import { Code2 } from "lucide-react"

export function SiteFooter() {
    return (
        <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-2 font-mono text-sm font-bold text-primary">
                            <Code2 className="size-4" />
                            {PROFILE.name}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground text-center md:text-left">
                            {PROFILE.title} · Building scalable systems
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <a href={PROFILE.social.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
                        <a href={PROFILE.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                        <a href={PROFILE.social.email} className="hover:text-primary transition-colors">Email</a>
                    </div>
                </div>
                
                <div className="mt-8 border-t border-border/40 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
                    <p>© {new Date().getFullYear()} / portfolio.build --stable</p>
                    <p>Designed & Built with <span className="text-red-500">♥</span></p>
                </div>
            </div>
        </footer>
    )
}
