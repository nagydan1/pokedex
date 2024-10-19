import { useQuery } from "@tanstack/react-query";
import { PokeApiClient } from "../services/api-client";
import habitats from "../data/hatitats";
import { Habitat } from "../entities/Habitat";

const pokeApiClient = new PokeApiClient<Habitat>("/pokemon-habitat");

const useHabitats = () =>
  useQuery({
    queryKey: ["habitats"],
    queryFn: () => pokeApiClient.getAll(),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: habitats,
  });

export default useHabitats;
