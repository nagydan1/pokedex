import { useEffect, useState } from "react";
import { pokeApiClient } from "../services/api-client";
import { CanceledError } from "axios";

interface Type {
  name: string;
  url: string;
}

interface FetchTypesResponse {
  count: number;
  results: Type[];
}

const useTypes = () => {
  const [types, setTypes] = useState<Type[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    pokeApiClient
      .get<FetchTypesResponse>("/type", { signal: controller.signal })
      .then((res) => {
        setTypes(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { types, error, isLoading };
};

export default useTypes;
