"use client"
import { 
  Dialog, 
  DialogContent,
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import  ApplicationForm  from "@/components/ApplicationForm"

const SavedJobsPage = () => {
  return(
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>New Saved Job</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Add a job or application you want to save
            </DialogTitle>
            <DialogDescription>
              Input information about the job such as the title, company name, and location of where the position is held. Once added, you can click the apply button to add it to your applied jobs tab.
            </DialogDescription>
          </DialogHeader>
          <ApplicationForm isSavedPage={true}/>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default SavedJobsPage