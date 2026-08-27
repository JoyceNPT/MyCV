"use client"

import * as React from "react"
import { Droplets, Moon, Sparkles, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    const themes = [
        { id: "light", label: "Light", icon: Sun },
        { id: "dark", label: "Dark", icon: Moon },
        { id: "galaxy", label: "Galaxy", icon: Sparkles },
        { id: "system", label: "System", icon: Sun },
    ] as const

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="theme-glow">
                    <Sparkles className="h-[1.1rem] w-[1.1rem]" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
                {themes.map((item) => {
                    const Icon = item.icon

                    return (
                        <DropdownMenuItem
                            key={item.id}
                            onClick={() => setTheme(item.id)}
                            className="justify-between"
                        >
                            <span className="flex items-center gap-2">
                                <Icon className="size-4" />
                                {item.label}
                            </span>
                            {theme === item.id ? <span className="text-primary">Active</span> : null}
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
