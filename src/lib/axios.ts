import axios, { AxiosInstance } from 'axios'

export function createAxiosApiInstance(baseURL: string): AxiosInstance {
  const api = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return api
}
