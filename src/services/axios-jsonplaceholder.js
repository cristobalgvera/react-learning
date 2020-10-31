import axios from "axios";

const instance = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
});

instance.interceptors.response.use(
  (response) => {
    console.log("[index.js | Axios - Response interceptor]", response);
    return response;
  },
  (error) => {
    console.log("[index.js | Axios - Response interceptor]", error.message);
    return Promise.reject(error);
  }
);

instance.interceptors.request.use(
  (request) => {
    console.log("[index.js | Axios - Request interceptor]", request);
    return request;
  },
  (error) => {
    console.log("[index.js | Axios - Request interceptor]", error.message);
    return Promise.reject(error);
  }
);

export default instance;
