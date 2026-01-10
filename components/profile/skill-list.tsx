import { Badge } from "@/components/ui/badge"

interface Skills {
    technical: string[]
    soft: string[]
    languages: string[]
}

export function SkillList({ skills }: { skills: Skills }) {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Skills & Expertise</h2>

            <div className="space-y-4">
                <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">Technical</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.technical.map((skill) => (
                            <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm font-medium bg-secondary/50 hover:bg-secondary border border-transparent hover:border-border transition-colors">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.soft.map((skill) => (
                            <Badge key={skill} variant="outline" className="px-3 py-1 text-sm font-medium">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.languages.map((skill) => (
                            <Badge key={skill} variant="default" className="px-3 py-1 text-sm font-medium">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
