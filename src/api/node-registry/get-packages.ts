import { callNodeRegistryApi } from './config'

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
  text?: string
}

export async function getPackages({ text }: GetPackagesBody) {
  if (!text) return

  return callNodeRegistryApi<GetPackagesResponse>({
    url: '/-/v1/search',
    method: 'GET',
    params: {
      text,
      popularity: 0.6,
    },
  })
}
