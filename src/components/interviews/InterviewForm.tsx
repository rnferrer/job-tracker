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
import { interviewDefaultValues, interviewSchema } from "@/lib/FormSchema"
import { TimePickerInput } from "../timePicker/timePickerInput"
import { useForm } from "react-hook-form"
import { useState, useRef } from "react"
import { zodResolver } from "@hookform/resolvers/zod"

import type { InterviewFormValues } from "@/lib/FormSchema"
//Use this for Datetime picking https://medium.com/@dinh.nt/create-your-own-datetime-picker-using-shadcn-409e6723225f
const InterviewForm = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [startTime, setStartTime] = useState<Date>()
  const [endTime, setEndTime] = useState<Date>()

  const startHourRef = useRef<HTMLInputElement>(null)
  const startMinuteRef = useRef<HTMLInputElement>(null)



  const form = useForm<InterviewFormValues>({
    resolver: zodResolver(interviewSchema),
    defaultValues: interviewDefaultValues
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
            render={({field}) => (
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
            render={({field}) => (
              <FormItem className="mt-2">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a title for the interview" {...field}/>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render= {({field}) => (
              <FormItem className="flex flex-col w-full mt-3">
                <FormLabel className="">Date & Time</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
          
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP HH:mm")
                          ) : (
                            <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                      </Button>
                  </PopoverTrigger>
                  <PopoverContent side="bottom" avoidCollisions={false} className="w-[450px] min-h-full">
                    <div className="flex flex-row">
                      <Calendar
                        className="pl-0"
                        mode="single"
                        selected={field.value}
                        onDayClick={field.onChange}
                        initialFocus
                      />
                      <div className="flex flex-col gap-3 justify-center">
                        <div>
                          <FormField
                            control={form.control}
                            name="start"
                            render={({field: startField}) => (
                              <FormItem>
                                <FormLabel className="text-[14px]">
                                  Start Time
                                </FormLabel>
                                <div className="flex items-center">
                                  <TimePickerInput
                                    picker="hours"
                                    ref={startHourRef}
                                    date={startField.value}
                                    setDate={startField.onChange}
                                    onRightFocus={() => startMinuteRef.current?.focus()}
                                  />
                                  <span>:</span>
                                  <TimePickerInput
                                    picker="minutes"
                                    ref={startMinuteRef}
                                    date={startField.value}
                                    setDate={startField.onChange}
                                    onLeftFocus={() => startHourRef.current?.focus()}
                                  />
                                </div>
                              </FormItem>
                            )}
                          />
                        </div>
                        <div>
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
          <Button type="submit" className="mt-5">Add Interview</Button>
        </form>
      </Form>
    </>
  )
}

export default InterviewForm