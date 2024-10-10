import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import PokemonGrid from "./components/PokemonGrid";
import TypeList from "./components/TypeList";
import HabitatSelector from "./components/HabitatSelector";
import { Type } from "./hooks/useTypes";
import { OneHabitat } from "./hooks/useHabitats";

function App() {
  const [selectedType, setSelectedType] = useState<Type | null>(null);
  const [selectedHabitat, setSelectedHabitat] = useState<OneHabitat | null>(null);

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
          <TypeList selectedType={selectedType} onSelectType={(type) => setSelectedType(type)}/>
        </GridItem>
      </Show>
      <GridItem area="main" p={2}>
        <HabitatSelector selectedHabitat={selectedHabitat} onSelectHabitat={(habitat) => setSelectedHabitat(habitat)}/>
        <PokemonGrid selectedType={selectedType} selectedHabitat={selectedHabitat} />
      </GridItem>
    </Grid>
  );
}

export default App;
