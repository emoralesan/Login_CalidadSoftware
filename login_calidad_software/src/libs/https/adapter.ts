import axios from "axios";
import { notify } from "@libs/toast";

export const http = axios.create({
  baseURL: import.meta.env.PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  console.log("📡 Axios Request:");
  console.log({
    method: config.method,
    url: `${config.baseURL}${config.url}`,
    params: config.params,
    data: config,
  });

  return config;
});

http.interceptors.response.use(
  (response) => {
    console.log("📥 Axios Response:", response);
    return response;
  },
  (error) => {
    console.error("Axios Error:", {
      url: error?.config?.url,
      method: error?.config?.method,
      data: error?.config,
      message: error.message
    });

    return Promise.reject(error);
  }
);
