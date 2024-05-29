import { getPackageDetail } from '@/api/get-package-detail'
import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'

import { CardBundle } from './card-bundle'
import { CardGeneralInfo } from './card-general-info'
import { ResumePackage } from './resume-package'

export function Package() {
  const location = useLocation()

  const { packageName, version } = location.state
  const { data: detailPackage, isFetching } = useQuery({
    queryKey: ['package-detail', packageName, version],
    queryFn: () => getPackageDetail(packageName, version),
    retry: 2,
  })

  if (isFetching || !detailPackage) return

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <ResumePackage detailPackage={detailPackage} />

      <div className="flex w-full flex-col gap-8 py-8 sm:flex sm:flex-row">
        <CardGeneralInfo detailPackage={detailPackage} />
        <CardBundle />
      </div>
    </div>
  )
}
