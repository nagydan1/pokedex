import {
  Heading,
  List,
  ListItem,
  Spinner,
  Button,
  Image,
} from "@chakra-ui/react";
import { Type } from "../hooks/useTypes";

interface Props {
  onSelectType: (type: Type | null) => void;
  selectedType: Type | null;
  types: Type[];
  error: string;
  isLoading: boolean;
}

const TypeList = ({
  types,
  error,
  isLoading,
  selectedType,
  onSelectType,
}: Props) => {
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <List>
        <ListItem paddingY="5px">
          <Button
            onClick={() => onSelectType(null)}
            variant="link"
          >
            <Heading mb={2}>Types</Heading>
          </Button>
        </ListItem>
        {types.map((type) => (
          <ListItem key={type.name} paddingY="5px">
            <Button
              onClick={() => onSelectType(type)}
              fontSize="lg"
              variant={type.name === selectedType?.name ? "solid" : "link"}
              justifyContent="flex-start"
              fontWeight={type.name === selectedType?.name ? "bold" : "normal"}
            >
              <Image
                src={type.sprites["generation-ix"]["scarlet-violet"].name_icon}
                alt={type.name.charAt(0).toUpperCase() + type.name.slice(1)}
              />
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TypeList;
