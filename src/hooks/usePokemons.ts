import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Pokemon {
  name: string;
  url: string;
}

interface FetchPokemonResponse {
  count: number;
  results: Pokemon[];
}

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchPokemonResponse>("/pokemon", {signal: controller.signal})
      .then((res) => setPokemons(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
      });

    return () => controller.abort();
  }, []);

  return { pokemons, error };
};

export default usePokemons;
