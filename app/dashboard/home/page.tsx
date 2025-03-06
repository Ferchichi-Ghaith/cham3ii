"use client"

import { AppSidebar } from "@/components/app-sidebar"
import Admin from "@/components/elements/Home/Admin"
import Booster from "@/components/elements/Home/Booster"
import Client from "@/components/elements/Home/Client"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { useEffect, useState } from "react"

export default function Page() {
  const [user, setUser] = useState<string>("")

  // Unified storage handler
  const handleStorageChange = () => {
    const team = localStorage.getItem("activeTeam") || ""
    setUser(team)
  }

  useEffect(() => {
    // Initial load
    handleStorageChange()

    // Add storage event listener (for changes from other tabs)
    window.addEventListener("storage", handleStorageChange)

    // Add custom event listener for same-tab changes
    window.addEventListener("localStorageChange", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("localStorageChange", handleStorageChange)
    }
  }, [])

  // For debugging
  useEffect(() => {
    console.log("Current user:", user)
  }, [user])

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Dynamic component rendering based on user type */}
          {user === "Client" && <Client />}
          {user === "Booster" && <Booster />}
          {user === "admin" && <Admin />}
          {!user && <div>Please select a user type</div>}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

