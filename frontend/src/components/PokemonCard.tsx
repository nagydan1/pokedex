import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Button,
  VStack,
} from "@chakra-ui/react";
import { backendClient } from "../services/api-client";
import { useState } from "react";
import fallback from "../assets/pokemon_fallback_PNG12.png";

interface Props {
  name: string;
  imageURL: string;
  typeSprites: string[];
}

const PokemonCard = ({ name, imageURL, typeSprites }: Props) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSavePokemon = () => {
    backendClient
      .post("/api/savedpokemon", { name })
      .then(() => setIsSaved(true));
  };

  return (
    <>
      <Card height={350} variant={isSaved ? "filled" : "elevated"}>
        <CardBody>
          <Flex
            direction="column"
            align="center"
            justifyContent="space-between"
            height="100%"
          >
            <Flex direction="column" align="center">
              <Image src={imageURL} boxSize="160px" fallbackSrc={fallback} />
              <Heading size="md" mb={3}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Heading>
              <VStack mb={3} gap={2}>
                {typeSprites.map((sprite) => (
                  <Image src={sprite} width="100px" />
                ))}
              </VStack>
            </Flex>
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
