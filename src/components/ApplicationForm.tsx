import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  applicationSchema,
  applicationDefaultValues,
  savedSchema,
  savedDefaultValues,
} from "@/lib/applicationFormSchema"
import type {
  ApplicationFormValues,
  SavedFormValues
} from "@/lib/applicationFormSchema"
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel 
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"


// const generalSchema = z.object({
//   title: z.string()
//     .min(2,{
//       message: "Position name must be at least 2 characters.",
//     }).max(50, {
//       message: "Position name must not be longer than 50 characters.",
//     }),
//   company: z.string()  
//     .min(2,{
//       message: "Company name must be at least 2 characters.",
//     }).max(50, {
//       message: "Company name must not be longer than 50 characters.",
//     }),
//   link: z.string()
//     .url({ 
//       message: "Invalid url" 
//     }),
//   location: z.string()  
//     .min(2,{
//       message: "Location must be at least 2 characters.",
//     }).max(50, {
//       message: "Location must not be longer than 50 characters.",
//     })
// })

// const applicationSchema = generalSchema.extend({
//   status: z.string()
// })

// const savedSchema = generalSchema.extend({
//   date: z.date()
// })

// type ApplicationFormValues = z.infer<typeof applicationSchema>;
// type SavedFormValues = z.infer<typeof savedSchema>;

// const applicationDefaultValues: ApplicationFormValues = {
//   title:"",
//   company:"",
//   link:"",
//   location:"",
//   status: "Applied"
// }

// const savedDefaultValues: SavedFormValues = {
//   title:"",
//   company:"",
//   link:"",
//   location:"",
//   date: new Date()
// }

const ApplicationForm = ({isSavedPage}:{isSavedPage:boolean}) => {
  const schema = isSavedPage ? savedSchema : applicationSchema;
  const defaultValues = isSavedPage ? savedDefaultValues : applicationDefaultValues

  const form = useForm<ApplicationFormValues | SavedFormValues>({
    resolver: zodResolver(schema),
    defaultValues
  })

  function onSubmit(values: ApplicationFormValues | SavedFormValues){
    console.log(values)
  }
  return(
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({field})=>(
              <FormItem>
                <FormLabel>Position Name</FormLabel>
                <FormControl>
                  <Input {...field}/>
                </FormControl>
              </FormItem>
            )}/>
          <FormField
            control={form.control}
            name="company"
            render={({field})=>(
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input {...field}/>
                </FormControl>
              </FormItem>
          )}/>
          <FormField
            control={form.control}
            name="link"
            render={({field})=>(
              <FormItem>
                <FormLabel>Job Posting URL</FormLabel>
                <FormControl>
                  <Input {...field}/>
                </FormControl>
              </FormItem>
          )}/>
          <FormField
            control={form.control}
            name="location"
            render={({field})=>(
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input {...field}/>
                </FormControl>
              </FormItem>
          )}/>
          {!isSavedPage ? (
              <FormField
              control={form.control}
              name="status"
              render={({field})=>(
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Set status of application"/>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Applied">Applied</SelectItem>
                      <SelectItem value="Interview">Interview</SelectItem>
                      <SelectItem value="NoResponse">No Response</SelectItem>
                      <SelectItem value="Offer">Offer</SelectItem>
                      <SelectItem value="Rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
              />
            ) : (
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Job Posting Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                                {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 z-[100] pointer-events-auto" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(date => field.onChange(date||new Date()))}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                  </FormItem>
                )}
              />
            )
          }
          <Button type="submit" className="mt-5">Add Application</Button>
        </form>
      </Form>
    </div>
  )
}

export default ApplicationForm