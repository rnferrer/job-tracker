"use client"

import { Button } from "../ui/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import InterviewForm from "../interviews/InterviewForm"


//experimental
import { 
  Dialog, 
  DialogContent,
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog"

import { useState } from "react"



/*
  TODO:
    - Convert current hierarchy of components to have the dialog wrap the dropdownmenu
      - Can use this as resource: https://github.com/radix-ui/primitives/issues/1836
*/
const EditApplicationMenu = () => {
  const [open, setOpen] = useState(false)
  return(
    <>

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="cursor-pointer" onSelect={(e:any) => e.preventDefault()}>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
              <DropdownMenuItem>
                Add Interview
              </DropdownMenuItem>
            </DialogTrigger>
            <DialogContent>
              Add interview here!
            </DialogContent>
          </Dialog>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </>
  )
}


export default EditApplicationMenu