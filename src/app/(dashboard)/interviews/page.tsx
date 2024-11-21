"use client"

import InterviewCalendar from '@/components/interviews/Calendar'
import type { NextPage } from 'next'

const InterviewPage: NextPage = () => {

  return(
    <div className="flex justify-center">
      <InterviewCalendar/>
    </div>
  )
}

export default InterviewPage