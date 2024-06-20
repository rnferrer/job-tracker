"use client"

import HomeAppliedContent from "@/components/HomeAppliedContent"
import HomeInterviewContent from "@/components/HomeInterviewContent"
import HomeSavedContent from "@/components/HomeSavedContent"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const HomePage = () => {
  return(
    <div className="max-w-[1200px] min-w-[600px] grid grid-cols-2 gap-4 pt-4">
      <Card className="h-[300px]">
        <CardHeader>
          <CardTitle>Recently Applied Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          <HomeAppliedContent/>
        </CardContent>
      </Card>
      <Card className="">
        <CardHeader>
          <CardTitle>Saved Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          <HomeSavedContent/>
        </CardContent>
      </Card>
      <Card className="h-[300px]">
        <CardHeader>
          <CardTitle>Upcoming Interviews</CardTitle>
        </CardHeader>
        <CardContent>
          <HomeInterviewContent/>
        </CardContent>
      </Card>
    </div>
  )
}

export default HomePage