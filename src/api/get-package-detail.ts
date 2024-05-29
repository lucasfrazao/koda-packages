import { api } from '@/lib/axios'

interface Links {
  npm: string
  homepage: string
  repository: string
  bugs: string
}

interface Package {
  name: string
  version: string
  description: string
  keywords: string[]
  homepage: string
  links: Links
  repository: {
    url: string
  }
}

export interface GetPackageDetailResponse {
  name: string
  license: string
  description: string
  keywords: string[]
  version: string
  author: {
    name: string
  }
  // DETAILS
  ['dist-tags']: {
    latest: string
    next: string
  }
  versions: Record<string, Package>
}

export async function getPackageDetail(name: string) {
  const response = await api.get<GetPackageDetailResponse>(`/${name}`)

  return response.data
}
