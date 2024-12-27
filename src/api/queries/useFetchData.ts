import axiosInstance from "../axiosInstance";

//Applied Page Functions
export async function fetchAppliedJobs ({ queryKey }: any) {
  const [_, userId] = queryKey
  const response = await fetch(`http://localhost:8000/applied/${userId}`);
  const data = await response.json()
  return data
}

//Saved Page Functions
export async function fetchSavedJobs({ queryKey}: any) {
  const [_, userId] = queryKey
  const response = await axiosInstance.get(`/saved/${userId}`);
  return response.data
}
