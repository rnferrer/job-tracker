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
import ApplicationForm  from "@/components/applied/ApplicationForm"
import AppliedTable from "@/components/applied/AppliedTable"
import type { NextPage } from 'next'

const DummyJobsList = [
  {
    last_edited: "May 23, 2024 5:00PM",
    status: "Rejected", //can convert this to an int for easier storage
    role: "Frontend Software Engineer",
    company:"Amazon",
    job_link: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    last_edited: "May 24, 2024 5:00PM",
    status: "Applied", 
    role: "Backend Software Engineer",
    company:"Google",
    job_link: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    last_edited: "May 22, 2024 5:00PM",
    status: "Interview", 
    role: "Software Engineer",
    company:"LinkedIn",
    job_link: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    last_edited: "May 21, 2024 5:00PM",
    status: "Offer", 
    role: "Full-stack Software Engineer",
    company:"Netflix",
    job_link: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    last_edited: "May 19, 2024 5:00PM",
    status: "Applied", 
    role: "Software Engineer",
    company:"Figma",
    job_link: "Wellfound",
    location: "San Francisco, US"
  },
  {
    last_edited: "May 8, 2024 5:00PM",
    status: "Applied", 
    role: "Software Engineer",
    company:"Crunchyroll",
    job_link: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    last_edited: "May 7, 2024 5:00PM",
    status: "Applied", 
    role: "Software Engineer",
    company:"YouTube",
    job_link: "LinkedIn",
    location: "San Francisco, US"
  },
  {
    last_edited: "May 3, 2024 5:00PM",
    status: "Applied", 
    role: "Software Engineer",
    company:"Github",
    job_link: "LinkedIn",
    location: "San Francisco, US"
  }
]

/*
TODO:
- after adding a new application, add it to the job list and db
- Allow for the status of the application to be editable through hovering and selecting
*/

const AppliedPage: NextPage = () => {
  
  return(
    <div className="relative">
      <AppliedTable DummyJobsList={DummyJobsList}/>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add New Application</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Add a new job you have applied to
            </DialogTitle>
            <DialogDescription>
              Input information about the job such as the title, company name, and location of where the position is held. Once added, you can edit the information at a later time.
            </DialogDescription>
          </DialogHeader>
          <ApplicationForm isSavedPage={false}/>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AppliedPage