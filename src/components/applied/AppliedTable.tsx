"use client"

import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

type AppliedJob = {
  last_edited: string,
  status: string, //can convert this to an int for easier storage
  role: string,
  company:string,
  job_link: string,
  location: string
}

const AppliedTable= ({
  DummyJobsList
}: {
  DummyJobsList: AppliedJob[]
}) => {
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
          {DummyJobsList.map((job:AppliedJob, i:number)=>(
            <TableRow className="cursor-default" key={i}>
              <TableCell>{job.last_edited}</TableCell>
              <TableCell>
                <Badge >{job.status}</Badge>
              </TableCell>
              <TableCell>{job.role}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell className="ml-5">
                <a href="https://www.linkedin.com/feed/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0000EE" viewBox="0 0 16 16">
                    <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                    <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                  </svg>
                </a>
              </TableCell>
              <TableCell>{job.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedTable