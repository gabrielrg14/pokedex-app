import { Api } from "../../providers"
import { IPokemon, IType } from "../../@types"

const getPokemonByQuery = async (query: string): Promise<IPokemon> => {
  const { data: pokemon } = await Api.get<IPokemon>(`/pokemon/${query}`)

  // Removes abilities that have the same name
  const abilityNames = pokemon.abilities.map((item) => item.ability.name)
  const abilitiesFiltered = abilityNames.filter(
    (item, index) => abilityNames.indexOf(item) === index
  )
  pokemon.abilities = pokemon.abilities.filter(
    (item, index) => abilitiesFiltered.indexOf(item.ability.name) === index
  )

  return pokemon
}

const getPokemonsWithPagination = async (limit: number, offset?: number): Promise<IPokemon[]> => {
  const { data } = await Api.get(`/pokemon?limit=${limit}${offset ? `&offset=${offset}` : ""}`)
  return data.results
}

const getAllTypes = async (): Promise<IType[]> => {
  const { data } = await Api.get("/type")

  data.results.unshift({ name: "all", url: "" }) // Adds type "all" to be one of the filterable options

  // Remove types that do not have pokémon coming from the API
  const typesToRemove = ["unknown", "stellar"]
  const typesFiltered = data.results.filter((type: IType) => !typesToRemove.includes(type.name))

  return typesFiltered
}

const getPokemonsByType = async (type: string): Promise<IPokemon[]> => {
  const { data } = await Api.get(`/type/${type}`)
  const pokemonsByType = data.pokemon.map((item: { pokemon: IPokemon }) => item.pokemon)
  return pokemonsByType
}

export const PokedexService = {
  getPokemonByQuery,
  getPokemonsWithPagination,
  getAllTypes,
  getPokemonsByType,
}
