import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Button,
} from "@chakra-ui/react";
import { backendClient } from "../services/api-client";
import { useState } from "react";
import fallback from "../assets/pokemon_fallback_PNG12.png";

interface Props {
  name: string;
  imageURL: string;
}

const PokemonCard = ({ name, imageURL }: Props) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSavePokemon = () => {
    backendClient
      .post("/api/savedpokemon", { name })
      .then(() => setIsSaved(true));
  };

  return (
    <>
      <Card variant={isSaved ? "filled" : "elevated"}>
        <CardBody>
          <Flex direction="column" align="center">
            <Image src={imageURL} boxSize="160px" fallbackSrc={fallback} />
            <Heading size="md" mb={3}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Heading>
            <Button
              colorScheme="blue"
              onClick={handleSavePokemon}
              isDisabled={isSaved}
            >
              {isSaved ? "Saved" : "Save"}
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default PokemonCard;
