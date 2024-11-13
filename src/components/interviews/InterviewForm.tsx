"use client"
import {
  Calendar
} from "@/components/ui/calendar"
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel 
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import type { InterviewFormValues } from "@/lib/FormSchema"
import { interviewSchema } from "@/lib/FormSchema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"


const InterviewForm = () => {
  const form = useForm<InterviewFormValues>({
    resolver: zodResolver(interviewSchema)
  })

  function onSubmit(values: InterviewFormValues){
    console.log(values)
  }
  return(
    <> 
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="job_id"
            render={(field) => (
              <FormItem>
                <FormLabel>Job Application</FormLabel>
                <FormControl>
                  <Input placeholder="Choose Job Application" {...field}/>
                </FormControl>
              </FormItem>
            )}
          />
        </form>

      </Form>
    </>
  )
}

export default InterviewForm