import { List, ListItem, Spinner, Button } from "@chakra-ui/react";
import useTypes, { Type } from "../hooks/useTypes";

interface Props {
  onSelectType: (type: Type) => void;
  selectedType: Type | null;
}

const TypeList = ({ selectedType, onSelectType }: Props) => {
  const { resourceList, isLoading, error } = useTypes();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {resourceList.map((type) => (
        <ListItem key={type.name} paddingY="5px">
          <Button
            onClick={() => onSelectType(type)}
            fontSize="lg"
            variant="link"
            justifyContent="flex-start"
            fontWeight={type.name === selectedType?.name ? 'bold' : 'normal'}
          >
            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default TypeList;
