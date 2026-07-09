import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Workflow } from "lucide-react"

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
        <article className="dev-card flex h-full flex-col gap-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                    <p className="font-mono text-xs text-primary">project::{project.id}</p>
                    <h3 className="mt-1 text-xl font-semibold leading-tight">{project.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
                </div>
                <Badge variant="secondary" className="w-fit shrink-0 font-mono">{project.period}</Badge>
            </div>

            <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>

            <div className="rounded-lg border border-border/70 bg-card/55 p-4">
                <h4 className="flex items-center gap-2 font-mono text-sm font-semibold">
                    <Workflow className="size-4 text-primary" />
                    responsibilities.map()
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                    {project.responsibilities.map((item) => (
                        <li key={item} className="flex gap-2">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-[11px]">{tag}</Badge>
                ))}
            </div>

            <div className="flex flex-wrap gap-2">
                {project.link !== "#" ? (
                    <Button size="sm" asChild>
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            Live
                        </a>
                    </Button>
                ) : null}
                {project.repo !== "#" ? (
                    <Button size="sm" variant="outline" asChild>
                        <a href={project.repo} target="_blank" rel="noreferrer">
                            <Github className="w-4 h-4" />
                            Code
                        </a>
                    </Button>
                ) : null}
            </div>
        </article>
    )
}
