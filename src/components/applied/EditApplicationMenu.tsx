"use client"

import { Button } from "../ui/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import ApplicationForm from "./ApplicationForm"
import InterviewForm from "../interviews/InterviewForm"

import { 
  Dialog, 
  DialogContent,
  DialogDescription, 
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog"

const EditApplicationMenu = () => {

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
        
          <Dialog>
            <DialogTrigger asChild>
              <DropdownMenuItem className="cursor-pointer"onSelect={(e)=>e.preventDefault()}>
                Add Interview
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent className="mt-[-9.5rem]">
              <DialogTitle>
                Add an interview for this job
              </DialogTitle>
              <DialogDescription>
                Input information on the interview such as the start and end time, interview title, and any additional notes you may need. There is an overview of all your scheduled interviews in the "Interviews" tab.
              </DialogDescription>
              <InterviewForm/>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <DropdownMenuItem className="cursor-pointer"onSelect={(e)=>e.preventDefault()}>
                Edit
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
              <ApplicationForm isSavedPage={false}/>
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