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
    })
})

const interviewSchema = z
  .object({
    job_id: z.string()
      .min(2,{
        message: "Job ID is invalid."
      })
      .max(50, {
        message: "Job ID is invalid."
      }),
    title: z.string()
      .min(2,{
        message: "Interview title must be at least 2 characters.",
      }).max(50, {
        message: "Company title must not be longer than 50 characters.",
      }),
    start: z.string().date(),
    // end: z.string().datetime()
  })
//   .refine((data) => data.start > data.end, {
//     message: "End time must be after start time"
// });

const applicationSchema = generalSchema.extend({
  status: z.string()
});

const savedSchema = generalSchema.extend({
  date: z.date()
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;
type SavedFormValues = z.infer<typeof savedSchema>;
type InterviewFormValues = z.infer<typeof interviewSchema>;

const applicationDefaultValues: ApplicationFormValues = {
  job_title:"",
  company_name:"",
  url:"",
  location:"",
  status: "Applied"
}

const savedDefaultValues: SavedFormValues = {
  job_title:"",
  company_name:"",
  url:"",
  location:"",
  date: new Date()
}

export {
  applicationSchema,
  applicationDefaultValues,
  interviewSchema,
  savedSchema,
  savedDefaultValues,
}

export type {
  ApplicationFormValues,
  SavedFormValues,
  InterviewFormValues
}