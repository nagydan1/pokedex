import { Grid, Show, GridItem, HStack } from "@chakra-ui/react";
import HabitatSelector from "../components/HabitatSelector";
import PokemonGrid from "../components/PokemonGrid";
import PokemonHeading from "../components/PokemonHeading";
import SortSelector from "../components/SortSelector";
import TypeList from "../components/TypeList";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        md: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "150px 1fr",
      }}
    >
      <Show above="md">
        <GridItem area="aside" paddingX={3}>
          <TypeList />
        </GridItem>
      </Show>
      <GridItem area="main" p={2}>
        <PokemonHeading />
        <HStack spacing={5}>
          <HabitatSelector />
          <SortSelector />
        </HStack>
        <PokemonGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
