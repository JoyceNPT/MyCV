import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PROFILE } from "@/lib/data"
import type React from "react"
import {
    Award,
    BriefcaseBusiness,
    CalendarDays,
    Code2,
    ExternalLink,
    Github,
    GraduationCap,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Terminal,
} from "lucide-react"

const skillModules = [
    { key: "backend", label: "Backend", command: "dotnet build" },
    { key: "testing", label: "Quality", command: "mstest / junit" },
    { key: "database", label: "Data", command: "db migrate" },
    { key: "cloudDevops", label: "Cloud", command: "docker compose" },
    { key: "frontend", label: "Client", command: "npm run dev" },
    { key: "tools", label: "Tooling", command: "svn status" },
    { key: "process", label: "Process", command: "daily report" },
    { key: "soft", label: "Collaboration", command: "sync team" },
    { key: "languages", label: "Language", command: "read docs" },
] as const

function DevPanel({
    title,
    command,
    children,
    className = "",
}: {
    title: string
    command: string
    children: React.ReactNode
    className?: string
}) {
    return (
        <section className={`dev-panel ${className}`}>
            <div className="dev-panel-title">
                <span className="flex items-center gap-2">
                    <Terminal className="size-4 text-primary" />
                    {title}
                </span>
                <code>{command}</code>
            </div>
            {children}
        </section>
    )
}

export function ProfilePage() {
    const experience = PROFILE.experience[0]

    return (
        <div className="dev-profile min-h-screen bg-background">
            <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <section className="dev-hero">
                    <div className="dev-window-bar">
                        <span className="bg-red-400" />
                        <span className="bg-amber-400" />
                        <span className="bg-emerald-400" />
                        <code>~/portfolio/profile.tsx</code>
                    </div>

                    <div className="grid gap-6 p-5 md:grid-cols-[auto_minmax(0,1fr)] md:p-8">
                        <div className="relative size-32 overflow-hidden rounded-lg border border-border bg-secondary md:size-40">
                            <img src={PROFILE.avatar} alt={PROFILE.name} className="h-full w-full object-cover" />
                        </div>

                        <div className="min-w-0 space-y-5">
                            <div className="space-y-3">
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="font-mono">available_for_backend_work</Badge>
                                    <Badge variant="outline" className="font-mono">fpt_software</Badge>
                                </div>
                                <div>
                                    <p className="font-mono text-sm text-primary">const engineer =</p>
                                    <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-5xl">{PROFILE.name}</h1>
                                    <p className="mt-2 text-lg text-muted-foreground sm:text-xl">{PROFILE.title}</p>
                                </div>
                                <p className="max-w-4xl text-sm leading-7 text-muted-foreground sm:text-base">
                                    {PROFILE.about}
                                </p>
                            </div>

                            <div className="grid gap-3 text-sm sm:grid-cols-2 xl:grid-cols-4">
                                <span className="dev-meta-item"><MapPin className="size-4" />{PROFILE.location}</span>
                                <a className="dev-meta-item" href={PROFILE.social.email}><Mail className="size-4" />Email</a>
                                <span className="dev-meta-item"><Phone className="size-4" />{PROFILE.social.phone}</span>
                                <span className="dev-meta-item"><Code2 className="size-4" />.NET AI AWS JAVA</span>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <Button size="sm" asChild>
                                    <a href={PROFILE.social.github} target="_blank" rel="noreferrer">
                                        <Github className="size-4" />
                                        GitHub
                                    </a>
                                </Button>
                                <Button size="sm" variant="outline" asChild>
                                    <a href={PROFILE.social.linkedin} target="_blank" rel="noreferrer">
                                        <Linkedin className="size-4" />
                                        LinkedIn
                                    </a>
                                </Button>
                                <Button size="sm" variant="outline" asChild>
                                    <a href="/project">
                                        <ExternalLink className="size-4" />
                                        View Projects
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
                    <div className="space-y-6">
                        <DevPanel title="Current Assignment" command="issue run GBOOK">
                            <div className="space-y-5 p-5 sm:p-6">
                                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 text-sm font-mono text-primary">
                                            <BriefcaseBusiness className="size-4" />
                                            {experience.company}
                                        </div>
                                        <h2 className="mt-2 text-2xl font-bold">{experience.project}</h2>
                                        <p className="mt-1 text-muted-foreground">{experience.role}</p>
                                    </div>
                                    <Badge variant="secondary" className="w-fit font-mono">{experience.period}</Badge>
                                </div>

                                <p className="text-sm leading-7 text-muted-foreground">{experience.summary}</p>

                                <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
                                    <div className="rounded-lg border border-border/80 bg-background/50 p-4">
                                        <h3 className="font-mono text-sm font-semibold text-foreground">responsibilities[]</h3>
                                        <ul className="mt-3 space-y-3 text-sm leading-6 text-muted-foreground">
                                            {experience.responsibilities.map((item) => (
                                                <li key={item} className="flex gap-2">
                                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="rounded-lg border border-border/80 bg-background/50 p-4">
                                        <h3 className="font-mono text-sm font-semibold text-foreground">stack.lock</h3>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {experience.technologies.map((tech) => (
                                                <Badge key={tech} variant="outline">{tech}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DevPanel>

                        <DevPanel title="Education" command="cat education.md">
                            <div className="space-y-4 p-5 sm:p-6">
                                {PROFILE.education.map((edu) => (
                                    <div key={edu.id} className="dev-row">
                                        <GraduationCap className="mt-1 size-5 text-primary" />
                                        <div className="min-w-0">
                                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                                <h2 className="text-lg font-semibold">{edu.school}</h2>
                                                <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
                                                    <CalendarDays className="size-3.5" />
                                                    {edu.year}
                                                </span>
                                            </div>
                                            <p className="mt-1 text-sm font-medium">{edu.degree}</p>
                                            {edu.description ? <p className="mt-1 text-sm text-muted-foreground">{edu.description}</p> : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </DevPanel>

                        <DevPanel title="Honors & Awards" command="git log --achievements">
                            <div className="space-y-4 p-5 sm:p-6">
                                {PROFILE.awards.map((award) => (
                                    <div key={award.id} className="dev-row">
                                        <Award className="mt-1 size-5 text-primary" />
                                        <div className="min-w-0">
                                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                                <h2 className="text-lg font-semibold">{award.title}</h2>
                                                <span className="font-mono text-xs text-muted-foreground">{award.date}</span>
                                            </div>
                                            <p className="mt-1 text-sm text-muted-foreground">{award.issuer} - {award.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </DevPanel>

                        <DevPanel title="Community Activity" command="npm run volunteer">
                            <div className="space-y-4 p-5 sm:p-6">
                                {PROFILE.activities.map((activity) => (
                                    <div key={activity.id} className="dev-row">
                                        <Code2 className="mt-1 size-5 text-primary" />
                                        <div>
                                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                                <h2 className="text-lg font-semibold">{activity.role}</h2>
                                                <span className="font-mono text-xs text-muted-foreground">{activity.period}</span>
                                            </div>
                                            <p className="mt-1 text-sm font-medium">{activity.organization}</p>
                                            <p className="mt-2 text-sm leading-6 text-muted-foreground">{activity.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </DevPanel>
                    </div>

                    <aside className="space-y-6">
                        <DevPanel title="Skill Modules" command="pnpm skills:list" className="xl:sticky xl:top-20">
                            <div className="space-y-4 p-5">
                                {skillModules.map((module) => (
                                    <div key={module.key} className="rounded-lg border border-border/70 bg-background/45 p-3">
                                        <div className="flex items-center justify-between gap-3">
                                            <h2 className="text-sm font-semibold">{module.label}</h2>
                                            <code className="text-xs text-muted-foreground">{module.command}</code>
                                        </div>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {PROFILE.skills[module.key].map((skill) => (
                                                <Badge key={skill} variant="outline" className="text-[11px]">{skill}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </DevPanel>
                    </aside>
                </div>
            </div>
        </div>
    )
}
