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
import { interviewSchema } from "@/lib/FormSchema"
import { TimePickerInput } from "../timePicker/timePickerInput"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"

import type { InterviewFormValues } from "@/lib/FormSchema"
//Use this for Datetime picking https://medium.com/@dinh.nt/create-your-own-datetime-picker-using-shadcn-409e6723225f
const InterviewForm = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [startTime, setStartTime] = useState<Date>()
  const [endTime, setEndTime] = useState<Date>()


  const form = useForm<InterviewFormValues>({
    resolver: zodResolver(interviewSchema)
  })

  const setTime = (dateInput: Date | undefined) => {
    if (!dateInput) return;
    const time = new Date (dateInput)
    time.setHours(dateInput.getHours())
    time.setMinutes(dateInput.getMinutes())
    setEndTime(time)
  }

  function onSubmit(values: InterviewFormValues){
    console.log(values)
  }
  return(
    <> 
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/*Disable and autofill if opening from applications page or if a job_id is given */}
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
              <FormItem className="mt-2">
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
              <FormItem className="flex flex-col w-full mt-3">
                <FormLabel className="">Date & Time</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        {(endTime) ? (
                          format(endTime, "PPP HH:mm")
                          ) : (
                            <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent side="bottom" avoidCollisions={false} className="w-[450px] min-h-full">
                    <div className="flex flex-row">
                      <Calendar
                        className="pl-0"
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                      />
                      <div className="flex flex-col h-[200px] justify-evenly">
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
                              date={endTime}
                              setDate={setTime}
                            />
                            <span>:</span>
                            <TimePickerInput
                              picker="minutes"
                              date={endTime}
                              setDate={setTime}
                            />
                          </div>
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