import { getPackageInfo } from '@/api/npms/get-package-info'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
    <div className="flex w-full flex-col items-center">
      <ResumePackage dataPackage={dataPackage} />

      <div className="flex w-full flex-col gap-8 py-8 sm:flex sm:flex-row">
        <CardGeneralInfo dataPackage={dataPackage} />
        <CardBundle />
      </div>

      <div className="w-full">
        <span className="w-full text-left text-xl">Contributors</span>
        <div className="flex flex-row flex-wrap gap-2 py-4">
          {dataPackage?.collected?.github?.contributors.map(
            (contributor, index) => {
              return (
                <Avatar key={index}>
                  <AvatarImage
                    src={`https://github.com/${contributor.username}.png`}
                  />
                  <AvatarFallback>{contributor.username}</AvatarFallback>
                </Avatar>
              )
            },
          )}
        </div>
      </div>
    </div>
  )
}
