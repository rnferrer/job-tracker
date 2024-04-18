"use client"
import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return(
    <div className="h-screen flex justify-center items-center">
      <SignIn></SignIn>
      
    </div>
  )
}

export default SignInPage