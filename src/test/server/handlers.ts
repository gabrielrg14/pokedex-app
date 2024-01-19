import { http, HttpResponse } from "msw"
import { API_URL } from "../../common"
import { pokemonMocks, typeMocks } from "../mocks"

export const handlers = [
  http.get(`${API_URL}/pokemon/:query`, () => {
    return HttpResponse.json(
      pokemonMocks.venusaur,
      { status: 200 }
    )
  }),

  http.get(`${API_URL}/pokemon`, () => {
    return HttpResponse.json(
      { results: pokemonMocks.list },
      { status: 200 }
    )
  }),

  http.get(`${API_URL}/type`, () => {
    return HttpResponse.json(
      { results: typeMocks.list },
      { status: 200 }
    )
  }),

  http.get(`${API_URL}/type/:type`, () => {
    return HttpResponse.json(
      { pokemon: pokemonMocks.list.map(item => ({ pokemon: item })) },
      { status: 200 }
    )
  })
]
