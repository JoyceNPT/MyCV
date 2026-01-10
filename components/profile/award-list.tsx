import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

interface Award {
    id: number
    title: string
    issuer: string
    date: string
    description: string
}

export function AwardList({ awards }: { awards: Award[] }) {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Honors & Awards</h2>
            <div className="grid gap-4 md:grid-cols-2">
                {awards.map((award) => (
                    <Card key={award.id} className="border-l-4 border-l-primary">
                        <CardHeader className="p-4 pb-2">
                            <div className="flex items-center gap-2">
                                <Trophy className="w-5 h-5 text-yellow-500" />
                                <CardTitle className="text-lg">{award.title}</CardTitle>
                            </div>
                            <p className="text-sm text-muted-foreground">{award.issuer} • {award.date}</p>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                            <p className="text-sm">{award.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
