import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const applicationSchema = z.object({
  title: z.string().min(2).max(50),
  company: z.string().min(2).max(50),
  link: z.string().url(),
  location: z.string().min(2).max(50)
})

const ApplicationForm = () => {
  const form = useForm<z.infer<typeof applicationSchema>>({
    resolver: zodResolver(applicationSchema),
    defaultValues:{
      title:"",
      company:"",
      link:"",
      location:""
    }
  })
  function onSubmit(values: z.infer<typeof applicationSchema>){
    console.log(values)
  }
  return(
    <div >
      {/* <form className="flex flex-col">
        <label>Position Name</label>
        <input/>
        <label>Company Name</label>
        <input/>
        <label>Job Posting Link</label>
        <input/>
        <label>Location of Job</label>
        <input/>
      </form> */}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({field})=>(
              <FormItem>
                <FormLabel>Position Name</FormLabel>
                <FormControl>
                  <Input/>
                </FormControl>
              </FormItem>
            )}/>
          <FormField
            control={form.control}
            name="company"
            render={({field})=>(
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input/>
                </FormControl>
              </FormItem>
          )}/>
          <FormField
            control={form.control}
            name="link"
            render={({field})=>(
              <FormItem>
                <FormLabel>Job Post URL</FormLabel>
                <FormControl>
                  <Input/>
                </FormControl>
              </FormItem>
          )}/>
          <FormField
            control={form.control}
            name="location"
            render={({field})=>(
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input/>
                </FormControl>
              </FormItem>
          )}/>
          <Button type="submit" className="mt-5">Add Application</Button>
        </form>
      </Form>
    </div>
  )
}

export default ApplicationForm