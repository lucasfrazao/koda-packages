import { Info } from 'lucide-react'

import { GetBundlePackageResponse } from '@/api/bundlephobia/get-bundle-package'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface CardBundleSizeProps {
  dataBundle: GetBundlePackageResponse
}

export function CardBundleSize({ dataBundle }: CardBundleSizeProps) {
  const convertBtoKb = (value?: number) => {
    if (!value) {
      return 0
    }
    return (value / 1000).toFixed(2)
  }

  return (
    <div className="flex w-full flex-row justify-around">
      <div className="flex h-[250px] flex-col items-center justify-center gap-2">
        <div className="flex w-full flex-row justify-center gap-2">
          <span className="text-lg font-semibold text-[#E4434C]">
            MINIFIED SIZE
          </span>
          <Tooltip>
            <TooltipTrigger>
              <Info size={16} color="#E4434C" />
              <TooltipContent>
                Minification is the process of removing unnecessary or redundant
                data without affecting how a resource is processed by the
                browser.
              </TooltipContent>
            </TooltipTrigger>
          </Tooltip>
        </div>

        <div className="flex flex-row items-baseline gap-2">
          <span className="font-mono text-5xl">
            {convertBtoKb(dataBundle?.size)}
          </span>
          <span>kb</span>
        </div>
      </div>

      <div className="flex h-[250px] flex-col items-center justify-center gap-2">
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
            {convertBtoKb(dataBundle?.gzip)}
          </span>
          <span>kb</span>
        </div>
      </div>
    </div>
  )
}
