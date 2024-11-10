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
  DropdownMenuItem
} from "@/components/ui/dropdown-menu" 
import { forwardRef } from "react"

// {children}:{children:React.ReactNode}
const InterviewForm = forwardRef((props: any, forwardRef) => {
  const { triggerChildren, children, onSelect, onOpenChange, ...itemProps} = props
  return(
    <>
      <Dialog>
        <DialogTrigger asChild>
          <DropdownMenuItem
            {...itemProps}
            ref={forwardRef}
            onSelect={(event) => {
              event.preventDefault();
              onSelect && onSelect()
            }}
          >
            {triggerChildren}
          </DropdownMenuItem>
        </DialogTrigger>
        <DialogContent>
          {children}
          <DialogHeader>
            Hello there
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
})

export default InterviewForm