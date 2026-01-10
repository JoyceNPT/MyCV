import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Experience {
    id: number
    role: string
    company: string
    period: string
    description: string
}

export function ExperienceList({ experience }: { experience: Experience[] }) {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">Work Experience</h2>
            </div>
            <div className="relative border-l border-border ml-3 pl-8 space-y-8 py-2">
                {experience.map((job) => (
                    <div key={job.id} className="relative">
                        <span className="absolute -left-[37px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-primary bg-background ring-4 ring-background">
                            <span className="h-2 w-2 rounded-full bg-primary" />
                        </span>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <div>
                                <h3 className="text-xl font-semibold leading-none">{job.role}</h3>
                                <p className="text-muted-foreground font-medium mt-1">{job.company}</p>
                            </div>
                            <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded-md mt-1 sm:mt-0 w-fit">
                                {job.period}
                            </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                            {job.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
