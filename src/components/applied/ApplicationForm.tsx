"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  applicationSchema,
  applicationDefaultValues,
  generalSchema,
  GeneralDefaultValues,
} from "@/lib/FormSchema"
import type {
  ApplicationFormValues,
  GeneralFormValues
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
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { usePathname } from "next/navigation"

/*
TODO:
  - Refactor code so it is not redundant
    - Remove 'Job Posted' field
    - Make the 'Status' field on Applied page conditional based on the current path
*/

interface ApplicationFormProps {
  job_title?: string,
  company_name?: string,
  url?: string,
  location?: string,
  status?: "Applied" | "Interview" | "NoResponse" | "Offer" | "Rejected"
}

const ApplicationForm = (props: ApplicationFormProps) => {
  const pathname = usePathname();
  const schema = (pathname == '/saved') ? generalSchema : applicationSchema;
  const defaultValues = (pathname == '/saved') ? GeneralDefaultValues : applicationDefaultValues;

  const form = useForm<ApplicationFormValues | GeneralFormValues>({
    resolver: zodResolver(schema),
    defaultValues
  });

  function onSubmit(values: ApplicationFormValues | GeneralFormValues){
    console.log(values)
  };

  return(
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="job_title"
            render={({field})=>(
              <FormItem>
                <FormLabel>Position Title</FormLabel>
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
          {pathname == '/applied' ? (
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
              <></>
            )
          }
          <Button type="submit" className="mt-5">Add Application</Button>
        </form>
      </Form>
    </div>
  )
}

export default ApplicationForm