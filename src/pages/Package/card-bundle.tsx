import { useState } from 'react'

import type { GetBundlePackageResponse } from '@/api/bundlephobia/get-bundle-package'
import type { GetPackageInfoResponse } from '@/api/node-registry/get-package-info'

import { CardBundleSize } from '@/components/cards/card-bundle-size'
import { CardDependencies } from '@/components/cards/card-dependencies'
import { CardPackageVersions } from '@/components/cards/card-package-versions'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface CardBundleProps {
  dataPackage: GetPackageInfoResponse
  dataBundle: GetBundlePackageResponse
}

export function CardBundle({ dataBundle, dataPackage }: CardBundleProps) {
  const [isMetadataDisplay, setIsMetadataDisplay] = useState('general')

  return (
    <Card className="w-full">
      <CardHeader className="flex w-full flex-row items-center justify-between">
        <span className="text-lg font-semibold">Bundle Information</span>

        <Select
          value={isMetadataDisplay}
          onValueChange={(value) => setIsMetadataDisplay(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="General" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General</SelectItem>
            <SelectItem value="dependencies">Dependencies</SelectItem>
            <SelectItem value="versions">Other versions</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="min-h-4/5 flex w-full flex-row items-center justify-around">
        {isMetadataDisplay === 'general' && (
          <CardBundleSize dataBundle={dataBundle} />
        )}

        {isMetadataDisplay === 'dependencies' && (
          <CardDependencies dataPackage={dataPackage} />
        )}

        {isMetadataDisplay === 'versions' && <CardPackageVersions />}
      </CardContent>
    </Card>
  )
}
