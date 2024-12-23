import { z } from "zod"

const generalSchema = z.object({
  job_title: z.string()
    .min(2,{
      message: "Position name must be at least 2 characters.",
    }).max(50, {
      message: "Position name must not be longer than 50 characters.",
    }),
  company_name: z.string()  
    .min(2,{
      message: "Company name must be at least 2 characters.",
    }).max(50, {
      message: "Company name must not be longer than 50 characters.",
    }),
  url: z.string()
    .url({ 
      message: "Invalid url" 
    }),
  location: z.string()  
    .min(2,{
      message: "Location must be at least 2 characters.",
    }).max(50, {
      message: "Location must not be longer than 50 characters.",
    }),
})

const interviewSchema = z
  .object({
    job_id: z.string({
      required_error: "Please enter a valid job ID"
    })
      .min(2,{
        message: "Job ID is invalid."
      })
      .max(50, {
        message: "Job ID is invalid."
      }),
    job_title: z.string()
      .min(2,{
        message: "Interview title must be at least 2 characters.",
      }).max(50, {
        message: "Interview title must not be longer than 50 characters.",
      }),
    notes: z.string()
    .max(500, {
      message: "Additional notes must not exceed 500 characters."
    }).optional(),
    date: z.date(),
    start: z.date(),
    end: z.date(),
    allDay: z.boolean().optional()
  })
  .refine((data) => data.end == null || data.start == null || data.end > data.start, {
    message: "End time must be after start time"
});

const applicationSchema = generalSchema.extend({
  status: z.enum(["Applied", "Interview", "NoResponse", "Offer", "Rejected"]),
  last_edited: z.string()
});

const savedSchema = generalSchema.extend({
  save_date: z.string()
})

type ApplicationFormValues = z.infer<typeof applicationSchema>;
type GeneralFormValues = z.infer<typeof generalSchema>;
type SavedFormValues = z.infer<typeof savedSchema>;
type InterviewFormValues = z.infer<typeof interviewSchema>;


//Can maybe remove date field
const interviewDefaultValues: InterviewFormValues = {
  job_id:"",
  job_title: "",
  date: new Date(),
  start: new Date(new Date().setHours(0, 0, 0, 0)),
  end: new Date(new Date().setHours(23, 59, 0, 0)),
  allDay: true
}

const applicationDefaultValues: ApplicationFormValues = {
  last_edited: new Date().toDateString(),
  job_title:"",
  company_name:"",
  url:"",
  location:"",
  status: "Applied"
}

const GeneralDefaultValues: GeneralFormValues = {
  job_title:"",
  company_name:"",
  url:"",
  location:"",
}

export {
  applicationSchema,
  applicationDefaultValues,
  interviewSchema,
  interviewDefaultValues,
  generalSchema,
  GeneralDefaultValues,
}

export type {
  ApplicationFormValues,
  GeneralFormValues,
  InterviewFormValues,
  SavedFormValues
}