import { Context } from "koa";
import savedPokemonController from "../api/api/savedPokemon/savedPokemon-controller";
import savedPokemonService from "../api/api/savedPokemon/savedPokemon-service";

jest.mock("../api/api/savedPokemon/savedPokemon-service", () => ({
  getPokemon: jest.fn(),
  savePokemon: jest.fn(),
  putPokemon: jest.fn(),
}));

describe("savedPokemonController", () => {
  let ctx: Context;

  beforeEach(() => {
    ctx = {
      body: undefined,
      request: {},
    } as Context;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("get method", () => {
    it("should set ctx.body with the list of saved Pokémon", async () => {
      const mockData = [{ id: 1, name: "pikachu" }];
      (savedPokemonService.getPokemon as jest.Mock).mockResolvedValueOnce(
        mockData
      );

      await savedPokemonController.get(ctx);

      expect(savedPokemonService.getPokemon).toHaveBeenCalledTimes(1);
      expect(ctx.body).toEqual(mockData);
    });
  });

  describe("put method", () => {
    it("should set ctx.body with the updated Pokémon", async () => {
      const mockRequestData = { id: 3, name: "charmander", likes: 5 };
      ctx.request.body = mockRequestData;
      const mockUpdatedData = { id: 3, name: "charmander", likes: 10 };

      (savedPokemonService.putPokemon as jest.Mock).mockResolvedValueOnce(
        mockUpdatedData
      );

      await savedPokemonController.put(ctx);

      expect(savedPokemonService.putPokemon).toHaveBeenCalledTimes(1);
      expect(savedPokemonService.putPokemon).toHaveBeenCalledWith(ctx);
      expect(ctx.body).toEqual(mockUpdatedData);
    });
  });
});
