import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Certification {
    id: number
    name: string
    issuer: string
    date: string
    link: string
}

export function CertList({ certifications }: { certifications: Certification[] }) {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {certifications.map(cert => (
                <Card key={cert.id}>
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="text-lg">{cert.name}</CardTitle>
                                <CardDescription>{cert.issuer}</CardDescription>
                            </div>
                            <Badge variant="secondary">{cert.date}</Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Button variant="outline" size="sm" asChild>
                            <Link href={cert.link} target="_blank">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Verify
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
