import axios from "axios";

const api = axios.create({
  baseURL: "https://trackify-backend-282q.onrender.com/api",
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default api;
