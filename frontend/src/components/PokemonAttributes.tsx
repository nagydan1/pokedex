import { Flex, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import PokemonIdBadge from "./PokemonIdBadge";
import PokemonTypes from "./PokemonTypes";
import PokemonHabitat from "./PokemonHabitat";
import { Pokemon } from "../entities/Pokemon";

interface Props {
  pokemon: Pokemon;
}

const PokemonAttributes = ({ pokemon }: Props) => {
  return (
    <Flex
      as="dl"
      m="auto"
      width={{ sm: "100%" }}
      height={{ sm: "60vh" }}
      gap={5}
      direction="column"
      wrap="wrap"
    >
      <DefinitionItem term="ID number">
        {<PokemonIdBadge id={pokemon.id} />}
      </DefinitionItem>
      <DefinitionItem term="Base experience">
        <Text>{pokemon.base_experience}</Text>
      </DefinitionItem>
      <DefinitionItem term="Height">
        <Text>{pokemon.height}</Text>
      </DefinitionItem>
      <DefinitionItem term="Weight">
        <Text>{pokemon.weight}</Text>
      </DefinitionItem>
      <DefinitionItem term="Habitat">
        <PokemonHabitat speciesName={pokemon.species.name} />
      </DefinitionItem>
      <DefinitionItem term="Types">
        <PokemonTypes types={pokemon.types} />
      </DefinitionItem>
      <DefinitionItem term="Held items">
        {pokemon.held_items.map(({ item }, index) => (
          <Text key={index}>
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Base stats">
        {pokemon.stats.map(({ stat, base_stat }, index) => (
          <Text key={index}>
            {stat.name.charAt(0).toUpperCase() + stat.name.slice(1)}
            {": "}
            {base_stat}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Moves">
        {pokemon.moves.map(({ move }, index) => (
          <Text key={index}>
            {move.name.charAt(0).toUpperCase() + move.name.slice(1)}
          </Text>
        ))}
      </DefinitionItem>
    </Flex>
  );
};

export default PokemonAttributes;
