import axios from "axios";

const BASE_URL = "https://api.example.com";

const apiClient = axios.create({
  baseURL: BASE_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "multipart/form-data";

    if (config.data instanceof FormData) {
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    const token = null;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { apiClient };
