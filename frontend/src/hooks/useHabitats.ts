import { useEffect, useState } from "react";
import { pokeApiClient } from "../services/api-client";
import { CanceledError } from "axios";

interface PokemonFetchResponse {
  count: number;
  results: Habitat[];
}

export interface Habitat {
  name: string;
  url: string;
}

export interface OneHabitat {
  id: number;
  name: string;
  pokemon_species: PokemonSpecies[];
}

interface PokemonSpecies {
  name: string;
  url: string;
}

const usePokemons = () => {
  const [habitats, setHabitats] = useState<OneHabitat[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    pokeApiClient
      .get<PokemonFetchResponse>("/pokemon-habitat", {
        signal: controller.signal,
      })
      .then((res) => res.data.results)
      .then((fetchedHabitatList) => {
        Promise.all<OneHabitat[]>(
          fetchedHabitatList.map((h): any =>
            pokeApiClient
              .get<OneHabitat>(h.url, { signal: controller.signal })
              .then((res) => res.data)
              .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
              })
          )
        ).then((fetchedHabitats) => {
          setHabitats(fetchedHabitats);
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

  return { habitats, error, isLoading };
};

export default usePokemons;
