import { createAxiosApiInstance } from '@/lib/axios'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

const NODE_REGISTRY_API = import.meta.env.VITE_NODE_REGISTRY_API
const apiNodeRegistry = createAxiosApiInstance(NODE_REGISTRY_API)

export async function callNodeRegistryApi<T>(config: AxiosRequestConfig) {
  try {
    const response: AxiosResponse<T> = await apiNodeRegistry.request<T>(config)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
