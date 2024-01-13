import { server } from "."

beforeAll(() => server.listen())

beforeEach(() => server.resetHandlers())

afterAll(() => server.close())
