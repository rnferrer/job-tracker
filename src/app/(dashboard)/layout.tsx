"use client"
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { Tabs } from "@/components/ui/tabs";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from "@clerk/nextjs"
import { TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
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
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="applied">Applied</TabsTrigger>
            <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
            <TabsTrigger value="interviews">Interviews</TabsTrigger>
          </TabsList>
          <TabsContent value="home">home</TabsContent>
          <TabsContent value="applied">hello</TabsContent>
          <TabsContent value="saved">saved</TabsContent>
          <TabsContent value="interviews">intervews</TabsContent>
        </Tabs>
      </nav>
 
      {children}
    </div>
  )
}