import axios from 'axios'

export const http = axios.create({
    baseURL: import.meta.env.API_ENDPOINT,
    headers: {
      "Content-type": "application/json"
    }
})