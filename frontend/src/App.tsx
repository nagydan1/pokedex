import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import PokemonGrid from "./components/PokemonGrid";
import TypeList from "./components/TypeList";
import HabitatSelector from "./components/HabitatSelector";
import useTypes, { Type } from "./hooks/useTypes";
import { Habitat } from "./hooks/useHabitats";

export interface PokemonQuery {
  type: Type | null;
  habitat: Habitat | null;
}

function App() {
  const [pokemonQuery, setPokemonQuery] = useState<PokemonQuery>({} as PokemonQuery);
  const { types, isLoading, error } = useTypes();

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
          <TypeList
            types={types}
            error={error}
            isLoading={isLoading}
            selectedType={pokemonQuery.type}
            onSelectType={(type) => setPokemonQuery({ ...pokemonQuery, type })}
          />
        </GridItem>
      </Show>
      <GridItem area="main" p={2}>
        <HabitatSelector
          selectedHabitat={pokemonQuery.habitat}
          onSelectHabitat={(habitat) =>
            setPokemonQuery({ ...pokemonQuery, habitat })
          }
        />
        <PokemonGrid types={types} pokemonQuery={pokemonQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
