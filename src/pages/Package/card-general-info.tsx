import { FolderGit2, Link } from 'lucide-react'

import { GetPackageDetailResponse } from '@/api/get-package-detail'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface CardGeneralInfoProps {
  resultPackage: GetPackageDetailResponse
}

export function CardGeneralInfo({ resultPackage }: CardGeneralInfoProps) {
  const latestVersion = resultPackage['dist-tags'].latest

  const { repository, homepage, version } =
    resultPackage.versions[latestVersion]

  const repositoryURLFormated = (url: string) => {
    return url.slice(4).toString()
  }

  const handleRedirectToRepository = () => {
    const url = repositoryURLFormated(repository.url)
    window.open(url)
  }

  const handleRedirectToHomepage = () => {
    window.open(homepage)
  }

  return (
    <Card>
      <CardHeader className="font-medium">General Information</CardHeader>
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
            {repositoryURLFormated(repository.url)}
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
            {homepage}
          </span>
        </div>

        <Separator />

        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <Link size={20} />
            <span>Latest Version</span>
          </div>
          <span
            className="text-sm font-semibold hover:text-slate-600"
            role="button"
          >
            {version}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
