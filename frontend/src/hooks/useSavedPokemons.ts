import { useQuery } from "@tanstack/react-query";
import savedPokemonService from "../services/savedPokemonService";

const useSavedPokemons = () =>
  useQuery({
    queryKey: ["savedPokemons"],
    queryFn: () => savedPokemonService.get(),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default useSavedPokemons;
