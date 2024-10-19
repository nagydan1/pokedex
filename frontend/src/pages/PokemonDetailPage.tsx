import { useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import { Heading, Spinner, Image } from "@chakra-ui/react";
import fallback from "../assets/pokemon_fallback_PNG12.png";

const PokemonDetailPage = () => {
  const { name } = useParams();
  const { data: pokemon, isLoading, error } = usePokemon(name!);

  if (isLoading) return <Spinner />;
  if (error || !pokemon) throw error;

  return (
    <>
      <Heading>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Heading>
      <Image
        src={pokemon.sprites.front_default}
        boxSize="160px"
        fallbackSrc={fallback}
      />
    </>
  );
};

export default PokemonDetailPage;
