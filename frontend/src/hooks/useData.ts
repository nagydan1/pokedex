import { useEffect, useState } from "react";
import { pokeApiClient } from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse {
  count: number;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    pokeApiClient
      .get<FetchResponse>(endpoint, { signal: controller.signal })
      .then((res) => res.data.results)
      .then((fetchedResultList) => {
        Promise.all<T[]>(
          fetchedResultList.map((r): any =>
            pokeApiClient
              .get<T>(r.url, { signal: controller.signal })
              .then((res) => res.data)
              .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
              })
          )
        ).then((fetchedData) => {
          setData(fetchedData);
          setLoading(false);
        });
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { setData, data, error, isLoading };
};

export default useData;
