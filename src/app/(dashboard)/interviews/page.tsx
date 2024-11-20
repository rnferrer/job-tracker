"use client"

import { DateSelectArg } from "@fullcalendar/core"
import dayGridPlugin from "@fullcalendar/daygrid"
import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from "@fullcalendar/timegrid"
import type { NextPage } from 'next'
import { useState } from "react"


const InterviewPage: NextPage = () => {

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<DateSelectArg | null>(null);
  
  const handleDateClick = (selected: DateSelectArg) => {
    setSelectedDate(selected);
    setIsDialogOpen(true);
  };

  return(
    <div className="flex justify-center">
    </div>
  )
}

export default InterviewPage