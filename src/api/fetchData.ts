import axios from "axios";

export const fetchData = async (url: string) => {
  const response = await axios.get(url); // Replace with your API URL
  return response.data;
};