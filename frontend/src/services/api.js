import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const registerUser = async (data) => {
  // const res = await axios.post(`${API_BASE_URL}/user/register`, data);
  const res = await axios.post(`https://simple-registration-be.vercel.app/user/register`, data);
  return res.data;
};
