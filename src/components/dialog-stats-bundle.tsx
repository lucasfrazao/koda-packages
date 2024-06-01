import { useQuery } from '@tanstack/react-query'
import { Microscope } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import type { TooltipProps } from 'recharts'
import { Tooltip, Treemap } from 'recharts'

import { getPackageHistory } from '@/api/bundlephobia/get-package-history'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  NameType,
  ValueType,
} from 'recharts/types/component/DefaultTooltipContent'

export function DialogStatsBundle() {
  const location = useLocation()
  const { packageName, version } = location.state

  const { data: dataBundle } = useQuery({
    queryKey: ['package-history', packageName],
    queryFn: () => getPackageHistory({ packageName }),
    retry: 2,
    staleTime: Infinity,
  })

  const CustomTooltip = ({
    active,
    payload,
  }: TooltipProps<ValueType, NameType>) => {
    if (active && payload?.length) {
      return (
        <div className="rounded-md bg-white p-1">
          {payload.map((item, index) => {
            return (
              <div className="flex flex-row items-center gap-2" key={index}>
                <span className="text-sm font-semibold">
                  {item.payload.name}
                </span>
              </div>
            )
          })}
        </div>
      )
    }

    return null
  }

  if (!dataBundle) return

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-row items-center gap-2">
          <span className="text-sm">Treemap dependencies</span>
          <Microscope size={18} />
        </div>
      </DialogTrigger>
      <DialogContent className="flex h-fit max-w-fit flex-col items-center">
        <DialogHeader className="w-full">
          <DialogTitle className="text-start">Treemap dependencies</DialogTitle>
        </DialogHeader>
        <Treemap
          className="hover:cursor-pointer"
          width={800}
          height={450}
          data={dataBundle[version]?.dependencySizes?.map((dependency) => ({
            name: dependency.name,
            size: dependency.approximateSize,
            active: true,
          }))}
          dataKey="size"
          aspectRatio={4 / 3}
          stroke="#fff"
          fill="#3f3f46"
        >
          <Tooltip content={<CustomTooltip />} />
        </Treemap>

        <span className="text-sm text-muted-foreground">
          All value are approximate based on calculations made from the total
          value of the bundle size and the size of each dependency
        </span>
      </DialogContent>
    </Dialog>
  )
}
