import { CertList } from "@/components/certifications/cert-list"
import { CERTIFICATIONS } from "@/lib/data"

export default function CertPage() {
    return (
        <div className="container py-12 space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Certifications</h1>
                <p className="text-muted-foreground">Professional certifications and achievements.</p>
            </div>
            <CertList certifications={CERTIFICATIONS} />
        </div>
    )
}
