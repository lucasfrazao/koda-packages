import { Loader2 } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function BundleInformationSkeleton() {
  return (
    <Card className="w-full">
      <CardHeader className="flex w-full flex-row items-center justify-between">
        <span className="text-lg font-semibold">Bundle Information</span>

        <Select disabled>
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
      <CardContent className="flex h-[300px] w-full flex-row items-center justify-around">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </CardContent>
    </Card>
  )
}
