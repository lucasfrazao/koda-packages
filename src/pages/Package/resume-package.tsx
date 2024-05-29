import { useLocation } from 'react-router-dom'

import type { GetPackageDetailResponse } from '@/api/get-package-detail'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

interface ResumePackageProps {
  resultPackage: GetPackageDetailResponse
}

export function ResumePackage({ resultPackage }: ResumePackageProps) {
  const location = useLocation()

  const handleRedirectToHomepage = () => {
    window.open(resultPackage.homepage)
  }

  return (
    <div className="mt-12 w-2/3">
      <div className="flex flex-row items-center gap-4">
        <h1 className="font-mono text-xl">{location.state}</h1>
        <ExternalLink
          className="hover:cursor-pointer hover:text-[#E4434C]"
          size={18}
          onClick={handleRedirectToHomepage}
        />
      </div>
      <div>
        <span className="text-xs font-light italic text-zinc-400">
          latest version {resultPackage.version}
        </span>
      </div>

      <span className="text-muted-foreground">{resultPackage.description}</span>
      <span className="flex flex-1 justify-end text-sm">
        {resultPackage.author.name}
      </span>
      <div className="mt-4 flex flex-row flex-wrap items-center gap-2">
        {resultPackage.keywords.map((keyword, index) => {
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
