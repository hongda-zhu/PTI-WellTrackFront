import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001", // puerto servidor
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // si se necesita enviar cookies/session
});

export default axiosInstance;