import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Github, Workflow } from "lucide-react"

interface Project {
    id: number
    title: string
    subtitle: string
    period: string
    description: string
    responsibilities: string[]
    tags: string[]
    link: string
    repo: string
}

export function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="dev-card flex h-full flex-col gap-5 hover:scale-[1.01] hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:bg-background/60">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                    <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{project.subtitle}</p>
                </div>
                <Badge variant="secondary" className="w-fit shrink-0 font-mono text-xs bg-background/50">{project.period}</Badge>
            </div>

            <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>

            <div className="rounded-xl border border-border/50 bg-background/30 p-5 group-hover:border-primary/20 transition-colors">
                <h4 className="flex items-center gap-2 font-mono text-sm font-semibold mb-4 text-foreground/90">
                    <Workflow className="size-4 text-primary" />
                    responsibilities.map()
                </h4>
                <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
                    {project.responsibilities.map((item) => (
                        <li key={item} className="flex gap-3 items-start">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/80 shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-auto pt-2">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-[11px] font-medium border-border/50 bg-background/50 hover:bg-primary/10 hover:text-primary transition-colors">{tag}</Badge>
                    ))}
                </div>

                <div className="flex flex-wrap gap-3">
                    {project.link !== "#" ? (
                        <Button size="sm" className="group shadow-sm hover:shadow-md transition-all active:scale-95 hover:scale-105" asChild>
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <Globe className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                                Live
                            </a>
                        </Button>
                    ) : null}
                    {project.repo !== "#" ? (
                        <Button size="sm" variant="outline" className="group border-border hover:bg-secondary hover:text-foreground shadow-sm hover:shadow-md transition-all active:scale-95 hover:scale-105" asChild>
                            <a href={project.repo} target="_blank" rel="noreferrer">
                                <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                                Code
                            </a>
                        </Button>
                    ) : null}
                </div>
            </div>
        </article>
    )
}
