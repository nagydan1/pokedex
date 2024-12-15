import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_SAVEDPOKEMONS } from "../constants";
import savedPokemonService from "../services/savedPokemonService";

const useSavedPokemons = () =>
  useQuery({
    queryKey: CACHE_KEY_SAVEDPOKEMONS,
    queryFn: () => savedPokemonService.get(),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default useSavedPokemons;
