import { ExternalLink } from 'lucide-react'
import { useLocation } from 'react-router-dom'

import type { GetPackageInfoResponse } from '@/api/npms/types'
import { Badge } from '@/components/ui/badge'

interface ResumePackageProps {
  dataPackage: GetPackageInfoResponse
}

export function ResumePackage({ dataPackage }: ResumePackageProps) {
  const location = useLocation()

  const { author, description, keywords } = dataPackage.collected.metadata

  const handleRedirectToHomepage = () => {
    const url = dataPackage.collected.metadata.links.homepage
    window.open(url)
  }

  return (
    <div className="mt-12 w-full">
      <div className="flex flex-row items-center gap-4">
        <h1 className="font-mono text-xl">{location.state}</h1>
        <ExternalLink
          className="hover:cursor-pointer hover:text-[#E4434C]"
          size={18}
          onClick={handleRedirectToHomepage}
        />
      </div>
      <span className="text-muted-foreground">{description}</span>

      <span className="flex flex-1 justify-end text-sm">{author.name}</span>

      <div className="mt-4 flex flex-row flex-wrap items-center gap-2">
        {keywords.map((keyword, index) => {
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
