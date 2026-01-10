import { ProjectCard } from "@/components/project/project-card"

interface Project {
    id: number
    title: string
    description: string
    tags: string[]
    link: string
    repo: string
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    )
}
