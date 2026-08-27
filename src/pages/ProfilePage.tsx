import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PROFILE } from "@/lib/data"
import { useTheme } from "@/components/theme-provider"
import { motion, type Variants } from "framer-motion"
import { ParticlesBackground } from "@/components/particles-background"
import {
    Award,
    BriefcaseBusiness,
    CalendarDays,
    Code2,
    ExternalLink,
    Github,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Terminal,
    ChevronRight,
    Server,
    Cloud,
    BrainCircuit,
    Coffee,
    GraduationCap,
    Database,
    LayoutTemplate,
    Wrench,
    GitMerge,
    Users,
    Languages,
    Heart
} from "lucide-react"

const skillModules = [
    { key: "primary", label: "Primary (.NET)", icon: Server, command: "dotnet run" },
    { key: "cloudDevops", label: "Cloud & DevOps", icon: Cloud, command: "aws deploy" },
    { key: "ai", label: "AI Integration", icon: BrainCircuit, command: "gemini generate" },
    { key: "secondary", label: "Secondary", icon: Coffee, command: "mvn spring-boot:run" },
    { key: "engineering", label: "Engineering", icon: Terminal, command: "git push" },
    { key: "database", label: "Database", icon: Database, command: "sqlcmd -Q" },
    { key: "frontend", label: "Frontend", icon: LayoutTemplate, command: "npm run dev" },
    { key: "tools", label: "Tools", icon: Wrench, command: "code ." },
    { key: "process", label: "Process", icon: GitMerge, command: "git flow" },
    { key: "soft", label: "Soft Skills", icon: Users, command: "sync()" },
    { key: "languages", label: "Languages", icon: Languages, command: "i18n.init()" },
] as const

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
}

const itemFadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

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
        <motion.section variants={itemFadeUp} className={`dev-panel backdrop-blur-sm bg-background/80 hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 ease-out ${className}`}>
            <div className="dev-panel-title">
                <span className="flex items-center gap-2">
                    <Terminal className="size-4 text-primary" />
                    {title}
                </span>
                <code>{command}</code>
            </div>
            {children}
        </motion.section>
    )
}

export function ProfilePage() {
    const experience = PROFILE.experience[0]
    const { theme } = useTheme()

    const particlesColor = theme === "dark" ? "#ffffff" : "#000000"
    const particlesLineColor = theme === "dark" ? "#ffffff" : "#000000"

    return (
        <div className="dev-profile min-h-screen bg-background relative overflow-hidden text-foreground">
            <ParticlesBackground />
            
            <div className="container relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                
                <motion.section 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="dev-hero overflow-hidden backdrop-blur-md bg-background/60 border border-border shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-500 ease-out hover:-translate-y-1"
                >
                    <div className="dev-window-bar">
                        <span className="bg-red-400" />
                        <span className="bg-amber-400" />
                        <span className="bg-emerald-400" />
                        <code>~/portfolio/profile.tsx</code>
                    </div>

                    <div className="grid gap-8 p-6 md:grid-cols-[auto_minmax(0,1fr)] md:p-10 items-center">
                        <motion.div variants={itemFadeUp} className="relative size-32 overflow-hidden rounded-2xl border-2 border-primary/20 bg-secondary md:size-48 shadow-2xl">
                            <img src={PROFILE.avatar} alt={PROFILE.name} className="h-full w-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        </motion.div>

                        <div className="min-w-0 space-y-6">
                            <motion.div variants={itemFadeUp} className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="default" className="font-mono bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">.NET_Expert</Badge>
                                    <Badge variant="secondary" className="font-mono bg-secondary/80">AWS_Cloud</Badge>
                                    <Badge variant="secondary" className="font-mono bg-secondary/80">AI_Assisted</Badge>
                                    <Badge variant="outline" className="font-mono border-border/50">Solution_Architecture</Badge>
                                </div>
                                <div>
                                    <p className="font-mono text-sm text-primary flex items-center gap-2">
                                        <Code2 className="size-4" /> 
                                        const architect = new Developer();
                                    </p>
                                    <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                                        {PROFILE.name}
                                    </h1>
                                    <p className="mt-3 text-xl font-medium text-muted-foreground sm:text-2xl">
                                        {PROFILE.title}
                                    </p>
                                </div>
                                <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                                    {PROFILE.about}
                                </p>
                            </motion.div>

                            <motion.div variants={itemFadeUp} className="grid gap-3 text-sm sm:grid-cols-2 xl:grid-cols-4 border-t border-border/40 pt-5">
                                <span className="dev-meta-item"><MapPin className="size-4 text-primary/70" />{PROFILE.location}</span>
                                <span className="dev-meta-item"><Phone className="size-4 text-primary/70" />{PROFILE.social.phone}</span>
                            </motion.div>

                            <motion.div variants={itemFadeUp} className="flex flex-wrap gap-4 pt-2">
                                <Button size="sm" className="group shadow-sm hover:shadow-md transition-all active:scale-95 hover:scale-105" asChild>
                                    <a href={PROFILE.social.github} target="_blank" rel="noreferrer">
                                        <Github className="size-4 mr-2 group-hover:scale-110 transition-transform" />
                                        GitHub
                                    </a>
                                </Button>
                                <Button size="sm" variant="outline" className="group border-border hover:bg-secondary hover:text-foreground shadow-sm hover:shadow-md transition-all active:scale-95 hover:scale-105" asChild>
                                    <a href={PROFILE.social.linkedin} target="_blank" rel="noreferrer">
                                        <Linkedin className="size-4 mr-2 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                                        LinkedIn
                                    </a>
                                </Button>
                                {/* @ts-ignore */}
                                {PROFILE.social.facebook && (
                                    <Button size="sm" variant="outline" className="group border-border hover:bg-secondary hover:text-foreground shadow-sm hover:shadow-md transition-all active:scale-95 hover:scale-105" asChild>
                                        {/* @ts-ignore */}
                                        <a href={PROFILE.social.facebook} target="_blank" rel="noreferrer">
                                            <svg className="size-4 mr-2 text-[#1877F2] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                            Facebook
                                        </a>
                                    </Button>
                                )}
                                <Button size="sm" variant="outline" className="group border-border hover:bg-secondary hover:text-foreground shadow-sm hover:shadow-md transition-all active:scale-95 hover:scale-105" asChild>
                                    <a href={PROFILE.social.email}>
                                        <Mail className="size-4 mr-2 group-hover:scale-110 transition-transform" />
                                        Email
                                    </a>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                <motion.div 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={staggerContainer}
                    className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_380px]"
                >
                    <div className="space-y-8">
                        <DevPanel title="Recent Assignment" command="cd ./gbook && git log -1">
                            <div className="space-y-6 p-6 sm:p-8">
                                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between border-b border-border/40 pb-6">
                                    <div>
                                        <div className="flex items-center gap-2 text-sm font-mono text-primary mb-2">
                                            <BriefcaseBusiness className="size-4" />
                                            {experience.company} <span className="text-muted-foreground px-2">•</span> Japanese Client
                                        </div>
                                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">{experience.project}</h2>
                                        <p className="mt-2 text-lg text-foreground/90 font-medium">{experience.role}</p>
                                    </div>
                                    <Badge variant="secondary" className="w-fit font-mono bg-secondary/80 text-sm py-1 border border-border/50">{experience.period}</Badge>
                                </div>

                                <p className="text-base leading-8 text-muted-foreground">{experience.summary}</p>

                                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
                                    <div className="rounded-xl border border-border/50 bg-background/40 p-5 backdrop-blur-sm transition-colors hover:bg-background/60">
                                        <h3 className="font-mono text-sm font-semibold text-primary flex items-center gap-2 mb-4">
                                            <ChevronRight className="size-4" /> responsibilities
                                        </h3>
                                        <ul className="space-y-4 text-sm leading-6 text-muted-foreground">
                                            {experience.responsibilities.map((item) => (
                                                <li key={item} className="flex gap-3 items-start">
                                                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary/70" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="rounded-xl border border-border/50 bg-background/40 p-5 backdrop-blur-sm transition-colors hover:bg-background/60">
                                        <h3 className="font-mono text-sm font-semibold text-primary flex items-center gap-2 mb-4">
                                            <ChevronRight className="size-4" /> stack.config
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {experience.technologies.map((tech) => {
                                                const isNet = tech.includes(".NET") || tech.includes("ASP")
                                                return (
                                                    <Badge 
                                                        key={tech} 
                                                        variant={isNet ? "default" : "outline"}
                                                        className={isNet ? "bg-primary/20 text-primary border-primary/30" : "bg-background/50 border-border/50 text-foreground/80"}
                                                    >
                                                        {tech}
                                                    </Badge>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DevPanel>

                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
                            <DevPanel title="Education" command="cat education.md">
                                <div className="space-y-5 p-6">
                                    {PROFILE.education.map((edu) => (
                                        <div key={edu.id} className="dev-row group bg-background/40 hover:bg-background/60 hover:shadow-md hover:scale-[1.01] hover:border-primary/30 transition-all duration-300 border border-transparent p-4 rounded-xl">
                                            <GraduationCap className="mt-1 size-6 text-primary/70 group-hover:text-primary transition-colors" />
                                            <div className="min-w-0 flex-1">
                                                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                                    <h2 className="text-lg font-semibold text-foreground/90">{edu.school}</h2>
                                                    <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
                                                        <CalendarDays className="size-3.5" />
                                                        {edu.year}
                                                    </span>
                                                </div>
                                                <p className="mt-1 text-sm font-medium text-foreground/80">{edu.degree}</p>
                                                {edu.description && <p className="mt-2 text-sm text-muted-foreground">{edu.description}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </DevPanel>

                            <DevPanel title="Honors & Awards" command="git log --achievements">
                                <div className="space-y-5 p-6">
                                    {PROFILE.awards.map((award) => (
                                        <div key={award.id} className="dev-row group bg-background/40 hover:bg-background/60 hover:shadow-md hover:scale-[1.01] hover:border-primary/30 transition-all duration-300 border border-transparent p-4 rounded-xl">
                                            <Award className="mt-1 size-6 text-primary/70 group-hover:text-primary transition-colors" />
                                            <div className="min-w-0 flex-1">
                                                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                                    <h2 className="text-lg font-semibold text-foreground/90">{award.title}</h2>
                                                    <span className="font-mono text-xs text-muted-foreground">{award.date}</span>
                                                </div>
                                                <p className="mt-1 text-sm text-muted-foreground">{award.issuer} - {award.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </DevPanel>

                            <DevPanel title="Community Activity" command="npm run volunteer">
                                <div className="space-y-5 p-6">
                                    {PROFILE.activities.map((activity) => (
                                        <div key={activity.id} className="dev-row group bg-background/40 hover:bg-background/60 hover:shadow-md hover:scale-[1.01] hover:border-primary/30 transition-all duration-300 border border-transparent p-4 rounded-xl">
                                            <Heart className="mt-1 size-6 text-primary/70 group-hover:text-primary transition-colors" />
                                            <div className="min-w-0 flex-1">
                                                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                                    <h2 className="text-lg font-semibold text-foreground/90">{activity.role}</h2>
                                                    <span className="font-mono text-xs text-muted-foreground">{activity.period}</span>
                                                </div>
                                                <p className="mt-1 text-sm font-medium text-foreground/80">{activity.organization}</p>
                                                <p className="mt-2 text-sm leading-6 text-muted-foreground">{activity.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </DevPanel>
                        </div>
                    </div>

                    <aside className="space-y-8">
                        <DevPanel title="Technical Arsenal" command="pnpm skills:list" className="xl:sticky xl:top-24">
                            <div className="space-y-5 p-6">
                                {skillModules.map((module) => {
                                    // @ts-ignore
                                    const skills = PROFILE.skills[module.key as keyof typeof PROFILE.skills]
                                    if (!skills || skills.length === 0) return null;
                                    
                                    const isPrimary = module.key === "primary"
                                    
                                    return (
                                        <motion.div 
                                            key={module.key} 
                                            variants={itemFadeUp}
                                            className={`rounded-xl border p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${isPrimary ? 'border-primary/40 bg-primary/5 shadow-[0_0_15px_-3px_rgba(var(--primary),0.1)] hover:border-primary/60' : 'border-border/50 bg-background/40 hover:bg-background/60 hover:border-primary/30'}`}
                                        >
                                            <div className="flex items-center justify-between gap-3 mb-5">
                                                <h2 className={`text-sm font-bold flex items-center gap-2 ${isPrimary ? 'text-primary' : 'text-foreground/80'}`}>
                                                    <module.icon className="size-4" />
                                                    {module.label}
                                                </h2>
                                                <code className="text-[10px] text-muted-foreground/70 bg-secondary/50 px-2 py-0.5 rounded font-mono">{module.command}</code>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.map((skill: string) => (
                                                    <Badge 
                                                        key={skill} 
                                                        variant={isPrimary ? "default" : "secondary"} 
                                                        className={`text-[11px] font-medium px-2.5 py-0.5 ${isPrimary ? 'bg-primary/90 text-primary-foreground hover:bg-primary shadow-sm' : 'bg-secondary/60 hover:bg-secondary/80 text-foreground/80 border border-border/30'}`}
                                                    >
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </DevPanel>
                    </aside>
                </motion.div>
            </div>
        </div>
    )
}
