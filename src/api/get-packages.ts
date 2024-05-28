import { api } from '@/lib/axios'

export type Package = {
  name: string
  version: string
  description: string
  date: string
  author: {
    name: string
  }
  publisher: {
    name: string
    email: string
    username: string
  }
  keywords: string[]
}

export interface PackageDetails {
  package: Package
}

interface GetPackagesResponse {
  objects: PackageDetails[]
  total: number
}

export interface GetPackagesBody {
  text: string | null
}

export async function getPackages({ text }: GetPackagesBody) {
  const response = await api.get<GetPackagesResponse>('/-/v1/search', {
    params: {
      text,
      popularity: 0.8,
    },
  })

  return response.data
}
