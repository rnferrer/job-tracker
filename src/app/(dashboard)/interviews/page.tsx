"use client"

import InterviewCalendar from '@/components/interviews/InterviewCalendar'
import type { NextPage } from 'next'

const InterviewPage: NextPage = () => {

  return(
    <div className="flex justify-center">
      <InterviewCalendar/>
    </div>
  )
}

export default InterviewPage