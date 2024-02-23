import { useEffect, useState } from "react";
import { pokeApiClient } from "../services/api-client";
import { CanceledError } from "axios";

export interface Pokemon {
  name: string;
  url: string;
}

interface FetchPokemonsResponse {
  count: number;
  results: Pokemon[];
}

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    pokeApiClient
      .get<FetchPokemonsResponse>("/pokemon", { signal: controller.signal })
      .then((res) => setPokemons(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { pokemons, error };
};

export default usePokemons;
