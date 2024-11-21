import { 
  Table, 
  TableBody, 
  TableCell, 
  TableRow 
} from "@/components/ui/table"
import { ScrollArea } from "../ui/scroll-area"

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
//TODO: Create server action to fetch saved jobs
const HomeSavedContent= () => {
  return(
    <div>
      { DummyJobsList.length <= 0 ? (
        <div className="italic text-gray-400">
          No saved jobs
        </div>
      ):(
        <ScrollArea className="h-[200px] w-auto">
          <Table>
            <TableBody>
              {DummyJobsList.map((job, i)=>(
                <TableRow key={i}>
                  <TableCell>{job.role} @ {job.company}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      )}
    </div>
  )
}

export default HomeSavedContent