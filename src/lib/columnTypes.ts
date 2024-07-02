import { ColumnDef } from "@tanstack/react-table"

type GeneralColumn = {
  job_title: string,
  company_name: string,
  url: string,
  location: string,
}

export type SavedColumns = GeneralColumn & {
  date: Date
}

export type AppliedColumns = GeneralColumn & {
  status: "Applied" | "Interview" | "Offer" | "Rejected",
  last_edit: Date
}

export const appliedColumns: ColumnDef<AppliedColumns>[] = [
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
    accessorKey: "status",
    header: "Status"
  },
  {
    accessorKey: "job_title",
    header: "Last Edited"
  },
]

export const savedColumns: ColumnDef<SavedColumns>[] = [
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
    accessorKey: "date",
    header: "Date Saved"
  },
]
