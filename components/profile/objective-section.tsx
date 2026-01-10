
export function ObjectiveSection({ content }: { content: string }) {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Career Objective</h2>
            <p className="text-muted-foreground leading-relaxed">
                {content}
            </p>
        </div>
    )
}
