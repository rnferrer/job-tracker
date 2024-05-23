"use client"

import { Badge } from "@/components/ui/badge"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"

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



const AppliedPage = () => {
  return(
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Last Edited</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[300px]">Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Job Posting</TableHead>
            <TableHead>Location</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DummyJobsList.map((job)=>(
            <TableRow>
              <TableCell>{job.last_edited}</TableCell>
              <TableCell>
                <Badge>{job.status}</Badge>
              </TableCell>
              <TableCell>{job.role}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell>{job.job_link}</TableCell>
              <TableCell>{job.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedPage