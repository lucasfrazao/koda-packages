import { FolderGit2, Link, Package, Scale } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import type { GetPackageInfoResponse } from '@/api/node-registry/get-package-info'

interface CardGeneralInfoProps {
  dataPackage?: GetPackageInfoResponse
}

export function CardGeneralInfo({ dataPackage }: CardGeneralInfoProps) {
  const handleRedirectToRepository = () => {
    const url = dataPackage?.repository?.url?.slice(4).toString()
    window.open(url)
  }

  const handleRedirectToHomepage = () => {
    window.open(dataPackage?.homepage)
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex w-full flex-row items-center justify-between">
        <span className="text-lg font-semibold">General Information</span>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <FolderGit2 size={20} />
            <span>Repository</span>
          </div>
          <span
            className="text-sm italic hover:text-slate-600"
            role="button"
            onClick={handleRedirectToRepository}
          >
            {dataPackage?.repository?.url}
          </span>
        </div>

        <Separator />

        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <Link size={20} />
            <span>Homepage</span>
          </div>
          <span
            className="text-sm italic hover:text-slate-600"
            role="button"
            onClick={handleRedirectToHomepage}
          >
            {dataPackage?.homepage}
          </span>
        </div>

        <Separator />

        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <Package size={20} />
            <span>Latest Version</span>
          </div>
          <span className="text-sm font-semibold">{dataPackage?.version}</span>
        </div>

        <Separator />

        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <Scale size={20} />
            <span>License</span>
          </div>
          <span className="text-sm font-semibold">{dataPackage?.license}</span>
        </div>
      </CardContent>
    </Card>
  )
}
