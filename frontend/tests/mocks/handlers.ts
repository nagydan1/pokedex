import { http, HttpResponse } from "msw";

export const handlers = [
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
];
