"use client"
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/nextjs"
import { useState } from "react";

type DashboardRoutes = 'Applied' | 'Saved' | 'Interviews'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState<DashboardRoutes>('Applied')

  const handleClick = (page:DashboardRoutes) => {
    setPage(page)
    console.log(page)
  }

  return (
    <div className="flex flex-col w-screen p-20">
      <h1 className="font-bold text-5xl">Job Application Tracker</h1>
        {/* Mount the UserButton component */}
        <UserButton />
      <nav className="mt-[3rem]">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={()=>handleClick('Applied')}>
                Applied
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={()=>handleClick('Saved')}>
                Saved Jobs
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={()=>handleClick('Interviews')}>
                Interviews
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
 
      {children}
    </div>
  )
}