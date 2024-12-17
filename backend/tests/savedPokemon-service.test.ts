import { Context } from 'koa';
import * as db from 'zapatos/db';
import savedPokemonService from '../src/api/savedPokemon/savedPokemon-service';

// Mocking necessary db methods
jest.mock('zapatos/db', () => ({
  select: jest.fn(),
  selectOne: jest.fn(),
  insert: jest.fn(),
  update: jest.fn(),
  all: 'all',
}));

// Mocking pg client and pool to prevent real DB connections during tests
jest.mock('pg', () => {
  const mockClient = {
    query: jest.fn(),
    connect: jest.fn(),
    end: jest.fn(),
  };

  const mockPool = {
    connect: jest.fn().mockResolvedValue(mockClient),
  };

  return {
    Client: jest.fn(() => mockClient),
    Pool: jest.fn(() => mockPool),
  };
});

describe('savedPokemonService', () => {
  describe('getPokemon', () => {
    it('should return all saved pokemons', async () => {
      const mockPokemons = [
        { id: 1, name: 'Pikachu', likes: 10 },
        { id: 2, name: 'Charmander', likes: 5 },
      ];

      // Mock db.select to return mockPokemons
      (db.select as jest.Mock).mockReturnValue({
        run: jest.fn().mockResolvedValue(mockPokemons),
      });

      const result = await savedPokemonService.getPokemon();

      expect(result).toEqual(mockPokemons);
      expect(db.select).toHaveBeenCalledWith('savedpokemon', 'all');
    });
  });

  describe('putPokemon', () => {
    let ctx: Context;

    beforeEach(() => {
      ctx = {
        request: {
          body: {
            id: 1,
            name: "Pikachu",
            likes: 10,
          },
        },
      } as Context;
    });
    
    

    it('should update an existing pokemon if it already exists', async () => {
      const mockExistingPokemon = { id: 1, name: 'Pikachu', likes: 10 };
      const mockUpdatedPokemon = { id: 1, name: 'Pikachu', likes: 20 };

      // Mock db.selectOne to return an existing pokemon and chain `run`
      (db.selectOne as jest.Mock).mockReturnValue({
        run: jest.fn().mockResolvedValue(mockExistingPokemon),
      });

      // Mock db.update to return the updated pokemon
      (db.update as jest.Mock).mockReturnValue({
        run: jest.fn().mockResolvedValue([mockUpdatedPokemon]),
      });

      const result = await savedPokemonService.putPokemon(ctx as Context);

      expect(result).toEqual(mockUpdatedPokemon);
      expect(db.selectOne).toHaveBeenCalledWith('savedpokemon', { id: 1 });
      expect(db.update).toHaveBeenCalledWith('savedpokemon', ctx.request!.body, { id: 1 });
    });

    it('should insert a new pokemon if it does not exist', async () => {
      const mockNewPokemon = { id: 1, name: 'Pikachu', likes: 10 };

      // Mock db.selectOne to return null (no existing pokemon) and chain `run`
      (db.selectOne as jest.Mock).mockReturnValue({
        run: jest.fn().mockResolvedValue(null),
      });

      // Mock db.insert to return the inserted pokemon
      (db.insert as jest.Mock).mockReturnValue({
        run: jest.fn().mockResolvedValue(mockNewPokemon),
      });

      const result = await savedPokemonService.putPokemon(ctx as Context);

      expect(result).toEqual(mockNewPokemon);
      expect(db.selectOne).toHaveBeenCalledWith('savedpokemon', { id: 1 });
      expect(db.insert).toHaveBeenCalledWith('savedpokemon', ctx.request!.body);
    });


    // Tests for Validation

    it("should throw an error if 'id' is not a positive number", async () => {
      ctx.request.body = { id: -1, name: "Pikachu", likes: 10 };

      await expect(savedPokemonService.putPokemon(ctx as Context))
        .rejects
        .toThrow("Invalid 'id'. It must be a positive number.");
    });

    it("should throw an error if 'name' is not a non-empty string", async () => {
      ctx.request.body = { id: 1, name: "", likes: 10 };

      await expect(savedPokemonService.putPokemon(ctx as Context))
        .rejects
        .toThrow("Invalid 'name'. It must be a non-empty string.");
    });

    it("should throw an error if 'likes' is a negative number", async () => {
      ctx.request.body = { id: 1, name: "Pikachu", likes: -5 };

      await expect(savedPokemonService.putPokemon(ctx as Context))
        .rejects
        .toThrow("Invalid 'likes'. It must be a non-negative number.");
    });

    it("should throw an error if the request body is missing", async () => {
      ctx.request.body = null;

      await expect(savedPokemonService.putPokemon(ctx as Context))
        .rejects
        .toThrow("Request body is missing.");
    });
  });
});
