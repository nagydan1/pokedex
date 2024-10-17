import { pokeApiClient } from "../services/api-client";

interface FetchResponse {
  count: number;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

const fetchFn = <T>(endpoint: string): Promise<T[]> => {
  return pokeApiClient
    .get<FetchResponse>(endpoint)
    .then((res) => res.data.results)
    .then((fetchedResultList) =>
      Promise.all(
        fetchedResultList.map(
          (res): Promise<T> =>
            pokeApiClient.get<T>(res.url).then((res) => res.data)
        )
      )
    );
};

export default fetchFn;
