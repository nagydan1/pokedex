import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import PokemonIdBadge from "./PokemonIdBadge";
import PokemonTypes from "./PokemonTypes";
import { Pokemon } from "../entities/Pokemon";

interface Props {
  pokemon: Pokemon;
}

const PokemonAttributes = ({ pokemon }: Props) => {
  return (
    <SimpleGrid columns={3} as="dl">
      <Box>
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
        <DefinitionItem term="Types">
          <PokemonTypes types={pokemon.types} />
        </DefinitionItem>
      </Box>

      <Box>
        <DefinitionItem term="Held items">
          {pokemon.held_items.map(({ item, slot }) => (
            <Text key={slot}>
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
      </Box>

      <DefinitionItem term="Moves">
        {pokemon.moves.map(({ move, slot }) => (
          <Text key={slot}>
            {move.name.charAt(0).toUpperCase() + move.name.slice(1)}
          </Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default PokemonAttributes;
