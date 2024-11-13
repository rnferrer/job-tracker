"use client"
import { 
  Button 
} from "@/components/ui/button"
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

import { Input } from "@/components/ui/input"
import type { InterviewFormValues } from "@/lib/FormSchema"
import { interviewSchema } from "@/lib/FormSchema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

//Use this for Datetime picking https://medium.com/@dinh.nt/create-your-own-datetime-picker-using-shadcn-409e6723225f
const InterviewForm = () => {
  const [date, setDate] = useState<Date>()

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
          <FormField
            control={form.control}
            name="title"
            render={(field) => (
              <FormItem>
                <FormLabel>Interview Title</FormLabel>
                <FormControl>
                  <Input placeholder="Choose Job Application" {...field}/>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="start"
            render= {(field:any) => (
              <FormItem>
                <FormLabel>Start Time</FormLabel>
                <Popover>
                  <PopoverTrigger>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon />
                        {field.value ? (
                        format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="end"
            render= {(field:any) => (
              <FormItem>
                <FormLabel>End Time</FormLabel>
                <Popover>
                  <PopoverTrigger>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon />
                        {field.value ? (
                        format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="z-9999"
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />

        </form>

      </Form>
    </>
  )
}

export default InterviewForm