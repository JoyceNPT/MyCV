import { GraduationCap } from "lucide-react"

interface Education {
    id: number
    degree: string
    school: string
    year: string
    description?: string
}

export function EducationList({ education }: { education: Education[] }) {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Education</h2>
            <div className="space-y-6">
                {education.map((edu) => (
                    <div key={edu.id} className="flex gap-4">
                        <div className="mt-1 bg-secondary p-2 rounded-full h-fit">
                            <GraduationCap className="w-5 h-5 text-primary" />
                        </div>
                        <div className="space-y-1 w-full">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                                <h3 className="font-semibold text-lg">{edu.school}</h3>
                                <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded-md mt-1 sm:mt-0 w-fit">{edu.year}</span>
                            </div>
                            <p className="font-medium">{edu.degree}</p>
                            {edu.description && (
                                <p className="text-muted-foreground text-sm">{edu.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
