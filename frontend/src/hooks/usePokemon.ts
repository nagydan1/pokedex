import { useQuery } from "@tanstack/react-query";
import pokemonService from "../services/pokemonService";

const usePokemon = (name: string) =>
  useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => pokemonService.get(name),
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default usePokemon;
