export interface ApplicationFormProps {
  job_title?: string,
  company_name?: string,
  url?: string,
  location?: string,
  status?: "Applied" | "Interview" | "NoResponse" | "Offer" | "Rejected"
};

export interface InterviewFormProps {
  date?: Date | null ,
  job_id?: string | null ,
  setDialog: (value:boolean) => void
};