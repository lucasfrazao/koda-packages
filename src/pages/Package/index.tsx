import { getPackageDetail } from '@/api/get-package-detail'
import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'

import { CardGeneralInfo } from './card-general-info'
import { ResumePackage } from './resume-package'

export function Package() {
  const location = useLocation()

  const { data: resultPackage } = useQuery({
    queryKey: ['package-detail', location.state],
    queryFn: () => getPackageDetail(location.state),
    retry: 2,
  })

  if (!resultPackage) return

  // console.log(resultPackage)

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <ResumePackage resultPackage={resultPackage} />

      <div className="flex w-full p-4">
        <CardGeneralInfo resultPackage={resultPackage} />
      </div>
    </div>
  )
}
