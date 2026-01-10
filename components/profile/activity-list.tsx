import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Activity {
    id: number
    role: string
    organization: string
    period: string
    description: string
}

export function ActivityList({ activities }: { activities: Activity[] }) {
    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Activity</h2>
            <div className="space-y-4">
                {activities.map((activity) => (
                    <Card key={activity.id}>
                        <CardHeader className="p-4 pb-2">
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-lg">{activity.role}</CardTitle>
                                    <p className="text-muted-foreground">{activity.organization}</p>
                                </div>
                                <span className="text-sm text-muted-foreground">{activity.period}</span>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                            <p className="text-sm">{activity.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
