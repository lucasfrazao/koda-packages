import { FolderGit2, Link, Microscope, Package } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { GetPackageDetailResponse } from '@/api/get-package-detail'

interface CardGeneralInfoProps {
  detailPackage: GetPackageDetailResponse
}

export function CardGeneralInfo({ detailPackage }: CardGeneralInfoProps) {
  const repositoryURLFormated = (url: string) => {
    return url.slice(4).toString()
  }

  const handleRedirectToRepository = () => {
    const url = repositoryURLFormated(detailPackage.repository.url)
    window.open(url)
  }

  const handleRedirectToHomepage = () => {
    window.open(detailPackage.homepage)
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex w-full flex-row items-center justify-between">
        <span className="text-lg font-semibold">General Information</span>

        <Tooltip>
          <TooltipTrigger>
            <span className="flex gap-2 text-sm text-muted-foreground hover:cursor-help">
              Stats for nerds
              <Microscope />
            </span>
          </TooltipTrigger>
          <TooltipContent>Coming soon</TooltipContent>
        </Tooltip>
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
            {repositoryURLFormated(detailPackage.repository.url)}
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
            {detailPackage.homepage}
          </span>
        </div>

        <Separator />

        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <Package size={20} />
            <span>Latest Version</span>
          </div>
          <span className="text-sm font-semibold" role="button">
            {detailPackage.version}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
