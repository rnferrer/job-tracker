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
import SavedJobPopover from "@/components/SavedJobPopover"


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
const SavedJobsPage = () => {
  return(
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date Saved</TableHead>
            <TableHead className="w-[300px]">Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Location</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DummyJobsList.map((job, i)=>(
            <TableRow className="cursor-default" key={i}>
              <TableCell>{job.last_edited}</TableCell>
              <TableCell>{job.role}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell>{job.location}</TableCell>
              <TableCell>
                <SavedJobPopover/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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