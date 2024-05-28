import { getPackages } from '@/api/get-packages'
import { useQuery } from '@tanstack/react-query'
import { Navigate, useLocation } from 'react-router-dom'

import { ResumePackage } from './resume-package'

export function Package() {
  const location = useLocation()

  const { data: resultPackage } = useQuery({
    queryKey: ['detail-package', location.state],
    queryFn: () => getPackages({ text: location.state }),
  })

  const currentPackage = resultPackage?.objects[0]

  if (!currentPackage) {
    return <Navigate to="/" />
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <ResumePackage packageObj={currentPackage} />
    </div>
  )
}
