import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://fake-api-tau.vercel.app/api/efood'
})
