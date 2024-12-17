import { http, HttpResponse } from "msw";
import { habitatDetails, habitatList } from "./mockHabitatData";
import { pokemonDetails, pokemonList } from "./mockPokemonData";
import { savedPokemonList } from "./mockSavedPokemons";

export const backendURL: string =
  import.meta.env.REACT_APP_BACKEND_URL || "http://localhost:7654/api";

export const handlers = [
  http.get("https://pokeapi.co/api/v2/pokemon", () => {
    return HttpResponse.json(pokemonList);
  }),

  http.get("https://pokeapi.co/api/v2/pokemon/:idOrName", ({ params }) => {
    const idOrName = params.idOrName as string;
    const pokemon = pokemonDetails.find((p) =>
      isNaN(parseInt(idOrName))
        ? p.name === idOrName
        : p.id === parseInt(idOrName)
    );
    return HttpResponse.json(pokemon);
  }),

  http.get("https://pokeapi.co/api/v2/pokemon-habitat", () => {
    return HttpResponse.json(habitatList);
  }),

  http.get("https://pokeapi.co/api/v2/pokemon-habitat/:id", ({ params }) => {
    const id = params.id as string;
    const habitat = habitatDetails.find((h) => h.id === parseInt(id));
    return HttpResponse.json(habitat);
  }),

  http.get("https://pokeapi.co/api/v2/type", () => {
    return HttpResponse.json({
      count: 2,
      next: null,
      results: [
        { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
        { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
      ],
    });
  }),

  http.get("https://pokeapi.co/api/v2/type/:id", ({ params }) => {
    const { id } = params;
    return HttpResponse.json({
      name: id === "10" ? "fire" : "water",
      sprites: {
        "generation-ix": {
          "scarlet-violet": {
            name_icon:
              id === "10" ? `https://r.g.com/10.png` : `https://r.g.com/11.png`,
          },
        },
      },
    });
  }),

  http.get(backendURL + "/savedpokemon", () => {
    return HttpResponse.json(savedPokemonList);
  }),

  http.put(backendURL + "/savedpokemon", () => {
    return HttpResponse.json({
      id: 144,
      name: "articuno",
      likes: 2,
    });
  }),
];
