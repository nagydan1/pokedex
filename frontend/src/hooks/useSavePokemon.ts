import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_SAVEDPOKEMONS } from "../constants";
import { SavedPokemon } from "../entities/SavedPokemon";
import savedPokemonService from "../services/savedPokemonService";

interface SavePokemonContext {
  previousSavedPokemons: SavedPokemon[];
}

const useSavePokemon = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation<SavedPokemon, Error, SavedPokemon, SavePokemonContext>({
    mutationFn: savedPokemonService.put,
    onMutate: (newPokemon) => {
      const previousSavedPokemons =
        queryClient.getQueryData<SavedPokemon[]>(CACHE_KEY_SAVEDPOKEMONS) || [];

      queryClient.setQueryData<SavedPokemon[]>(
        CACHE_KEY_SAVEDPOKEMONS,
        (savedPokemons) =>
          savedPokemons?.find((sp) => sp.id === newPokemon.id)
            ? savedPokemons?.map((sp) =>
                sp.id === newPokemon.id ? newPokemon : sp
              )
            : [...(savedPokemons || []), newPokemon]
      );

      return { previousSavedPokemons };
    },
    onSuccess: (savedPokemon, newPokemon) => {
      queryClient.setQueryData<SavedPokemon[]>(
        CACHE_KEY_SAVEDPOKEMONS,
        (savedPokemons) =>
          savedPokemons?.map((sp) =>
            sp.id === newPokemon.id ? savedPokemon : sp
          )
      );
    },
    onError: (error, _, context) => {
      if (!context) return;

      queryClient.setQueryData<SavedPokemon[]>(
        CACHE_KEY_SAVEDPOKEMONS,
        context.previousSavedPokemons
      );

      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });
};

export default useSavePokemon;
