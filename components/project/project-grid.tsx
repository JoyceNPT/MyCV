import { ProjectCard } from "@/components/project/project-card"
import { FolderGit2, Terminal } from "lucide-react"

interface Project {
    id: number
    category: string
    title: string
    subtitle: string
    period: string
    description: string
    responsibilities: string[]
    tags: string[]
    link: string
    repo: string
}

interface ProjectGroup {
    id: string
    title: string
    description: string
}

export function ProjectGrid({ projects, groups }: { projects: Project[]; groups: readonly ProjectGroup[] }) {
    return (
        <div className="mt-6 space-y-6">
            {groups.map((group) => {
                const groupedProjects = projects.filter((project) => project.category === group.id)

                if (groupedProjects.length === 0) {
                    return null
                }

                return (
                    <section key={group.id} className="dev-panel">
                        <div className="dev-panel-title">
                            <span className="flex items-center gap-2">
                                <FolderGit2 className="size-4 text-primary" />
                                {group.title}
                            </span>
                            <code>filter --type {group.id}</code>
                        </div>
                        <div className="space-y-5 p-5 sm:p-6">
                            <p className="flex max-w-3xl items-start gap-2 text-sm leading-6 text-muted-foreground">
                                <Terminal className="mt-1 size-4 shrink-0 text-primary" />
                                {group.description}
                            </p>
                            <div className="grid gap-5 lg:grid-cols-2">
                                {groupedProjects.map(project => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </div>
                        </div>
                    </section>
                )
            })}
        </div>
    )
}
