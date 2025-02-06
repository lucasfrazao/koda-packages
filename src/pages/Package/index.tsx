import { useQuery } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'

import { getBundlePackage } from '@/api/bundlephobia/get-bundle-package'
import { getPackageInfo } from '@/api/node-registry/get-package-info'
import { AvatarMaintainer } from '@/components/avatar-maintainer'

import { CardBundle } from './components/card-bundle'
import { CardGeneralInfo } from './components/card-general-info'
import { ResumePackage } from './components/resume-package'

import { BundleInformationSkeleton } from './skeleton/bundle-information-skeleton'
import { GeneralInfoSkeleton } from './skeleton/general-info-skeleton'
import { MaintainersSkeleton } from './skeleton/maintainers-skeleton'
import { ResumePackageSkeleton } from './skeleton/resume-package-skeleton'

export function Package() {
  const location = useLocation()

  const version = location?.state?.version
  const packageName = location?.state?.packageName

  const packageInfoQuery = useQuery({
    enabled: !!packageName,
    queryKey: ['get-package-info', packageName],
    queryFn: () => getPackageInfo(packageName, version),
  })

  const packageBundleQuery = useQuery({
    enabled: !!packageName,
    queryKey: ['get-package-bundle', packageName],
    queryFn: () => getBundlePackage({ packageName }),
  })

  return (
    <div className="flex w-full flex-col items-center">
      {packageInfoQuery.isFetching ? (
        <ResumePackageSkeleton />
      ) : (
        <ResumePackage dataPackage={packageInfoQuery?.data!} />
      )}

      <div className="flex w-full flex-col gap-8 py-8 sm:flex sm:flex-row">
        {packageInfoQuery.isFetching || packageBundleQuery.isFetching ? (
          <BundleInformationSkeleton />
        ) : (
          <CardBundle
            dataPackage={packageInfoQuery?.data!}
            dataBundle={packageBundleQuery?.data!}
          />
        )}

        {packageInfoQuery.isFetching ? (
          <GeneralInfoSkeleton />
        ) : (
          <CardGeneralInfo dataPackage={packageInfoQuery?.data!} />
        )}
      </div>

      {packageInfoQuery.isFetching ? (
        <MaintainersSkeleton />
      ) : (
        <div className="w-full">
          <span className="w-full text-left text-xl">Maintainers</span>
          <div className="flex flex-row flex-wrap gap-2 py-4">
            {packageInfoQuery?.data?.maintainers.map((maintainer, index) => {
              return <AvatarMaintainer key={index} name={maintainer.name} />
            })}
          </div>
        </div>
      )}
    </div>
  )
}
