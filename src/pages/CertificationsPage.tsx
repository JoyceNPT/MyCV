import { CertList } from "@/components/certifications/cert-list"
import { CERTIFICATION_GROUPS, CERTIFICATIONS } from "@/lib/data"
import { BadgeCheck, Boxes, Terminal } from "lucide-react"

export function CertificationsPage() {
    return (
        <div className="dev-profile min-h-screen bg-background">
            <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <section className="dev-hero">
                    <div className="dev-window-bar">
                        <span className="bg-red-400" />
                        <span className="bg-amber-400" />
                        <span className="bg-emerald-400" />
                        <code>~/portfolio/certifications.registry</code>
                    </div>
                    <div className="grid gap-6 p-5 md:grid-cols-[minmax(0,1fr)_320px] md:p-8">
                        <div className="space-y-4">
                            <p className="flex items-center gap-2 font-mono text-sm text-primary">
                                <Terminal className="size-4" />
                                verify --all
                            </p>
                            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Certifications</h1>
                            <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                                A compact credential registry grouped by professional foundations, AI capability, and soft-skill growth.
                            </p>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                            <div className="dev-card">
                                <BadgeCheck className="size-5 text-primary" />
                                <p className="mt-3 font-mono text-2xl font-bold">{CERTIFICATIONS.length}</p>
                                <p className="text-sm text-muted-foreground">verified records</p>
                            </div>
                            <div className="dev-card">
                                <Boxes className="size-5 text-primary" />
                                <p className="mt-3 font-mono text-2xl font-bold">{CERTIFICATION_GROUPS.length}</p>
                                <p className="text-sm text-muted-foreground">skill lanes</p>
                            </div>
                        </div>
                    </div>
                </section>

                <CertList certifications={CERTIFICATIONS} groups={CERTIFICATION_GROUPS} />
            </div>
        </div>
    )
}
