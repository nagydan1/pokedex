import { Grid, Show, GridItem, Flex } from "@chakra-ui/react";
import HabitatSelector from "../components/HabitatSelector";
import PokemonGrid from "../components/PokemonGrid";
import PokemonHeading from "../components/PokemonHeading";
import SortSelector from "../components/SortSelector";
import TypeList from "../components/TypeList";
import TypeSelector from "../components/TypeSelector";

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
        <Flex columnGap={5} flexDirection="row" flexWrap="wrap">
          <Show below="md">
            <TypeSelector />
          </Show>
          <HabitatSelector />
          <SortSelector />
        </Flex>
        <PokemonGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
