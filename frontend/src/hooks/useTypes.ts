import { useEffect, useState } from "react";
import { pokeApiClient } from "../services/api-client";
import { CanceledError } from "axios";

interface TypeFetchResponse {
  count: number;
  results: Type[];
}

export interface Type {
  name: string;
  url: string;
}

export interface OneType {
  id: number;
  name: string;
  sprites: Sprites;
}

interface Sprites {
  'generation-ix': GenerationIX;
}

interface GenerationIX {
  'scarlet-violet': nameIcon;
}

export interface nameIcon {
  name_icon: string;
}

const useTypes = () => {
  const [types, setTypes] = useState<OneType[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    pokeApiClient
      .get<TypeFetchResponse>("/type?limit=21", { signal: controller.signal })
      .then((res) => res.data.results)
      .then((fetchedTypeList) => {
        Promise.all<OneType[]>(
          fetchedTypeList.map((t): any =>
            pokeApiClient
              .get<OneType>(t.url, { signal: controller.signal })
              .then((res) => res.data)
              .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
              })
          )
        ).then((fetchedTypes) => {
          setTypes(fetchedTypes);
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

  return { types, error, isLoading };
};

export default useTypes;
