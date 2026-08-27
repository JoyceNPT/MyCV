import { useState, useEffect } from "react"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { CertificationsPage } from "@/src/pages/CertificationsPage"
import { ProfilePage } from "@/src/pages/ProfilePage"
import { ProjectPage } from "@/src/pages/ProjectPage"

function getPage(pathname: string) {
  if (pathname === "/project") {
    return <ProjectPage />
  }

  if (pathname === "/certifications") {
    return <CertificationsPage />
  }

  return <ProfilePage />
}

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const handleLocationChange = () => setPathname(window.location.pathname)
    window.addEventListener("popstate", handleLocationChange)
    window.addEventListener("pushstate", handleLocationChange)
    return () => {
      window.removeEventListener("popstate", handleLocationChange)
      window.removeEventListener("pushstate", handleLocationChange)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{getPage(pathname)}</main>
      <SiteFooter />
    </div>
  )
}
