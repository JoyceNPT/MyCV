import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink, Terminal } from "lucide-react"

interface Certification {
    id: number
    category: string
    name: string
    issuer: string
    date: string
    link: string
}

interface CertGroup {
    id: string
    title: string
    description: string
}

export function CertList({ certifications, groups }: { certifications: Certification[]; groups: readonly CertGroup[] }) {
    return (
        <div className="mt-6 space-y-6">
            {groups.map((group) => {
                const groupedCerts = certifications.filter((cert) => cert.category === group.id)

                if (groupedCerts.length === 0) {
                    return null
                }

                return (
                    <section key={group.id} className="dev-panel">
                        <div className="dev-panel-title">
                            <span className="flex items-center gap-2">
                                <Award className="size-4 text-primary" />
                                {group.title}
                            </span>
                            <code>registry --lane {group.id}</code>
                        </div>
                        <div className="space-y-5 p-5 sm:p-6">
                            <p className="flex max-w-3xl items-start gap-2 text-sm leading-6 text-muted-foreground">
                                <Terminal className="mt-1 size-4 shrink-0 text-primary" />
                                {group.description}
                            </p>
                            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                                {groupedCerts.map(cert => (
                                    <article key={cert.id} className="dev-card flex h-full flex-col gap-4">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="min-w-0">
                                                <p className="font-mono text-xs text-primary">cert::{cert.id}</p>
                                                <h3 className="mt-1 text-base font-semibold leading-6">{cert.name}</h3>
                                                <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                                            </div>
                                            <Badge variant="secondary" className="shrink-0 font-mono">{cert.date}</Badge>
                                        </div>
                                        <div className="mt-auto">
                                            <Button variant="outline" size="sm" asChild>
                                                <a href={cert.link} target="_blank" rel="noreferrer">
                                                    <ExternalLink className="w-4 h-4" />
                                                    Verify
                                                </a>
                                            </Button>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                )
            })}
        </div>
    )
}
