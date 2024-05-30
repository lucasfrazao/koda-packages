import { createAxiosApiInstance } from '@/lib/axios'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

const BUNDLEPHOBIA_API = import.meta.env.VITE_BUNDLEPHOBIA_API
const bundlephobiaApi = createAxiosApiInstance(BUNDLEPHOBIA_API)

export async function callBundlephobiaApi<T>(config: AxiosRequestConfig) {
  try {
    const response: AxiosResponse<T> = await bundlephobiaApi.request<T>(config)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
