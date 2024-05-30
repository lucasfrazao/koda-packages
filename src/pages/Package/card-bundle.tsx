import { useLocation } from 'react-router-dom'

import { getBundlePackage } from '@/api/bundlephobia/get-bundle-package'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useQuery } from '@tanstack/react-query'
import { Info } from 'lucide-react'

export function CardBundle() {
  const location = useLocation()
  const packageName = location.state

  const { data: dataBundlePackage } = useQuery({
    queryKey: ['package-bundle', packageName],
    queryFn: () => getBundlePackage({ packageName }),
    retry: 2,
  })

  const convertBtoKb = (value?: number) => {
    if (!value) {
      return 0
    }
    return (value / 1000).toFixed(2)
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex w-full flex-row items-center justify-between">
        <span className="text-lg font-semibold">Bundle Information</span>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="General" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General</SelectItem>
            <SelectItem value="dependencies" disabled>
              Dependencies
            </SelectItem>
            <SelectItem value="versions" disabled>
              Other versions
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex h-2/3 w-full flex-row items-center justify-around">
        <div className="flex flex-col items-center gap-2">
          <div className="flex w-full flex-row justify-center gap-2">
            <span className="text-lg font-semibold text-[#E4434C]">
              MINIFIED SIZE
            </span>
            <Tooltip>
              <TooltipTrigger>
                <Info size={16} color="#E4434C" />
                <TooltipContent>
                  Minification is the process of removing unnecessary or
                  redundant data without affecting how a resource is processed
                  by the browser.
                </TooltipContent>
              </TooltipTrigger>
            </Tooltip>
          </div>

          <div className="flex flex-row items-baseline gap-2">
            <span className="font-mono text-5xl">
              {convertBtoKb(dataBundlePackage?.size)}
            </span>
            <span>kb</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex w-full flex-row justify-center gap-2">
            <span className="text-lg font-semibold text-[#E4434C]">GZIP</span>
            <Tooltip>
              <TooltipTrigger>
                <Info size={16} color="#E4434C" />
                <TooltipContent>
                  GZIP refers to compressing the package&apos;s JavaScript
                  algorithm code using the GZIP.
                </TooltipContent>
              </TooltipTrigger>
            </Tooltip>
          </div>

          <div className="flex flex-row items-baseline gap-2">
            <span className="font-mono text-5xl">
              {convertBtoKb(dataBundlePackage?.gzip)}
            </span>
            <span>kb</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
