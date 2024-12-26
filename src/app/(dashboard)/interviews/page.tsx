"use client"

import InterviewCalendar from '@/components/interviews/InterviewCalendar'
import type { NextPage } from 'next'
/*
TODO:
- Queries for interview page
  - (query) Get interview for user
  - (mutation) Create/add interview to application
  - (mutation) Delete interview

*/
const InterviewPage: NextPage = () => {

  return(
    <div className="flex justify-center">
      <InterviewCalendar/>
    </div>
  )
}

export default InterviewPage