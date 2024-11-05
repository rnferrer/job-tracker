"use client"

import { DateSelectArg } from "@fullcalendar/core"
import dayGridPlugin from "@fullcalendar/daygrid"
import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from "@fullcalendar/timegrid"
import type { NextPage } from 'next'


const InterviewPage: NextPage = () => {
  return(
    <div className="flex justify-center">
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
    </div>
  )
}

export default InterviewPage