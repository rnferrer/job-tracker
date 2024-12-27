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
  status: "APPLIED" | "INTERVIEW" | "OFFER" | "REJECTED",
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
    cell: ({row}) => {
      //Source: https://stackoverflow.com/questions/4829569/parsing-iso-8601-date-in-javascript
      let edit_time = row.original.last_edited
      let months:any = {Jan:"January", Feb:"February", Mar:"March", Apr:"April", May:"May", Jun:"June", Jul:"July", Aug:"August", Sep:"September", Oct:"October", Nov:"November", Dec:"December"}
      let formatted = String(new Date(edit_time)).replace(
      /\w{3} (\w{3}) (\d{2}) (\d{4}) (\d{2}):(\d{2}):[^(]+\(([A-Z]{3})\)/,
        function($0,$1,$2,$3,$4,$5,$6){
          return months[$1]+" "+$2+", "+$3+" - "+$4%12+":"+$5+(+$4>12?"PM":"AM")+" "+$6 
      }).slice(4, 33)

      return(
        <p>{formatted}</p>
      )
    }
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
      let status
      switch(row.original.status){
        case "APPLIED":
          status = "Applied";
          break;
        case "INTERVIEW":
          status = "Interview";
          break;
        case "NORESPONSE":
          status = "No Response";
          break;
        case "OFFER":
          status = "Offer";
          break;
        case "REJECTED":
          status = "Rejected"
      }
      return(
        <Badge>
          {status}
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
