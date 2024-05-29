import { callNPMSApi } from './config'
import { GetPackageInfoResponse } from './types'

export async function getPackageInfo(name: string) {
  return callNPMSApi<GetPackageInfoResponse>({
    url: `/package/${name}`,
    method: 'GET',
  })
}
