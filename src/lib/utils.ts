import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {
  InterviewFormValues,
  ApplicationFormValues
} from "./FormSchema"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function filterProps<T extends InterviewFormValues | ApplicationFormValues>(props: Partial<T>)  {
  const filteredProps = Object.fromEntries(
    Object.entries(props)
      .filter(([_, value]) =>
        value !== null && value !== undefined
      )
  )
  return filteredProps
}
