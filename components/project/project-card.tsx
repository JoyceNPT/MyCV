import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

interface Project {
    id: number
    title: string
    description: string
    tags: string[]
    link: string
    repo: string
}

export function ProjectCard({ project }: { project: Project }) {
    return (
        <Card className="flex flex-col h-full">
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="whitespace-pre-line">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col flex-1">
                <div className="flex-1"></div>
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                    <Link href={project.repo} target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
