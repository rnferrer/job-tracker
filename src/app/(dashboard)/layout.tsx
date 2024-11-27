"use client"
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger  
} from "@/components/ui/tabs";
import {
  UserButton
} from "@clerk/nextjs"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <div className="flex flex-col w-screen px-20 py-14 relative h-[100vh]">
      <h1 className="font-bold text-5xl">Job Application Tracker</h1>
        {/* Mount the UserButton component */}
      <div className="absolute top-10 right-10">
        <UserButton />
      </div>
      <nav className="mt-[2.4rem]">
        <Tabs className="w-[1000px]" defaultValue={pathname.slice(1)}>
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
                Interviews
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