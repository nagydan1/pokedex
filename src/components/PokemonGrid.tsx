import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Pokemon {
  name: string;
  url: string;
}

interface FetchPokemonResponse {
  count: number;
  results: Pokemon[];
}

const PokemonGrid = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchPokemonResponse>("/pokemon ")
      .then((res) => setPokemons(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
};

export default PokemonGrid;
