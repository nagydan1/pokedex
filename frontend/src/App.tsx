import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import PokemonGrid from "./components/PokemonGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="greenyellow">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" >
        <PokemonGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
