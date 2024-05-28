import { format } from 'date-fns'
import { useLocation } from 'react-router-dom'

import type { PackageDetails } from '@/api/get-packages'
import { Badge } from '@/components/ui/badge'

interface ResumePackageProps {
  packageObj: PackageDetails
}

export function ResumePackage({ packageObj }: ResumePackageProps) {
  const location = useLocation()

  return (
    <div className="mt-12">
      <time
        dateTime={packageObj?.package.date}
        className="mb-2 flex flex-1 text-sm italic text-muted-foreground"
      >
        {format(packageObj?.package.date, 'dd/MM/yyyy')}
      </time>
      <div className="flex flex-row items-baseline justify-between">
        <h1 className="font-mono text-xl">{location.state} </h1>
        <span>latest version {packageObj?.package.version}</span>
      </div>
      <span className="text-muted-foreground">
        {packageObj?.package.description}
      </span>
      <span className="flex flex-1 justify-end text-sm">
        {packageObj?.package.author.name}
      </span>

      <div className="mt-4 flex flex-row flex-wrap items-center gap-2">
        {packageObj?.package.keywords.map((keyword, index) => {
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
