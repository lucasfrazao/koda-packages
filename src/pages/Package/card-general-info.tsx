import { FolderGit2, Link, Microscope, Package, Scale } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import type { GetPackageInfoResponse } from '@/api/npms/types'

interface CardGeneralInfoProps {
  dataPackage: GetPackageInfoResponse
}

export function CardGeneralInfo({ dataPackage }: CardGeneralInfoProps) {
  const { metadata } = dataPackage.collected

  const handleRedirectToRepository = () => {
    const url = metadata.links.repository
    window.open(url)
  }

  const handleRedirectToHomepage = () => {
    window.open(metadata.links.homepage)
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
            {metadata.links.homepage}
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
            {metadata.links.homepage}
          </span>
        </div>

        <Separator />

        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <Package size={20} />
            <span>Latest Version</span>
          </div>
          <span className="text-sm font-semibold">{metadata.version}</span>
        </div>

        <Separator />

        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <Scale size={20} />
            <span>License</span>
          </div>
          <span className="text-sm font-semibold">{metadata.license}</span>
        </div>
      </CardContent>
    </Card>
  )
}
