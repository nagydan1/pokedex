import NavBar from "./components/NavBar";
import PokemonGrid from "./components/PokemonGrid";
import TypeList from "./components/TypeList";
import HabitatSelector from "./components/HabitatSelector";
import SortSelector from "./components/SortSelector";
import PokemonHeading from "./components/PokemonHeading";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "150px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
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
}

export default App;
