"use client"

import { Button } from "../ui/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"

const EditApplicationMenu = () => {
  return(
    <>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="cursor-pointer">
          Add Interview
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