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
  const [pokemon, setPokemon] = useState<OnePokemon>({
    name: "",
    id: 0,
    sprites: {
      front_default: "",
    },
  });
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    pokeApiClient
      .get<OnePokemon>("/pokemon/" + name, { signal: controller.signal })
      .then((res) => {
        setPokemon(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { pokemon, error, isLoading };
};

export default useOnePokemon;
