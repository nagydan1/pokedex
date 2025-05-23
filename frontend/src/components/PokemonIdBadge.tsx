import { Badge } from "@chakra-ui/react";

interface Props {
  id: number;
}

const PokemonIdBadge = ({ id }: Props) => {
  return (
    <Badge fontSize="md" variant="subtle" data-testid="pokemon-id">
      {id}
    </Badge>
  );
};

export default PokemonIdBadge;
