"use client"
import { SignIn } from "@clerk/nextjs";
import type { NextPage } from 'next'

const SignInPage:NextPage = () => {
  return(
    <div className="h-screen flex justify-center items-center">
      <SignIn/>
    </div>
  )
}

export default SignInPage