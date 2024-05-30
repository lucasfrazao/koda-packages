import { callBundlephobiaApi } from './config'

export interface GetBundlePackageResponse {
  gzip: number
  size: number
}

interface GetBundlePackageParams {
  packageName: string
}

export async function getBundlePackage({
  packageName,
}: GetBundlePackageParams) {
  return callBundlephobiaApi<GetBundlePackageResponse>({
    url: '/size',
    method: 'GET',
    params: {
      package: packageName,
    },
  })
}
