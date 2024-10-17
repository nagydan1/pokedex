import { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import PokemonGrid from "./components/PokemonGrid";
import TypeList from "./components/TypeList";
import HabitatSelector from "./components/HabitatSelector";
import SortSelector, { SortOrder } from "./components/SortSelector";
import PokemonHeading from "./components/PokemonHeading";
import useTypes, { Type } from "./hooks/useTypes";
import useHabitats, { Habitat } from "./hooks/useHabitats";

export interface PokemonQuery {
  type: Type | null;
  habitat: Habitat | null;
  sortOrder: SortOrder;
  searchText: string;
}

function App() {
  const [pokemonQuery, setPokemonQuery] = useState<PokemonQuery>({} as PokemonQuery);
  const { data: types, isLoading: typesLoading, error: typesErr } = useTypes();
  const { habitats, habitatErr } = useHabitats();

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
            types={types}
            error={typesErr}
            isLoading={typesLoading}
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
            habitats={habitats}
            error={habitatErr}
          />
          <SortSelector
            sortOrder={pokemonQuery.sortOrder}
            onSelectSortOrder={(sortOrder) => setPokemonQuery({ ...pokemonQuery, sortOrder })}
          />
        </HStack>
        <PokemonGrid types={types} pokemonQuery={pokemonQuery} habitats={habitats} />
      </GridItem>
    </Grid>
  );
}

export default App;
