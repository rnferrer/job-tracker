"use client"
import { 
  Dialog, 
  DialogContent,
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog"
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel 
} from "@/components/ui/form"

// {children}:{children:React.ReactNode}
const InterviewForm = () => {
  return(
    <>
      <Dialog>
        <DialogTrigger asChild={true}>
          Add interview
        </DialogTrigger>
        <DialogContent>
          Hello
        </DialogContent>
      </Dialog>
    </>
  )
}

export default InterviewForm