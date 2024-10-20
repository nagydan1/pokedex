import { useQuery } from "@tanstack/react-query";
import { PokeApiClient } from "../services/api-client";
import { Pokemon } from "../entities/Pokemon";

const pokeApiClient = new PokeApiClient<Pokemon>("/pokemon");

const usePokemon = (name: string) =>
  useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => pokeApiClient.get(name),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default usePokemon;
