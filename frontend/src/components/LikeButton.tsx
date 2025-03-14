import { Button, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Pokemon } from "../entities/Pokemon";
import useSavedPokemon from "../hooks/useSavedPokemon";
import useSavedPokemons from "../hooks/useSavedPokemons";
import useSavePokemon from "../hooks/useSavePokemon";

interface Props {
  pokemon: Pokemon;
}

const LikeButton = ({ pokemon }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const { error, isLoading } = useSavedPokemons();
  const savedPokemon = useSavedPokemon(pokemon.id);
  const savePokemon = useSavePokemon();

  useEffect(() => {
    if (savePokemon.error) {
      setIsLiked((prev) => !prev);
    }
  }, [savePokemon.error]);

  useEffect(() => {
    setIsLiked(false);
  }, [pokemon]);

  const handleOnClick = () => {
    const newPokemon = { id: pokemon.id, name: pokemon.name };

    if (!savedPokemon || savedPokemon.likes === 0) {
      savePokemon.mutate({ ...newPokemon, likes: 1 });
      setIsLiked(true);
    } else if (!isLiked) {
      savePokemon.mutate({ ...newPokemon, likes: savedPokemon.likes + 1 });
      setIsLiked(true);
    } else {
      savePokemon.mutate({ ...newPokemon, likes: savedPokemon.likes - 1 });
      setIsLiked(false);
    }
  };

  if (isLoading || error) return;
  return (
    <HStack spacing={0} justify="center">
      <Button
        variant="link"
        colorScheme="blue"
        onClick={handleOnClick}
        aria-label="like"
      >
        {isLiked ? (
          <BsHeartFill style={{ width: 27, height: 25 }} />
        ) : (
          <BsHeart style={{ width: 27, height: 25 }} />
        )}
      </Button>
      <Text fontSize="md">{savedPokemon ? savedPokemon.likes : 0}</Text>
    </HStack>
  );
};

export default LikeButton;
