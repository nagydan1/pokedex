import { useEffect, useState } from "react";
import { pokeApiClient } from "../services/api-client";
import { CanceledError } from "axios";

interface Sprites {
  front_default: string;
}

export interface OnePokemon {
  id: number;
  name: string;
  sprites: Sprites;
}

const useOnePokemon = (name: string) => {
  const [pokemon, setPokemon] = useState<OnePokemon>({});
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    pokeApiClient
      .get<OnePokemon>("/pokemon/" + name, { signal: controller.signal })
      .then((res) => setPokemon(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);
  return { pokemon, error };
};

export default useOnePokemon;
