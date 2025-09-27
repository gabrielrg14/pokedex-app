import { pokemonMocks, typeMocks } from "../../test/mocks"

import { PokedexService } from "."

describe("PokedexService", () => {
  describe("getPokemonByQuery", () => {
    it("should not return duplicate abilities in pokemon data", async () => {
      const pokemonData = await PokedexService.getPokemonByQuery(pokemonMocks.venusaur.name)
      expect(pokemonData).not.toStrictEqual({
        ...pokemonMocks.venusaur,
        abilities: [...pokemonMocks.venusaur.abilities, pokemonMocks.venusaur.abilities[0]],
      })
    })

    it.each(pokemonMocks.arrayList)("should return %s data", async (name, pokemon) => {
      const pokemonData = await PokedexService.getPokemonByQuery(name as string)
      expect(pokemonData).toStrictEqual(pokemon)
    })
  })

  describe("getPokemonsWithPagination", () => {
    it("should return the pokemon list", async () => {
      const pokemonList = await PokedexService.getPokemonsWithPagination(12)
      expect(pokemonList).toStrictEqual(pokemonMocks.list)
    })

    it.each(pokemonMocks.arrayList)("should return %s data in the list", async (name, pokemon) => {
      const pokemonList = await PokedexService.getPokemonsWithPagination(12)
      expect(pokemonList).toContainEqual(pokemon)
    })
  })

  describe("getAllTypes", () => {
    it("should return a list of 19 types, including type all", async () => {
      const types = await PokedexService.getAllTypes()

      expect(types).toHaveLength(19)
      expect(types).toContainEqual(typeMocks.typeAll)
      expect(types).toStrictEqual([typeMocks.typeAll, ...typeMocks.list])
    })

    it.each(typeMocks.arrayList)("should contain the type %s in the list", async (name, type) => {
      const types = await PokedexService.getAllTypes()
      expect(types).toContainEqual(type)
    })
  })

  describe("getPokemonsByType", () => {
    it.each(typeMocks.pokemonsByTypeArray)(
      "should return a list of pokemons from type %s",
      async (name, pokemon) => {
        const pokemonList = await PokedexService.getPokemonsByType(name as string)
        expect(pokemonList).toContainEqual(pokemon)
      }
    )
  })
})
