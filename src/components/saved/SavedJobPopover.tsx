import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { useState } from "react"

//TODO 
//Add deletion from Saved table and add to Applied Table
//Include toast when completed
const SavedJobPopover= () => {
  const [popoverOpen, setPopoverOpen] = useState(false)

  return(
    <div>
      <Popover open={popoverOpen}>
        <PopoverTrigger asChild>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <Button 
              onClick={()=>setPopoverOpen(true)}
              className="text-xs"
              size={"sm"}
            >Apply
            </Button>
          </a>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-row items-center justify-between">
            <p className="text-sm">Did you apply?</p>
            <Button>Yes</Button>
            <Button onClick={()=>setPopoverOpen(false)}>No</Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default SavedJobPopover