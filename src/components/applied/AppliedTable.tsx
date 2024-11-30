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
import { Button } from "../ui/button"
import { ExternalLinkIcon, MoreHorizontal } from "lucide-react"
import EditApplicationMenu from "./EditApplicationMenu"

type AppliedJob = {
  last_edited: string,
  status: string, //can convert this to an int for easier storage
  role: string,
  company:string,
  job_link: string,
  location: string
};

const AppliedTable = ({
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
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DummyJobsList.map((job:AppliedJob, i:number)=>(
            <TableRow className="cursor-default" key={i}>
              <TableCell>{job.last_edited}</TableCell>
              <TableCell>
                <Badge>{job.status}</Badge>
              </TableCell>
              <TableCell>{job.role}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell className="ml-5 w-auto">
                <a href="https://www.linkedin.com/feed/" target="_blank">
                  <ExternalLinkIcon size={16}/>
                </a>
              </TableCell>
              <TableCell>{job.location}</TableCell>
              <TableCell>
                <EditApplicationMenu/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedTable