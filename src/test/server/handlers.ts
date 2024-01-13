import { http, HttpResponse } from "msw"
import { baseURL } from "../../providers"
import { pokemonMocks, typeMocks } from "../mocks"

export const handlers = [
  http.get(`${baseURL}/pokemon/:query`, () => {
    return HttpResponse.json(
      pokemonMocks.venusaur,
      { status: 200 }
    )
  }),

  http.get(`${baseURL}/pokemon`, () => {
    return HttpResponse.json(
      { results: pokemonMocks.list },
      { status: 200 }
    )
  }),

  http.get(`${baseURL}/type`, () => {
    return HttpResponse.json(
      { results: typeMocks.list },
      { status: 200 }
    )
  }),

  http.get(`${baseURL}/type/:type`, () => {
    return HttpResponse.json(
      { pokemon: pokemonMocks.list.map(item => ({ pokemon: item })) },
      { status: 200 }
    )
  })
]
