import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

interface ContactInfo {
    email: string
    phone?: string
    location: string
}

export function ContactSection({ contact }: { contact: ContactInfo }) {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Get in Touch</h2>

            <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <Link href={contact.email} className="hover:text-primary transition-colors truncate">
                        {contact.email.replace('mailto:', '')}
                    </Link>
                </div>
                {contact.phone && (
                    <div className="flex items-center gap-3 text-sm">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span>{contact.phone}</span>
                    </div>
                )}
                <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{contact.location}</span>
                </div>
            </div>
        </div>
    )
}
