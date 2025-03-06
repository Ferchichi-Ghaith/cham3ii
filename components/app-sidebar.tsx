"use client"

import * as React from "react"
import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  LifeBuoy,
  LucideProps,
  PieChart,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavSecondary } from "./nav-secondary"
import { notifyLocalStorageChange } from "@/lib/localstorge"

// Client data
const Client = {
  sClient: [
    {
      title: "Services",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        { title: "My Boosts", url: "#" },
        { title: "Boost History", url: "#" },
        { title: "Contact Booster", url: "#" },
      ],
    },
  ],
  mClient: [
    { name: "Home", url: "#", icon: Frame },
    { name: "Boostes", url: "#", icon: PieChart },
  ],
}

// Booster data
const Booster = {
  sBooster: [
    {
      title: "Boost",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        { title: "Claim new", url: "#" },
        { title: "History", url: "#" },
      ],
    },
  ],
  mBooster: [
    { name: "Home", url: "#", icon: Frame },
    { name: "Boostes", url: "#", icon: PieChart },
  ],
}

// User session data
const usersession = [
  {
    username: "name",
    accessLevel: [
      { name: "Client", logo: GalleryVerticalEnd, plan: "" },
      { name: "Booster", logo: AudioWaveform, plan: "" },
    ],
  },
]

// User Data
const user = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
}

// Secondary Navigation
const navSecondary = [{ title: "Support", url: "#", icon: LifeBuoy }]

type Team = {
  name: string
  logo: React.FC<LucideProps>
  plan: string
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // Load active team from localStorage or default to first access level
  const [activeTeam, setActiveTeam] = React.useState<Team>(usersession[0].accessLevel[0]);

  // Store the active team in localStorage whenever it changes
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("activeTeam", activeTeam.name)

      // Add this line to notify other components about the change
      notifyLocalStorageChange()
    }
  }, [activeTeam])

  // Get the correct sidebar items based on the active team
  const teamData: Record<string, { m?: any; s?: any }> = {
    Client: { m: Client.mClient, s: Client.sClient },
    Booster: { m: Booster.mBooster, s: Booster.sBooster },
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={usersession[0].accessLevel} activeTeam={activeTeam} setActiveTeam={setActiveTeam} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={teamData[activeTeam.name]?.m} />
        <NavMain items={teamData[activeTeam.name]?.s} />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
