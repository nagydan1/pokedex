import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box p={5}>
        <Heading>Shoot</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page doesn't exist."
            : "An unexpected error happened."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
