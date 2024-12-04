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
import { ExternalLinkIcon } from "lucide-react"

import EditApplicationMenu from "./EditApplicationMenu"
import { ApplicationFormValues } from "@/lib/FormSchema"

const AppliedTable = ({
  DummyJobsList
}: {
  DummyJobsList: ApplicationFormValues[]
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
          {DummyJobsList.map((job:ApplicationFormValues, i:number)=>(
            <TableRow className="cursor-default" key={i}>
              <TableCell>{job.last_edited}</TableCell>
              <TableCell>
                <Badge>{job.status}</Badge>
              </TableCell>
              <TableCell>{job.job_title}</TableCell>
              <TableCell>{job.company_name}</TableCell>
              <TableCell className="ml-5 w-auto">
                <a href="https://www.linkedin.com/feed/" target="_blank">
                  <ExternalLinkIcon size={16}/>
                </a>
              </TableCell>
              <TableCell>{job.location}</TableCell>
              <TableCell>
                <EditApplicationMenu
                  job={job}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedTable