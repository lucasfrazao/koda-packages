import { createAxiosApiInstance } from '@/lib/axios'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

const NPMS_API_URL = import.meta.env.VITE_NPMS_API_URL
const apiNPMS = createAxiosApiInstance(NPMS_API_URL)

export async function callNPMSApi<T>(config: AxiosRequestConfig) {
  try {
    const response: AxiosResponse<T> = await apiNPMS.request<T>(config)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
