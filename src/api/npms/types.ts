export interface PackageLinks {
  bugs: string
  homepage: string
  npm: string
  repository: string
}

export interface PackageMetadata {
  author: {
    name: string
  }
  publisher: {
    email: string
    username: string
  }
  description: string
  keywords: string[]
  version: string
  license: string
  links: PackageLinks
}

export interface GetPackageInfoResponse {
  analyzedAt: string
  collected: {
    metadata: PackageMetadata
  }
}
