import { Button } from "@/components/ui/button";


export default function Home() {
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
        <Button>Get started</Button>
      </div>
    </div>
  );
}
