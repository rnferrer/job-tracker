"use client"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  applicationSchema,
  applicationDefaultValues,
  savedSchema,
  savedDefaultValues,
} from "@/lib/FormSchema"
import type {
  ApplicationFormValues,
  SavedFormValues
} from "@/lib/FormSchema"
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

/*
TODO:
  - Refactor code so it is not redundant
    - Remove 'Job Posted' field
    - Make the 'Status' field on Applied page conditional based on the current path
*/

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
            name="job_title"
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
            name="company_name"
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
            name="url"
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
            render={({field}) => (
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
                                "w-full justify-start text-left font-normal",
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