
import HomeAppliedContent from "@/components/home/HomeAppliedContent"
import HomeInterviewContent from "@/components/home/HomeInterviewContent"
import HomeSavedContent from "@/components/home/HomeSavedContent"
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
      <Card className="h-[300px]">
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