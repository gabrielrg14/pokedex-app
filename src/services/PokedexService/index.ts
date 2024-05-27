import { Api } from "../../providers"
import { Pokemon, Type } from "../../@types"

const getPokemonByQuery = async (query: string): Promise<Pokemon> => {
  const { data } = await Api.get(`/pokemon/${query}`)
  return data
}

const getPokemonsWithPagination = async (limit: number, offset?: number): Promise<Pokemon[]> => {
  const { data } = await Api.get(`/pokemon?limit=${limit}${offset ? `&offset=${offset}` : ""}`)
  return data.results
}

const getAllTypes = async (): Promise<Type[]> => {
  const { data } = await Api.get("/type")

  data.results.unshift({ name: "all", url: "" }) // Adds type "all" to be one of the filterable options

  // Remove types that do not have pokémon coming from the API
  const typesToRemove = ["unknown", "shadow"]
  const typesFiltered = data.results.filter((type: Type) => !typesToRemove.includes(type.name))

  return typesFiltered
}

const getPokemonsByType = async (type: string): Promise<Pokemon[]> => {
  const { data } = await Api.get(`/type/${type}`)
  const pokemonsByType = data.pokemon.map((item: { pokemon: Pokemon }) => item.pokemon)
  return pokemonsByType
}

export const PokedexService = {
  getPokemonByQuery,
  getPokemonsWithPagination,
  getAllTypes,
  getPokemonsByType,
}
