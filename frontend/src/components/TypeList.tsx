import { Heading, List, ListItem, Spinner, Button } from "@chakra-ui/react";
import useTypes, { Type } from "../hooks/useTypes";

interface Props {
  onSelectType: (type: Type | null) => void;
  selectedType: Type | null;
}

const TypeList = ({ selectedType, onSelectType }: Props) => {
  const { resourceList, isLoading, error } = useTypes();

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
        {resourceList.map((type) => (
          <ListItem key={type.name} paddingY="5px">
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
