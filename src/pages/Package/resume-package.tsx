// import { format } from 'date-fns'
import { useLocation } from 'react-router-dom'

import type { GetPackageDetailResponse } from '@/api/get-package-detail'
import { Badge } from '@/components/ui/badge'

interface ResumePackageProps {
  resultPackage: GetPackageDetailResponse
}

export function ResumePackage({ resultPackage }: ResumePackageProps) {
  const location = useLocation()

  if (!resultPackage) return

  return (
    <div className="mt-12 w-2/3">
      {/* <time
        dateTime={packageObj?.package.date}
        className="mb-2 flex flex-1 text-sm italic text-muted-foreground"
      >
        {format(packageObj?.package.date, 'dd/MM/yyyy')}
      </time> */}
      <div className="flex flex-row items-baseline justify-between">
        <h1 className="font-mono text-xl">{location.state} </h1>
        <span>latest version {resultPackage['dist-tags'].latest}</span>
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
