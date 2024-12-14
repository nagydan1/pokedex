import { useQuery } from "@tanstack/react-query";
import { SavedPokemon } from "../entities/SavedPokemon";
import { BackendClient } from "../services/backend-client";

const backendClient = new BackendClient<SavedPokemon[]>("/savedpokemon");

const useSavedPokemons = () =>
  useQuery({
    queryKey: ["savedPokemons"],
    queryFn: () => backendClient.get(),
    staleTime: 60 * 60 * 1000, // 1h
  });

export default useSavedPokemons;
