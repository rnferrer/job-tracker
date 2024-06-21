import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const applicationSchema = z.object({
  title: z.string()
    .min(2,{
      message: "Position name must be at least 2 characters.",
    }).max(50, {
      message: "Position name must not be longer than 50 characters.",
    }),
  company: z.string()  
    .min(2,{
      message: "Company name must be at least 2 characters.",
    }).max(50, {
      message: "Company name must not be longer than 50 characters.",
    }),
  link: z.string()
    .url(
      { message: "Invalid url" 

      }),
  location: z.string()  
    .min(2,{
      message: "Location must be at least 2 characters.",
    }).max(50, {
      message: "Location must not be longer than 50 characters.",
    }),
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
    <div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({field})=>(
              <FormItem>
                <FormLabel>Position Name</FormLabel>
                <FormControl>
                  <Input {...field}/>
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
                  <Input {...field}/>
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
                  <Input {...field}/>
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
                  <Input {...field}/>
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