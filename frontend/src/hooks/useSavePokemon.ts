import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import savedPokemonService from "../services/savedPokemonService";

const useSavePokemon = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: savedPokemonService.post,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["savedPokemons"],
      }); 
    },
    onError: (error) =>
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      }),
  });
};

export default useSavePokemon;
