import { callNodeRegistryApi } from './config'

interface DependencyResponse {
  [key: string]: string
}

export interface GetPackageInfoResponse {
  name: string
  description: string
  version: string
  keywords: string[]
  license: string
  homepage: string
  maintainers: {
    name: string
    email: string
  }[]
  author: {
    name: string
    email: string
  }
  repository: {
    url: string
    type: string
    directory: string
  }
  dependencies: DependencyResponse
  devDependencies: DependencyResponse
  peerDependencies: DependencyResponse
}

export async function getPackageInfo(name: string, version: string) {
  return callNodeRegistryApi<GetPackageInfoResponse>({
    url: `/${name}/${version}`,
    method: 'GET',
  })
}
