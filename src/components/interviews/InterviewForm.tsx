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
import { TimePickerInput } from "../timePicker/timePickerInput"

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
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Choose Job Application" {...field}/>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="start"
            render= {({field}) => (
              <FormItem className="flex flex-col w-full mt-0.5">
                <FormLabel className="">Date & Time</FormLabel>
                <Popover modal={true}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        {date ? (
                          format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent side="bottom" avoidCollisions={false}>
                    <Calendar
                      className="pl-0"
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                    />
                    <div className="flex flex-row justify-evenly">
                      <div className="flex flex-col">
                        <label className="text-[14px]">
                          Start Time
                        </label>
                        <div className="flex items-center">
                          <TimePickerInput
                            picker="hours"
                            date={date}
                            setDate={setDate}
                          />
                          <span>:</span>
                          <TimePickerInput
                            picker="minutes"
                            date={date}
                            setDate={setDate}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-[14px]">
                          End Time
                        </label>
                        <div className="flex items-center">
                          <TimePickerInput
                            picker="hours"
                            date={date}
                            setDate={setDate}
                          />
                          <span>:</span>
                          <TimePickerInput
                            picker="minutes"
                            date={date}
                            setDate={setDate}
                          />
                        </div>
                      </div>
                    </div>
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