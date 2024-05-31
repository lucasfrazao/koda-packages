import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'

import { getBundlePackage } from '@/api/bundlephobia/get-bundle-package'
import { getPackageInfo } from '@/api/npms/get-package-info'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { CardBundle } from './card-bundle'
import { CardGeneralInfo } from './card-general-info'
import { ResumePackage } from './resume-package'
import { BundleInformationSkeleton } from './skeleton/bundle-information-skeleton'
import { ContributorsSkeleton } from './skeleton/contributors-skeleton'
import { GeneralInfoSkeleton } from './skeleton/general-info-skeleton'
import { ResumePackageSkeleton } from './skeleton/resume-package-skeleton'

export function Package() {
  const location = useLocation()
  const packageName = location.state

  const { data: dataPackage } = useQuery({
    queryKey: ['package-info', packageName],
    queryFn: () => getPackageInfo(packageName),
    retry: 2,
    staleTime: Infinity,
  })

  const { data: dataBundlePackage } = useQuery({
    queryKey: ['package-bundle', packageName],
    queryFn: () => getBundlePackage({ packageName }),
    retry: 2,
  })

  return (
    <div className="flex w-full flex-col items-center">
      {!dataPackage ? (
        <ResumePackageSkeleton />
      ) : (
        <ResumePackage dataPackage={dataPackage} />
      )}

      <div className="flex w-full flex-col gap-8 py-8 sm:flex sm:flex-row">
        {!dataPackage ? (
          <GeneralInfoSkeleton />
        ) : (
          <CardGeneralInfo dataPackage={dataPackage} />
        )}

        {!dataPackage || !dataBundlePackage ? (
          <BundleInformationSkeleton />
        ) : (
          <CardBundle
            dataPackage={dataPackage}
            dataBundle={dataBundlePackage}
          />
        )}
      </div>

      {!dataPackage ? (
        <ContributorsSkeleton />
      ) : (
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
      )}
    </div>
  )
}
