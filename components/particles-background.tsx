import { useTheme } from "@/components/theme-provider"
import Particles, { ParticlesProvider } from "@tsparticles/react"
import { tsParticles } from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim"

export function ParticlesBackground() {
    const { theme } = useTheme()

    const particlesColor = theme === "dark" ? "#ffffff" : "#000000"
    const particlesLineColor = theme === "dark" ? "#ffffff" : "#000000"

    if (theme === "galaxy") {
        return <div className="galaxy-bg" />
    }

    return (
        <ParticlesProvider init={async (engine) => { await loadSlim(engine); }}>
            <div className="absolute inset-0 z-0 transition-opacity duration-1000 pointer-events-none">
                <Particles
                    id="tsparticles"
                    options={{
                        background: { color: { value: "transparent" } },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onHover: { enable: true, mode: "repulse" },
                                resize: { enable: true },
                            },
                            modes: {
                                repulse: { distance: 60, duration: 0.4 },
                            },
                        },
                        particles: {
                            color: { value: particlesColor },
                            links: {
                                color: particlesLineColor,
                                distance: 180,
                                enable: true,
                                opacity: 0.4,
                                width: 1.5,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: { default: "bounce" },
                                random: false,
                                speed: 1.5,
                                straight: false,
                            },
                            number: { density: { enable: true }, value: 90 },
                            opacity: { value: 0.6 },
                            shape: { type: "circle" },
                            size: { value: { min: 1, max: 4 } },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
        </ParticlesProvider>
    )
}
