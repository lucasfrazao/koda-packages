import { callBundlephobiaApi } from './config'

interface GetPackageHistoryResponse {
  [key: string]: {
    dependencySizes: {
      approximateSize: number
      name: string
    }[]
    size: number
  }
}

interface GetPackageHistoryParams {
  packageName: string
}

export async function getPackageHistory({
  packageName,
}: GetPackageHistoryParams) {
  return callBundlephobiaApi<GetPackageHistoryResponse>({
    url: '/package-history',
    method: 'GET',
    params: {
      limit: 5,
      package: packageName,
    },
  })
}
