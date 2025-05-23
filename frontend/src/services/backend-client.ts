import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL as string || "http://localhost:7654/api", 
});

export class BackendClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = () => {
    return axiosInstance
      .get<T[]>(this.endpoint)
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  };
 
  put = (data: T) => {
    return axiosInstance
      .put<T>(this.endpoint, data)
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  };
}
