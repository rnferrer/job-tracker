import axiosInstance from "../axiosInstance";


//Applied Page Functions
export async function createAppliedJob({ queryKey }: any){
  const [_, job] = queryKey
  await axiosInstance.post('/applied', job)
}

export async function deleteAppliedJob({ queryKey }: any){
  const [_, jobId] = queryKey
  await axiosInstance.delete(`/applied/${jobId}`)
}