import axiosInstance from "../axiosInstance";

export async function fetchAppliedJobs (userId: number) {
  const response = await axiosInstance.get('/applied', {
    params: {
      userId
    }
  });
  return response.data
}

export async function createAppliedJob(job: any){
  axiosInstance.post('/applied', job)
}