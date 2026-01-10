import { ProjectGrid } from "@/components/project/project-grid"
import { PROJECTS } from "@/lib/data"

export default function ProjectPage() {
    return (
        <div className="container py-12 space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Projects</h1>
                <p className="text-muted-foreground">A selection of my recent work.</p>
            </div>
            <ProjectGrid projects={PROJECTS} />
        </div>
    )
}
