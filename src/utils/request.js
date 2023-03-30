import axios from "axios";
import { Message } from "element-ui";

// create an axios instance
const service = axios.create({
  baseURL: "/api",
  timeout: 60000,
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    // do something with request error
    console.error(error); // for debug
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;

    if (res.code !== "0") {
      Message({
        message: res.msg || "Error",
        type: "error",
        duration: 5 * 1000,
      });

      return Promise.reject(res);
    } else {
      if (res.data && res.data.access_token) {
        sessionStorage.setItem("token", res.data.access_token);
      }
      return response;
    }
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        sessionStorage.removeItem("token");
      } else if (error.response.status === 413) {
        return Promise.reject("上传的文件超出大小限制");
      }
      return Promise.reject(error.response.data);
    }
  }
);

export default service;
