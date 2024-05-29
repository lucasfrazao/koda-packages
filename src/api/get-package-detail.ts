import { api } from '@/lib/axios'

export interface GetPackageDetailResponse {
  name: string
  license: string
  description: string
  homepage: string
  keywords: string[]
  version: string
  author: {
    name: string
  }
  repository: {
    url: string
  }
}

export async function getPackageDetail(name: string, version: string) {
  const response = await api.get<GetPackageDetailResponse>(
    `/${name}/${version}`,
  )

  return response.data
}
