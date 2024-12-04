"use client"
import { SignUp } from "@clerk/nextjs";
import type { NextPage } from 'next'

const SignUpPage: NextPage = () => {
  return(
    <div className="h-screen flex justify-center items-center">
      <SignUp/>
    </div>
  )
}

export default SignUpPage