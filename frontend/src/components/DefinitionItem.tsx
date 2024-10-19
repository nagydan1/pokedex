import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box mb={5}>
      <Heading as="dt" fontSize="md" color="gray.500">
        {term}
      </Heading>
      {React.Children.count(children) ? <dd>{children}</dd> : "-"}
    </Box>
  );
};

export default DefinitionItem;
