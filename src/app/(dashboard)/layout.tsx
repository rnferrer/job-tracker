"use client"
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger  
} from "@/components/ui/tabs";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/nextjs"
import Link from "next/link";
import { useState } from "react";

type DashboardRoutes = 'Applied' | 'Saved' | 'Interviews'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState<DashboardRoutes>('Applied')

  const handleClick = (page:DashboardRoutes) => {
    setPage(page)
    console.log(page)
  }

  return (
    <div className="flex flex-col w-screen p-20 relative">
      <h1 className="font-bold text-5xl">Job Application Tracker</h1>
        {/* Mount the UserButton component */}
        <div className="absolute top-5 right-5">
          <UserButton />
        </div>
      <nav className="mt-[2.5rem]">
        <Tabs className="w-[1000px]">
          <TabsList className="grid w-[50%] grid-cols-4">
            <Link href="home" >
              <TabsTrigger value="home" className="w-full">
                Home
              </TabsTrigger>
            </Link>
            <Link href="applied" >
              <TabsTrigger value="applied" className="w-full">
                Applied
              </TabsTrigger>
            </Link>
            <Link href="saved">
              <TabsTrigger value="saved" className="w-full">
                Saved
              </TabsTrigger>
            </Link>
            <Link href="interviews" >
              <TabsTrigger value="interviews" className="w-full">
                Applied
              </TabsTrigger>
            </Link>
          </TabsList>
          <TabsContent value="home"></TabsContent>
          <TabsContent value="applied"></TabsContent>
          <TabsContent value="saved"></TabsContent>
          <TabsContent value="interviews"></TabsContent>
        </Tabs>
      </nav>
 
      {children}
    </div>
  )
}