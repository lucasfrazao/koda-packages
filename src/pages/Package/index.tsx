import { getPackageInfo } from '@/api/npms/get-package-info'
import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'

import { CardBundle } from './card-bundle'
import { CardGeneralInfo } from './card-general-info'
import { ResumePackage } from './resume-package'

export function Package() {
  const location = useLocation()
  const packageName = location.state

  const { data: dataPackage, isFetching } = useQuery({
    queryKey: ['package-info', packageName],
    queryFn: () => getPackageInfo(packageName),
    retry: 2,
  })

  if (isFetching || !dataPackage) return

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <ResumePackage dataPackage={dataPackage} />

      <div className="flex w-full flex-col gap-8 py-8 sm:flex sm:flex-row">
        <CardGeneralInfo dataPackage={dataPackage} />
        <CardBundle />
      </div>
    </div>
  )
}
