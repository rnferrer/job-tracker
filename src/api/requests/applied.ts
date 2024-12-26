import axiosInstance from "../axiosInstance";

export async function fetchAppliedJobs ({ queryKey }: any) {
  const [_, userId] = queryKey
  const response = await axiosInstance.get('/applied', {
    params: {
      userId
    }
  });
  return response.data
}

export async function createAppliedJob(job: any){
  await axiosInstance.post('/applied', job)
}

export async function deleteAppliedJob(jobId: number){
  await axiosInstance.delete('/applied', {
    params:{
      jobId
    }
  })
}