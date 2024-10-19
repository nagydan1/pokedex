import axios from "axios";

export const backendClient = axios.create({
  baseURL: import.meta.env.REACT_APP_BACKEND_URL || "http://localhost:7654",
});

const axiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

interface FetchResponse {
  count: number;
  next: string | null;
  results: Result[];
}

interface Result {
  name: string;
  url: string;
}

export class PokeApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance
      .get<FetchResponse>(this.endpoint)
      .then((res) => res.data.results)
      .then((fetchedResultList) =>
        Promise.all(
          fetchedResultList.map(
            (res): Promise<T> =>
              axiosInstance.get<T>(res.url).then((res) => res.data)
          )
        )
      )
      .catch((error) => {
        throw error;
      });
  };

  get = (name: string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + name)
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  };

  getInfinite = (pageParam: string) => {
    return axiosInstance
      .get<FetchResponse>(pageParam)
      .then((res) => res.data)
      .then((fetchedResultList) =>
        Promise.all(
          fetchedResultList.results.map(
            (res): Promise<T> =>
              axiosInstance.get<T>(res.url).then((res) => res.data)
          )
        ).then((promiseAllresults) => ({
          ...fetchedResultList,
          results: promiseAllresults,
        }))
      )
      .catch((error) => {
        throw error;
      });
  };
}
