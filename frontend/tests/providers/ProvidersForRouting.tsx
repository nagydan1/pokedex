import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

const QueryProvider = ({ children }: PropsWithChildren) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <ChakraProvider>
      <QueryClientProvider client={client}>
          {children}
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default QueryProvider;
