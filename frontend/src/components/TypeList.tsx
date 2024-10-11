import { Heading, List, ListItem, Spinner, Button, Image } from "@chakra-ui/react";
import { OneType } from "../hooks/useTypes";

interface Props {
  onSelectType: (type: OneType | null) => void;
  selectedType: OneType | null;
  types: OneType[];
  error: string;
  isLoading: boolean;
}

const TypeList = ({ types, error, isLoading, selectedType, onSelectType }: Props) => {

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading my={2}>Types</Heading>
      <List>
        <ListItem paddingY="5px">
          <Button
            onClick={() => onSelectType(null)}
            fontSize="lg"
            variant="link"
            justifyContent="flex-start"
            fontWeight={selectedType === null ? "bold" : "normal"}
          >
            All types
          </Button>
        </ListItem>
        {types.map((type) => (
          <ListItem key={type.name} paddingY="5px">
            {/* <Image src={type.sprites["generation-ix"]["scarlet-violet"].name_icon} /> */}
            <Button
              onClick={() => onSelectType(type)}
              fontSize="lg"
              variant="link"
              justifyContent="flex-start"
              fontWeight={type.name === selectedType?.name ? "bold" : "normal"}
            >
              {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TypeList;
