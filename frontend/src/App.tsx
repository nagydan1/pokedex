import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import PokemonGrid from "./components/PokemonGrid";
import TypeList from "./components/TypeList";
import { Type } from "./hooks/useTypes";

function App() {
  const [selectedType, setSelectedType] = useState<Type | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "150px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={3}>
          <TypeList onSelectType={(type) => setSelectedType(type)}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PokemonGrid selectedType={selectedType}/>
      </GridItem>
    </Grid>
  );
}

export default App;
