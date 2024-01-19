import axios from "axios"
import { API_URL } from "../common"

export const Api = axios.create({ baseURL: API_URL })
