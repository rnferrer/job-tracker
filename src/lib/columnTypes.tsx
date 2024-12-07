import { ColumnDef } from "@tanstack/react-table"
import  EditApplicationMenu  from "@/components/applied/EditApplicationMenu"
import { ExternalLinkIcon } from "lucide-react"
import { ApplicationFormValues } from "./FormSchema"
import SavedJobPopover from "@/components/saved/SavedJobPopover"

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
    accessorKey: "job_title",
    header: "Role"
  },
  {
    accessorKey: "company_name",
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
    }
  },
  {
    accessorKey: "location",
    header: "Location"
  },
  {
    accessorKey: "status",
    header: "Status"
  },
  // {
  //   accessorKey: "job_title",
  //   header: "Last Edited"
  // },
  {
    id: "actions",
    cell: ({row}) => {
      const job = row.original
      return (
        <EditApplicationMenu job={job}/>
      )
    }
  }
]

export const savedColumns: ColumnDef<SavedColumns>[] = [
  {
    accessorKey: "save_date",
    header: "Date Saved"
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
