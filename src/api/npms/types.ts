export interface PackageLinks {
  bugs: string
  homepage: string
  npm: string
  repository: string
}

export interface PackageGithubData {
  contributors: {
    username: string
    commitsCount: string
  }[]
}

export interface DependencyReponse {
  [key: string]: string
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
  dependencies?: DependencyReponse
  devDependencies?: DependencyReponse
  peerDependencies?: DependencyReponse
}

export interface GetPackageInfoResponse {
  analyzedAt: string
  collected: {
    metadata: PackageMetadata
    github: PackageGithubData
  }
}
