import { api } from '@/lib/axios'

interface PackageDetails {
  package: {
    name: string
    version: string
    description: string
    publisher: {
      name: string
      email: string
      username: string
    }
    author: {
      name: string
    }
  }
}

interface GetPackagesResponse {
  objects: PackageDetails[]
  total: number
}

export interface GetPackagesBody {
  text: string | null
}

export async function getPackages({ text }: GetPackagesBody) {
  const response = await api.get<GetPackagesResponse>('/search', {
    params: {
      text,
      popularity: 0.6,
    },
  })

  return response.data
}
