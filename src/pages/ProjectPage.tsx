import { ProjectGrid } from "@/components/project/project-grid"
import { PROJECT_GROUPS, PROJECTS } from "@/lib/data"
import { GitBranch, Rocket, Terminal } from "lucide-react"

export function ProjectPage() {
    return (
        <div className="dev-profile min-h-screen bg-background">
            <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <section className="dev-hero">
                    <div className="dev-window-bar">
                        <span className="bg-red-400" />
                        <span className="bg-amber-400" />
                        <span className="bg-emerald-400" />
                        <code>~/portfolio/projects.pipeline</code>
                    </div>
                    <div className="grid gap-6 p-5 md:grid-cols-[minmax(0,1fr)_320px] md:p-8">
                        <div className="space-y-4">
                            <p className="flex items-center gap-2 font-mono text-sm text-primary">
                                <Terminal className="size-4" />
                                npm run showcase
                            </p>
                            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Projects</h1>
                            <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                                Real delivery work, AI-driven development, and personal systems are grouped like a clean backlog so each project has its own context, stack, and responsibility trace.
                            </p>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                            <div className="dev-card">
                                <Rocket className="size-5 text-primary" />
                                <p className="mt-3 font-mono text-2xl font-bold">{PROJECTS.length}</p>
                                <p className="text-sm text-muted-foreground">tracked projects</p>
                            </div>
                            <div className="dev-card">
                                <GitBranch className="size-5 text-primary" />
                                <p className="mt-3 font-mono text-2xl font-bold">{PROJECT_GROUPS.length}</p>
                                <p className="text-sm text-muted-foreground">work streams</p>
                            </div>
                        </div>
                    </div>
                </section>

                <ProjectGrid projects={PROJECTS} groups={PROJECT_GROUPS} />
            </div>
        </div>
    )
}
