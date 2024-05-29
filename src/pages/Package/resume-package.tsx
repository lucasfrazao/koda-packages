import { useLocation } from 'react-router-dom'

import type { GetPackageDetailResponse } from '@/api/get-package-detail'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

interface ResumePackageProps {
  detailPackage: GetPackageDetailResponse
}

export function ResumePackage({ detailPackage }: ResumePackageProps) {
  const location = useLocation()

  const handleRedirectToHomepage = () => {
    window.open(detailPackage.homepage)
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

      <span className="text-muted-foreground">{detailPackage.description}</span>
      <span className="flex flex-1 justify-end text-sm">
        {detailPackage.author.name}
      </span>
      <div className="mt-4 flex flex-row flex-wrap items-center gap-2">
        {detailPackage.keywords.map((keyword, index) => {
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
