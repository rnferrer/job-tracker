import { ColumnDef } from "@tanstack/react-table"
import  EditApplicationMenu  from "@/components/applied/EditApplicationMenu"
import { ArrowUpDown, ExternalLinkIcon } from "lucide-react"
import { ApplicationFormValues } from "./FormSchema"
import SavedJobPopover from "@/components/saved/SavedJobPopover"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

//Need to include Saved here also

type GeneralColumn = {
  job_title: string,
  company_name: string,
  url: string,
  location: string,
}

export type SavedColumns = GeneralColumn & {
  save_date: string
}

export type AppliedColumns = GeneralColumn & {
  status: "Applied" | "Interview" | "Offer" | "Rejected",
  last_edit: Date
}

export const appliedColumns: ColumnDef<ApplicationFormValues>[] = [
  {
    accessorKey: "last_edited",
    header: ({column}) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Edited
          <ArrowUpDown className="ml-2 h-4 w-4"/>
        </Button>
      )
    },
    size: 275,
    enableColumnFilter: false 
  },
  {
    accessorKey: "jobTitle",
    header: "Role"
  },
  {
    accessorKey: "companyName",
    header: "Company"
  },
  {
    accessorKey: "url",
    header: "Job Posting",
    cell: ({row}) => {
      //Will need to use the row parameter to access the link
      return (
        <a href="https://www.linkedin.com/feed/" target="_blank">
          <ExternalLinkIcon size={16}/>
        </a>
      )
    },
    enableGlobalFilter: false
  },
  {
    accessorKey: "location",
    header: "Location"
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({row}) => {
      return(
        <Badge>
          {row.original.status}
        </Badge>
      )
    }
  },
  {
    id: "actions",
    cell: ({row}) => {
      const job = row.original
      return (
        <EditApplicationMenu job={job}/>
      )
    },
    enableGlobalFilter: false
  }
]

export const savedColumns: ColumnDef<SavedColumns>[] = [
  {
    accessorKey: "save_date",
    header: "Date Saved",
    size: 200
  },
  {
    accessorKey: "job_title",
    header: "Role"
  },
  {
    accessorKey: "company_name",
    header: "Company"
  },
  {
    accessorKey: "url",
    header: "Job Posting"
  },
  {
    accessorKey: "location",
    header: "Location"
  },
  {
    id:"actions",
    cell: ({row}) => {
      return (
        <SavedJobPopover/>
      )
    }
  }
]
