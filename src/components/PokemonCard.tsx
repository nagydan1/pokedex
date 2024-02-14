import useOnePokemon from "../hooks/useOnePokemon";
import { Card, CardBody, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface Props {
  pokemonName: string;
}

const PokemonCard = ({ pokemonName }: Props) => {
  const { pokemon, error } = useOnePokemon(pokemonName);

  return (
    <>
      {error && <Text>{error}</Text>}
      <Card borderRadius={10} overflow="hidden">
        <CardBody>
          <Flex direction='column' align='center'>
            <Image src={pokemon.sprites?.front_default} boxSize="160px" />
            <Heading size="md">
              {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
            </Heading>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default PokemonCard;
