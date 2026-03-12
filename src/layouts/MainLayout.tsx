import { Outlet } from "react-router-dom"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollManager } from "@/components/scroll-manager"
import { Toaster } from "@/components/ui/toaster"

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollManager />
      <Navigation />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  )
}
