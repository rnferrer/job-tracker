"use client"

import { 
  Dialog, 
  DialogContent,
  DialogDescription, 
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog"
import { 
  DateSelectArg,
  EventApi,
  EventChangeArg,
  EventClickArg 
} from "@fullcalendar/core"
import dayGridPlugin from "@fullcalendar/daygrid"
import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import { useState } from "react"
import InterviewForm from "./InterviewForm"
import { InterviewFormValues } from "@/lib/FormSchema"

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
    

    WORKING SOLUTIONS
    1. Pass props to InterviewForm to return an object to InterviewCalendar that it can use in its calendar
    
  */ 

  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([])
  const [isFormDialogOpen, setIsFormDialogOpen] = useState<boolean>(false);
  const [isInfoDialogOpen, setIsInfoDialogOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<DateSelectArg | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<InterviewFormValues | null>(null)

  //This event will pass in a date and time into InterviewForm
  const handleDateClick = (selected: DateSelectArg) => {
    setSelectedDate(selected);
    setIsFormDialogOpen(true);
    console.log(selected)
  };

  const handleEventClick = (selected: EventClickArg) => {
    // Opens a dialog of non-editable info of the event
    // Can delete or edit using buttons
    console.log(selected)
    const { 
      allDay, 
      eventId: job_id, 
      title, 
      start, 
      end 
    } = extractDateInfo(selected);
    
    setSelectedEvent({
      allDay,
      job_id,
      title,
      start: start || new Date(), // Fallback if start is null or undefined
      end: end || new Date(),
      date: start || new Date()
    });
    setIsInfoDialogOpen(true)
  }

  const extractDateInfo = (selected: EventClickArg) => {
    const { event } = selected;

    const allDay = event.allDay; 
    const eventId = event.id;               
    const title = event.title;               
    const start = event.start;
    const end = event.end;

    return({ allDay, eventId, title, start, end });
  }

  const handleEventChange = (changeInfo: EventChangeArg) => {
    // Need to add logic here to update the event info in the db
    console.log(changeInfo)
  }

  return (
    <div className="w-[80%] pt-4">
      <FullCalendar
        plugins= {[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView= 'dayGridMonth'
        aspectRatio={2.3}
        editable={true}
        eventChange={handleEventChange}
        eventClick={handleEventClick}
        fixedWeekCount={false}
        select={handleDateClick}
        selectable={true}
        selectMirror={true}
        headerToolbar= {{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        initialEvents={
          // typeof window !== "undefined"
          // ? JSON.parse(localStorage.getItem("events") || "[]")
          // : []
          [{
            id: '123',
            title: "event 1",
            start: "2024-11-24",
            end: "2024-11-24",
            
          }]
        }
      />
      <Dialog open={isInfoDialogOpen} onOpenChange={setIsInfoDialogOpen}>
        <DialogContent>
          <div>
            <p>
              {JSON.stringify(selectedEvent)}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isFormDialogOpen} onOpenChange={setIsFormDialogOpen}>
        <DialogContent>
          <InterviewForm
            date={new Date()}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default InterviewCalendar