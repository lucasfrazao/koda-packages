import { ExternalLink } from 'lucide-react'
import { useLocation } from 'react-router-dom'

import type { GetPackageInfoResponse } from '@/api/node-registry/get-package-info'
import { Badge } from '@/components/ui/badge'

interface ResumePackageProps {
  dataPackage: GetPackageInfoResponse
}

export function ResumePackage({ dataPackage }: ResumePackageProps) {
  const location = useLocation()

  const handleRedirectToHomepage = () => {
    const url = dataPackage.homepage
    window.open(url)
  }

  return (
    <div className="mt-12 w-full">
      <div className="flex flex-row items-center gap-4">
        <h1 className="font-mono text-xl">{location.state.packageName}</h1>
        <ExternalLink
          className="hover:cursor-pointer hover:text-[#E4434C]"
          size={18}
          onClick={handleRedirectToHomepage}
        />
      </div>
      <span className="text-muted-foreground">{dataPackage.description}</span>

      {dataPackage.author && (
        <div className="mt-4 flex flex-1 flex-row items-center gap-2">
          <span className="text-sm">Author |</span>
          <span className="text-sm">{dataPackage.author.name}</span>
        </div>
      )}

      <div className="mt-4 flex flex-row flex-wrap items-center gap-2">
        {dataPackage.keywords &&
          dataPackage.keywords.map((keyword, index) => {
            return (
              <Badge key={index} variant="outline">
                {keyword}
              </Badge>
            )
          })}
      </div>
    </div>
  )
}
