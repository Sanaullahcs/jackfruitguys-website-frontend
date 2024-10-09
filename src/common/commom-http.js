import axios from "axios";

const environment = process.env.environment || "local";
console.log("environment", environment);
let IMAGE_BASE_URL = "";
let APP_URL = "";

if (environment === "local") {
  APP_URL = "http://127.0.0.1:8000/";
  IMAGE_BASE_URL = "http://127.0.0.1:8000";
} else if (environment === "localsystem") {
  APP_URL = "http://192.168.137.1:8000/";
  IMAGE_BASE_URL = "http://192.168.137.1:8000/";
} else if (environment === "dev") {
  APP_URL = "http://192.168.0.242:8082/timestudy-backend/public/";
  IMAGE_BASE_URL = "http://192.168.0.242:8082/timestudy-backend/public/";
} else if (environment === "prod") {
  APP_URL = "https://backend.medicaretimestudy.com/";
  IMAGE_BASE_URL = "https://backend.medicaretimestudy.com";
}

export { IMAGE_BASE_URL, APP_URL };

const baseURL = `${APP_URL}api`;

const headers = {
  "Content-Type": "application/json",
  withCredentials: true,
};

export const HTTP = axios.create({
  baseURL,
  headers: headers,
});

HTTP.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("accesstoken") ||
      localStorage.getItem("clientaccesstoken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);