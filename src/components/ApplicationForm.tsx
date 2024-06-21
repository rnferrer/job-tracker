import { useForm } from "react-hook-form"

const ApplicationForm = () => {
  const { register, handleSubmit } = useForm()
  return(
    <div className="flex flex-row">
      <form>
        <label>Position Name</label>
        <input/>
        <label>Company Name</label>
        <input/>
        <label>Job Posting Link</label>
        <input/>
        <label>Location of Job</label>
        <input/>
      </form>
    </div>
  )
}

export default ApplicationForm