import { List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useTypes from "../hooks/useTypes";

const TypeList = () => {
  const { resourceList, isLoading, error } = useTypes();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {resourceList.map((type) => (
        <ListItem key={type.name} paddingY="5px">
          <Text fontSize="lg">
            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
          </Text>
        </ListItem>
      ))}
    </List>
  );
};

export default TypeList;
