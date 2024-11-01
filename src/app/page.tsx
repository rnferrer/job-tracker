import { Button } from "@/components/ui/button";
import Link from "next/link";

/*
TODO: add routes for db entry
*/
export default function Landing() {
  return (
    <div className="w-screen h-screen flex justify-center items-center text-black">
      <div className="w-full max-w-[600px]"> 
        <h1 className="text-6xl mb-4 font-bold">
          Job Application Tracker
        </h1>
        <p className="mb-4">
          Job hunting can be overwhelming, but this app will help you organize 
          all of your applications in one place. Keep track of job postings, interview dates,
          and company's information.
        </p>
        <Link href='/sign-up'>
          <Button>Get started</Button>
        </Link>
      </div>
    </div>
  );
}
