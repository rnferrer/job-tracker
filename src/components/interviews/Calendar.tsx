"use client"

import { DateSelectArg } from "@fullcalendar/core"
import dayGridPlugin from "@fullcalendar/daygrid"
import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from "@fullcalendar/timegrid"
import { useState } from "react"

const InterviewCalendar = () => {
  /*
    TODO: 
    1. Add handle submit for zod form
    2. Flow for adding event to calendar
        Option 1:
          - From the Interviews Page, click on a day in monthView and dialog opens
          - Date gets autofilled in form and defaults to all day
          - In the form, user inputs information such as interview title, which application the interview is apart of, and time for interview
            - This would require a get request for all of their interviews
          - Could make it so that initial information is taken from the user and then there is a next button to choose which application the interview is selected for
        Option 2:
          - From the Applied Page, click on the three dots and a drop down menu will open
            - Add interview
            - Edit
            - Delete
          - If 'add interview' option is clicked, a dialog opens 
          - User inputs information about the interview
            - A default input for the title is [Company] Interview
            - A default for the time is all day, otherwise they can put in their own times
          - User submits and a toast pops up, notifying that it has been added to the interviews
  */ 
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<DateSelectArg | null>(null);
  
  const handleDateClick = (selected: DateSelectArg) => {
    setSelectedDate(selected);
    setIsDialogOpen(true);
  };
  return (
    <div className="w-[80%]">
      <FullCalendar
          plugins= {[dayGridPlugin]}
          initialView= 'dayGridMonth'
          aspectRatio={2.4}
          fixedWeekCount={false}
          headerToolbar= {{
            left: 'prev,next',
            center: 'title',
            right: 'timeGridWeek, dayGridMonth'
          }}
        />
    </div>
  )
}

export default InterviewCalendar