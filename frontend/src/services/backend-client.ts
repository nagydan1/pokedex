import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_BACKEND_URL || "http://localhost:7654/api",
});

export class BackendClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = () => {
    return axiosInstance
      .get<T>(this.endpoint)
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  };
}
