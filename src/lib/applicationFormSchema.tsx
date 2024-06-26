import { z } from "zod"

const generalSchema = z.object({
  title: z.string()
    .min(2,{
      message: "Position name must be at least 2 characters.",
    }).max(50, {
      message: "Position name must not be longer than 50 characters.",
    }),
  company: z.string()  
    .min(2,{
      message: "Company name must be at least 2 characters.",
    }).max(50, {
      message: "Company name must not be longer than 50 characters.",
    }),
  link: z.string()
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

const applicationSchema = generalSchema.extend({
  status: z.string()
})

const savedSchema = generalSchema.extend({
  date: z.date()
})

type ApplicationFormValues = z.infer<typeof applicationSchema>;
type SavedFormValues = z.infer<typeof savedSchema>;

const applicationDefaultValues: ApplicationFormValues = {
  title:"",
  company:"",
  link:"",
  location:"",
  status: "Applied"
}

const savedDefaultValues: SavedFormValues = {
  title:"",
  company:"",
  link:"",
  location:"",
  date: new Date()
}

export {
  applicationSchema,
  applicationDefaultValues,
  savedSchema,
  savedDefaultValues,
}

export type {
  ApplicationFormValues,
  SavedFormValues
}