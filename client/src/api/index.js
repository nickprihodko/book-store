import axios from "axios";

const api = axios.create({
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.common["x-auth-token"] = token;
  } else {
    delete config.headers.common["x-auth-token"];
  }

  return config;
});

export default api;
