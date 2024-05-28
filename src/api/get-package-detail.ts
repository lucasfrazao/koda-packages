import { api } from '@/lib/axios'

export interface GetPackageDetailResponse {
  name: string
  license: string
  description: string
  keywords: string[]
  author: {
    name: string
  }
  ['dist-tags']: {
    latest: string
    next: string
  }
}

export async function getPackageDetail(name: string) {
  const response = await api.get<GetPackageDetailResponse>(`/${name}`)

  return response.data
}
