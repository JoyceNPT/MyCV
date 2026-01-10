import { ProfileHeader } from "@/components/profile/profile-header"
import { AboutSection } from "@/components/profile/about-section"
import { ExperienceList } from "@/components/profile/experience-list"
import { EducationList } from "@/components/profile/education-list"
import { SkillList } from "@/components/profile/skill-list"
import { AwardList } from "@/components/profile/award-list"
import { ActivityList } from "@/components/profile/activity-list"
import { ContactSection } from "@/components/profile/contact-section"
import { PROFILE } from "@/lib/data"
import { Separator } from "@/components/ui/separator"

export default function ProfilePage() {
    const contactInfo = {
        email: PROFILE.social.email,
        phone: PROFILE.social.phone,
        location: PROFILE.location,
    }

    return (
        <div className="min-h-screen bg-background pb-12 relative">
            {/* Hero Section Background */}
            <div className="absolute top-0 left-0 w-full h-48 md:h-64 bg-gradient-to-b from-secondary/50 to-background"></div>

            <div className="container mx-auto max-w-6xl relative space-y-8">
                {/* Header Card */}
                <div className="bg-card rounded-xl shadow-lg border border-border p-4 md:p-6">
                    <ProfileHeader {...PROFILE} />
                </div>

                <div className="grid lg:grid-cols-[1fr_300px] gap-8">
                    {/* Main Content */}
                    <div className="space-y-8">
                        <div className="bg-card rounded-xl shadow-sm border border-border p-4 space-y-6">
                            <AboutSection content={PROFILE.about} />
                        </div>

                        <div className="bg-card rounded-xl shadow-sm border border-border p-4">
                            <EducationList education={PROFILE.education} />
                        </div>

                        <div className="bg-card rounded-xl shadow-sm border border-border p-4">
                            <ExperienceList experience={PROFILE.experience} />
                        </div>

                        <div className="bg-card rounded-xl shadow-sm border border-border p-4">
                            <AwardList awards={PROFILE.awards} />
                        </div>

                        <div className="bg-card rounded-xl shadow-sm border border-border p-4">
                            <ActivityList activities={PROFILE.activities} />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-card rounded-xl shadow-sm border border-border p-4 lg:sticky lg:top-20">
                            <SkillList skills={PROFILE.skills} />
                            <Separator className="my-6" />
                            <ContactSection contact={contactInfo} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
