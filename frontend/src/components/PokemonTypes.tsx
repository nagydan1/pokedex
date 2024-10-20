import { VStack, Image } from "@chakra-ui/react";
import useTypes from "../hooks/useTypes";
import { SlottedTypes } from "../entities/Pokemon";

interface Props {
  types: SlottedTypes[];
}

const PokemonTypes = ({ types }: Props) => {
  let typeSprites: string[] = [];
  const { data: typeList } = useTypes();
  types.forEach((type) => {
    typeList.forEach((t) => {
      if (type.type.name === t.name) {
        typeSprites.push(
          t.sprites["generation-ix"]["scarlet-violet"].name_icon
        );
      }
    });
  });

  return (
    <VStack my={3} gap={2} align="start">
      {typeSprites.map((sprite, index) => (
        <Image key={index} src={sprite} width="100px" />
      ))}
    </VStack>
  );
};

export default PokemonTypes;
