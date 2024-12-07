"use client"
import { Button } from "@/components/ui/button"
import { 
  Dialog, 
  DialogContent,
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import  ApplicationForm  from "@/components/applied/ApplicationForm"
import { DataTable } from "@/components/DataTable"
import SavedJobPopover from "@/components/saved/SavedJobPopover"
import { ApplicationFormValues, SavedFormValues } from "@/lib/FormSchema"
import type { NextPage } from 'next'
import { savedColumns } from "@/lib/columnTypes"

const DummyJobsList:SavedFormValues[] = [
  {
    save_date: "May 23, 2024 5:00PM",
    job_title: "Frontend Software Engineer",
    company_name:"Amazon",
    url: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    save_date: "May 24, 2024 5:00PM",
    job_title: "Backend Software Engineer",
    company_name:"Google",
    url: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    save_date: "May 22, 2024 5:00PM",
    job_title: "Software Engineer",
    company_name:"LinkedIn",
    url: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    save_date: "May 21, 2024 5:00PM",
    job_title: "Full-stack Software Engineer",
    company_name:"Netflix",
    url: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    save_date: "May 19, 2024 5:00PM",
    job_title: "Software Engineer",
    company_name:"Figma",
    url: "Wellfound",
    location: "San Francisco, US"
  },
  {
    save_date: "May 8, 2024 5:00PM",
    job_title: "Software Engineer",
    company_name:"Crunchyroll",
    url: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    save_date: "May 7, 2024 5:00PM",
    job_title: "Software Engineer",
    company_name:"YouTube",
    url: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    save_date: "May 3, 2024 5:00PM",
    job_title: "Software Engineer",
    company_name:"Github",
    url: "LinkedIn",
    location: "San Francisco, US"
  }
]

/*TODO: 
  - have the Saved page add an applied job after saying you applied after the toast
    - could either 
      - upload to the DB directly to update the user's applied jobs
      - have the saved page and applied page share a state of the user's application data and when you click yes after applying to a job it changes the applied page through state
    - both would require, from the user POV
      - after clicking yes on the toast, the toast needs to disappear 
      - also the job you just applied to, the job itself has to disappear and a toast confirms the addition to the applied data/page
      - then when you click on the applied tab again, the newly applied job will be added to the top(or bottom) of the job list
      
*/
const SavedJobsPage: NextPage = () => {
  return(
    <div>
      <DataTable data={DummyJobsList} columns={savedColumns}/>
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
          <ApplicationForm/>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default SavedJobsPage