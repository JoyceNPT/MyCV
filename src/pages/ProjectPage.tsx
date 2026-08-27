import { ProjectGrid } from "@/components/project/project-grid"
import { PROJECT_GROUPS, PROJECTS } from "@/lib/data"
import { GitBranch, Rocket, Terminal } from "lucide-react"
import { ParticlesBackground } from "@/components/particles-background"
import { motion, type Variants } from "framer-motion"

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

export function ProjectPage() {
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
                        <code>~/portfolio/projects.pipeline</code>
                    </div>
                    <div className="grid gap-6 p-5 md:grid-cols-[minmax(0,1fr)_320px] md:p-8">
                        <motion.div variants={itemFadeUp} className="space-y-4">
                            <p className="flex items-center gap-2 font-mono text-sm font-bold text-primary">
                                <Terminal className="size-4" />
                                npm run showcase
                            </p>
                            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Projects</h1>
                            <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                                Real delivery work, AI-driven development, and personal systems are grouped like a clean backlog so each project has its own context, stack, and responsibility trace.
                            </p>
                        </motion.div>
                        <motion.div variants={itemFadeUp} className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                            <div className="dev-card bg-background/40 hover:bg-background/60 transition-colors">
                                <Rocket className="size-5 text-primary" />
                                <p className="mt-3 font-mono text-2xl font-bold">{PROJECTS.length}</p>
                                <p className="text-sm font-medium text-muted-foreground">tracked projects</p>
                            </div>
                            <div className="dev-card bg-background/40 hover:bg-background/60 transition-colors">
                                <GitBranch className="size-5 text-primary" />
                                <p className="mt-3 font-mono text-2xl font-bold">{PROJECT_GROUPS.length}</p>
                                <p className="text-sm font-medium text-muted-foreground">work streams</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                <ProjectGrid projects={PROJECTS} groups={PROJECT_GROUPS} />
            </div>
        </div>
    )
}
