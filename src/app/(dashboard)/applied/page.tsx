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
import { ApplicationFormValues } from "@/lib/FormSchema"
import ApplicationForm  from "@/components/applied/ApplicationForm"
import type { NextPage } from 'next'
import { DataTable } from "@/components/DataTable"
import { appliedColumns } from "@/lib/columnTypes"


const DummyJobsList:ApplicationFormValues[] = [
  {
    last_edited: "May 23, 2024 5:00PM",
    status: "Rejected", //can convert this to an int for easier storage
    job_title: "Frontend Software Engineer",
    company_name:"Amazon",
    url: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    last_edited: "May 24, 2024 5:00PM",
    status: "Applied", 
    job_title: "Backend Software Engineer",
    company_name:"Google",
    url: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    last_edited: "May 22, 2024 5:00PM",
    status: "Interview", 
    job_title: "Software Engineer",
    company_name:"LinkedIn",
    url: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    last_edited: "May 21, 2024 5:00PM",
    status: "Offer", 
    job_title: "Full-stack Software Engineer",
    company_name:"Netflix",
    url: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    last_edited: "May 19, 2024 5:00PM",
    status: "Applied", 
    job_title: "Software Engineer",
    company_name:"Figma",
    url: "Wellfound",
    location: "San Francisco, US"
  },
  {
    last_edited: "May 8, 2024 5:00PM",
    status: "Applied", 
    job_title: "Software Engineer",
    company_name:"Crunchyroll",
    url: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    last_edited: "May 7, 2024 5:00PM",
    status: "Applied", 
    job_title: "Software Engineer",
    company_name:"YouTube",
    url: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    last_edited: "May 3, 2024 5:00PM",
    status: "Applied", 
    job_title: "Software Engineer",
    company_name:"Github",
    url: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    last_edited: "May 23, 2024 5:00PM",
    status: "Rejected", //can convert this to an int for easier storage
    job_title: "Frontend Software Engineer",
    company_name:"Amazon",
    url: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    last_edited: "May 24, 2024 5:00PM",
    status: "Applied", 
    job_title: "Backend Software Engineer",
    company_name:"Google",
    url: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    last_edited: "May 22, 2024 5:00PM",
    status: "Interview", 
    job_title: "Software Engineer",
    company_name:"LinkedIn",
    url: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    last_edited: "May 21, 2024 5:00PM",
    status: "Offer", 
    job_title: "Full-stack Software Engineer",
    company_name:"Netflix",
    url: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    last_edited: "May 19, 2024 5:00PM",
    status: "Applied", 
    job_title: "Software Engineer",
    company_name:"Figma",
    url: "Wellfound",
    location: "San Francisco, US"
  },
]

/*
TODO:
- after adding a new application, add it to the job list and db
- Allow for the status of the application to be editable through hovering and selecting
*/

const AppliedPage: NextPage = () => {
  
  return(
    <div className="relative">
      {/* <AppliedTable DummyJobsList={DummyJobsList}/> */}
      {/*
      Need to add column here with the last edited time
      */}
      <DataTable data={DummyJobsList} columns={appliedColumns}/>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-3">Add New Application</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Add a new job you have applied to
            </DialogTitle>
            <DialogDescription>
              Input information about the job such as the title, company_name name, and location of where the position is held. Once added, you can edit the information at a later time.
            </DialogDescription>
          </DialogHeader>
          <ApplicationForm/>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AppliedPage