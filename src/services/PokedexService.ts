import { Api } from "../providers"

const getPokemonByQuery = (query: string) => Api.get(`/pokemon/${query}`)

const getPokemonsWithPagination = (limit: number, offset?: number) =>
  Api.get(`/pokemon?limit=${limit}${offset ? `&offset=${offset}` : ""}`)

const getAllTypes = () => Api.get("/type")

const getPokemonsByType = (type: string) => Api.get(`/type/${type}`)

export const PokedexService = {
  getPokemonByQuery,
  getPokemonsWithPagination,
  getAllTypes,
  getPokemonsByType,
}
