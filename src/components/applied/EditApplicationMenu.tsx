"use client"

import { Button } from "../ui/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { 
  Dialog, 
  DialogContent,
  DialogDescription, 
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog"
import { useState } from "react"

import { ApplicationFormValues } from "@/lib/FormSchema"
import { filterProps } from  "@/lib/utils"
import ApplicationForm from "./ApplicationForm"
import InterviewForm from "../interviews/InterviewForm"

interface EditAppMenuProps {
  job: Omit<ApplicationFormValues, "last_edited">
}

const EditApplicationMenu = (props:EditAppMenuProps) => {
  const [isInterviewOpen, setIsInterviewOpen] = useState<boolean>(false)

  const job = filterProps(props.job) as Omit<ApplicationFormValues, "last_edited">;
  console.log(job)

  return(
    <>

    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        
          <Dialog open={isInterviewOpen} onOpenChange={setIsInterviewOpen}>
            <DialogTrigger asChild>
              <DropdownMenuItem className="cursor-pointer"onSelect={(e)=>e.preventDefault()}>
                Add Interview
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent className="mt-[-6rem]">
              <DialogTitle>
                Add an interview for this job
              </DialogTitle>
              <DialogDescription>
                Input information about the interview such as the start/end time, interview title, and any additional notes you may need. There is an overview of all your scheduled interviews in the "Interviews" tab.
              </DialogDescription>
              <InterviewForm
                date={new Date()}
                setDialog={setIsInterviewOpen}
              />
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <DropdownMenuItem className="cursor-pointer"onSelect={(e)=>e.preventDefault()}>
                Edit
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
              <ApplicationForm
                job_title={job.job_title}
                company_name={job.company_name}
                url={job.url}
                location={job.location}
                status={job.status}
              />
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <DropdownMenuItem className="cursor-pointer"onSelect={(e)=>e.preventDefault()}>
                Delete
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
              Are you sure you want to delete this application?
            </DialogContent>
          </Dialog>

      </DropdownMenuContent>
    </DropdownMenu>
    </>
  )
}


export default EditApplicationMenu