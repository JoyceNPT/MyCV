import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

interface ProfileHeaderProps {
    name: string
    title: string
    avatar: string
    location: string
    social: {
        github: string
        linkedin: string
        email: string
    }
}

export function ProfileHeader({ name, title, avatar, location, social }: ProfileHeaderProps) {
    return (
        <div className="flex flex-col items-center text-center space-y-4 py-8">
            <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-75 blur"></div>
                <Avatar className="relative w-32 h-32 md:w-40 md:h-40 border-4 border-background">
                    <AvatarImage src={avatar} alt={name} className="object-cover" />
                    <AvatarFallback className="text-4xl">{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
            </div>

            <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{name}</h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">{title}</p>
                <div className="flex items-center justify-center text-muted-foreground gap-2">
                    <span>{location}</span>
                </div>
            </div>

            <div className="flex gap-4 pt-2">
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                    <Link href={social.github} target="_blank">
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-600 hover:text-white transition-colors" asChild>
                    <Link href={social.linkedin} target="_blank">
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-red-500 hover:text-white transition-colors" asChild>
                    <Link href={social.email}>
                        <Mail className="w-5 h-5" />
                        <span className="sr-only">Email</span>
                    </Link>
                </Button>
            </div>
        </div>
    )
}
