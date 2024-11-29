"use client"
import { 
  Button 
} from "@/components/ui/button"
import {
  Calendar
} from "@/components/ui/calendar"
import { 
  Checkbox 
} from "@/components/ui/checkbox"
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage
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
import { 
  interviewDefaultValues, 
  interviewSchema,
  InterviewFormValues
} from "@/lib/FormSchema"
import { TimePickerInput } from "../timePicker/timePickerInput"
import { useForm } from "react-hook-form"
import { useState, useRef } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "../ui/textarea"

/*
  Props needed for InterviewForm
  - Calendar Date
    - Has type date
    - Optional
    - Used when Calendar component clicks on a date
  - Job ID
    - Has type string (job id string?)
    - Optional
    - Used when Add Interview button is used on Apply page
  - Submit function
    - Has type callback function
    - Optional
    - Gets called in InterviewCalendar to return new event object
      - Problem here is that we already have a submit function that is used to handle adding new events to db
      - Need to show on client side that an event has been added to the calendar
*/
interface InterviewFormProps {
  date?: Date,
  job_id?: string
}

const InterviewForm = (props: InterviewFormProps) => {

  const { date, job_id} = props;

  const startHourRef = useRef<HTMLInputElement>(null);
  const startMinuteRef = useRef<HTMLInputElement>(null);
  const endHourRef = useRef<HTMLInputElement>(null);
  const endMinuteRef = useRef<HTMLInputElement>(null);

  const [notesCounter, setNotesCounter] = useState<number>(0);

  if (date) { interviewDefaultValues.date = date };
  if (job_id) { interviewDefaultValues.job_id = job_id };

  const form = useForm<InterviewFormValues>({
    resolver: zodResolver(interviewSchema),
    defaultValues: {...interviewDefaultValues }
  });

  //Exposes React Hook Form and allows us to watch the field for the allDay checkbox
  const { watch } = form;
  const watchAllDay = watch("allDay", true)
  console.log("watching checkbox: ", watchAllDay)

  const onSubmit = (values: InterviewFormValues) => {
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
                          format(field.value, "PPP")
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
                                    disabled={watchAllDay}
                                  />
                                  <span>:</span>
                                  <TimePickerInput
                                    picker="minutes"
                                    ref={startMinuteRef}
                                    date={startField.value}
                                    setDate={startField.onChange}
                                    onLeftFocus={() => startHourRef.current?.focus()}
                                    disabled={watchAllDay}
                                  />
                                </div>
                              </FormItem>
                            )}
                          />
                        </div>
                        <div>
                        <FormField
                            control={form.control}
                            name="end"
                            render={({field: endField}) => (
                              <FormItem>
                                <FormLabel className="text-[14px]">
                                  End Time
                                </FormLabel>
                                <div className="flex items-center">
                                  <TimePickerInput
                                    picker="hours"
                                    ref={endHourRef}
                                    date={endField.value}
                                    setDate={endField.onChange}
                                    onRightFocus={() => endMinuteRef.current?.focus()}
                                    disabled={watchAllDay}
                                  />
                                  <span>:</span>
                                  <TimePickerInput
                                    picker="minutes"
                                    ref={endMinuteRef}
                                    date={endField.value}
                                    setDate={endField.onChange}
                                    onLeftFocus={() => endHourRef.current?.focus()}
                                    disabled={watchAllDay}
                                  />
                                </div>
                                <FormMessage/>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="allDay"
                            render={({field: allDayField}) => (
                              <FormItem className="flex flex-row items-center">
                                <FormControl>
                                  <Checkbox
                                    checked={allDayField.value}
                                    onCheckedChange={allDayField.onChange}
                                    className="mt-2"
                                  />
                                </FormControl>
                                <FormLabel className="ml-1">
                                  All day?
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="notes"
            render={({field}) => (
              <FormItem>
                <FormLabel>Additional Notes</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Type any additional notes for the interview here."
                    onChange={e => setNotesCounter(e.target.value.length)}
                    maxLength={500}
                    rows={5}
                  />
                </FormControl>
                <FormDescription>
                  {notesCounter}/500 characters remaining
                </FormDescription>
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