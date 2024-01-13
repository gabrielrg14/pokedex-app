import { pokemonMocks, typeMocks } from "../../test/mocks"

import { PokedexService } from "."

describe("PokedexService", () => {
  describe("getPokemonByQuery", () => {
    it("should return the data of the pokemon venusaur with all its properties", async () => {
      const venusaur = await PokedexService.getPokemonByQuery("venusaur")

      expect(venusaur).toHaveProperty("id", 3)
      expect(venusaur).toHaveProperty("name", "venusaur")
      expect(venusaur).toHaveProperty("url", "https://pokeapi.co/api/v2/pokemon/3/")
      expect(venusaur).toStrictEqual(pokemonMocks.venusaur)
    })
  })

  describe("getPokemonsWithPagination", () => {
    it("should return a list of pokemon with venusaur, charizard and blastoise", async () => {
      const pokemonList = await PokedexService.getPokemonsWithPagination(12)

      expect(pokemonList).toContainEqual(pokemonMocks.venusaur)
      expect(pokemonList).toContainEqual(pokemonMocks.charizard)
      expect(pokemonList).toContainEqual(pokemonMocks.blastoise)
      expect(pokemonList).toStrictEqual(pokemonMocks.list)
    })
  })

  describe("getAllTypes", () => {
    it("should return all types of pokemon including type all, totaling 19", async () => {
      const types = await PokedexService.getAllTypes()

      expect(types).toHaveLength(19)
      expect(types).toContainEqual(typeMocks.all)
      expect(types).toStrictEqual([typeMocks.all, ...typeMocks.list])
    })
  })

  describe("getPokemonsByType", () => {
    it("should return a list of pokemon with venusaur, charizard and blastoise", async () => {
      const pokemonList = await PokedexService.getPokemonsByType("normal")

      expect(pokemonList).toContainEqual(pokemonMocks.venusaur)
      expect(pokemonList).toContainEqual(pokemonMocks.charizard)
      expect(pokemonList).toContainEqual(pokemonMocks.blastoise)
      expect(pokemonList).toStrictEqual(pokemonMocks.list)
    })
  })
})
