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
import { useQuery } from "@tanstack/react-query"
import { fetchAppliedJobs } from "@/api/queries/useFetchData"


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
- Queries needed for applied page
  - (query) Get applications
  - (mutation) Create application
  - (mutation) Edit application
  - (mutation) Delete Application
  - (mutation) From saved page, when a job gets applied to create application
*/

const AppliedPage: NextPage = () => {

  const query = useQuery({
    queryKey:['applied', 1],
    queryFn: fetchAppliedJobs
  })

  return(
    <div className="relative">
      {/* <div>
        {JSON.stringify(query.data)}
      </div> */}
      <DataTable data={query.data} columns={appliedColumns}/>
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