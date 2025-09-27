import { http, HttpResponse } from "msw"
import { API_URL } from "../../common"
import { pokemonMocks, typeMocks } from "../mocks"

export const handlers = [
  http.get(`${API_URL}/pokemon`, () => {
    return HttpResponse.json({ results: pokemonMocks.list }, { status: 200 })
  }),

  http.get(`${API_URL}/pokemon/venusaur`, () => {
    return HttpResponse.json(pokemonMocks.venusaur, { status: 200 })
  }),

  http.get(`${API_URL}/pokemon/charizard`, () => {
    return HttpResponse.json(pokemonMocks.charizard, { status: 200 })
  }),

  http.get(`${API_URL}/pokemon/blastoise`, () => {
    return HttpResponse.json(pokemonMocks.blastoise, { status: 200 })
  }),

  http.get(`${API_URL}/type`, () => {
    return HttpResponse.json({ results: typeMocks.list }, { status: 200 })
  }),

  http.get(`${API_URL}/type/grass`, () => {
    return HttpResponse.json({ pokemon: [{ pokemon: pokemonMocks.venusaur }] }, { status: 200 })
  }),

  http.get(`${API_URL}/type/fire`, () => {
    return HttpResponse.json({ pokemon: [{ pokemon: pokemonMocks.charizard }] }, { status: 200 })
  }),

  http.get(`${API_URL}/type/water`, () => {
    return HttpResponse.json({ pokemon: [{ pokemon: pokemonMocks.blastoise }] }, { status: 200 })
  }),
]
