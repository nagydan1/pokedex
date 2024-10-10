import { useEffect, useState } from "react";
import { pokeApiClient } from "../services/api-client";
import { CanceledError } from "axios";
import { Type } from "./useTypes";

interface PokemonFetchResponse {
  count: number;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface OnePokemon {
  id: number;
  name: string;
  sprites: Sprites;
  types: SlottedTypes[];
}

interface Sprites {
  front_default: string;
}

interface SlottedTypes {
  slot: number;
  type: Type;
}

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<OnePokemon[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    pokeApiClient
      .get<PokemonFetchResponse>("/pokemon", { signal: controller.signal })
      .then((res) => res.data.results)
      .then((fetchedPokemonList) => {
        Promise.all<OnePokemon[]>(
          fetchedPokemonList.map((p): any =>
            pokeApiClient
              .get<OnePokemon>(p.url, { signal: controller.signal })
              .then((res) => res.data)
              .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
              })
          )
        ).then((fetchedPokemons) => {
          setPokemons(fetchedPokemons);
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

  return { pokemons, error, isLoading };
};

export default usePokemons;
