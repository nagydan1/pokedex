import { useState } from "react";
import { Type } from "./hooks/useTypes";
import { Habitat } from "./hooks/useHabitats";
import NavBar from "./components/NavBar";
import PokemonGrid from "./components/PokemonGrid";
import TypeList from "./components/TypeList";
import HabitatSelector from "./components/HabitatSelector";
import SortSelector, { SortOrder } from "./components/SortSelector";
import PokemonHeading from "./components/PokemonHeading";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";

export interface PokemonQuery {
  type: Type | null;
  habitat: Habitat | null;
  sortOrder: SortOrder;
  searchText: string;
}

function App() {
  const [pokemonQuery, setPokemonQuery] = useState<PokemonQuery>({} as PokemonQuery);

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
        <NavBar onSearch={(searchText) => setPokemonQuery({...pokemonQuery, searchText})}/>
      </GridItem>
      <Show above="md">
        <GridItem area="aside" paddingX={3}>
          <TypeList
            selectedType={pokemonQuery.type}
            onSelectType={(type) => setPokemonQuery({ ...pokemonQuery, type })}
          />
        </GridItem>
      </Show>
      <GridItem area="main" p={2}>
        <PokemonHeading pokemonQuery={pokemonQuery}/>
        <HStack spacing={5}>
          <HabitatSelector
            selectedHabitat={pokemonQuery.habitat}
            onSelectHabitat={(habitat) => setPokemonQuery({ ...pokemonQuery, habitat })}
          />
          <SortSelector
            sortOrder={pokemonQuery.sortOrder}
            onSelectSortOrder={(sortOrder) => setPokemonQuery({ ...pokemonQuery, sortOrder })}
          />
        </HStack>
        <PokemonGrid pokemonQuery={pokemonQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
