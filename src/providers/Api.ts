import axios from "axios"

export const baseURL = "https://pokeapi.co/api/v2"

export const Api = axios.create({ baseURL })
