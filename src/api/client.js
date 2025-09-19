import axios from "axios";
export default axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "https://834f4a5aff79.ngrok-free.app/api",
});
