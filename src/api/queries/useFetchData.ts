import axiosInstance from "../axiosInstance";

//Applied Page Functions
export async function fetchAppliedJobs ({ queryKey }: any) {
  const [_, userId] = queryKey
  const response = await axiosInstance.get(`/applied/${userId}`);
  return response.data
}

//Saved Page Functions
export async function fetchSavedJobs({ queryKey}: any) {
  const [_, userId] = queryKey
  const response = await axiosInstance.get(`/saved/${userId}`);
  return response.data
}
