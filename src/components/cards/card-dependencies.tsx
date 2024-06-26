import { Boxes, Combine, PackageOpen } from 'lucide-react'

import type { GetPackageInfoResponse } from '@/api/node-registry/get-package-info'
import { ScrollArea } from '@/components/ui/scroll-area'

interface CardDependenciesProps {
  dataPackage: GetPackageInfoResponse
}

export function CardDependencies({ dataPackage }: CardDependenciesProps) {
  const { devDependencies, dependencies, peerDependencies } = dataPackage

  return (
    <ScrollArea className="flex max-h-[300px] w-full flex-col scroll-smooth pr-6">
      {dependencies && (
        <div className="flex flex-1 flex-col items-start">
          <div className="mb-4 flex w-full flex-row items-center gap-4">
            <PackageOpen size={20} />
            <span>Dependencies</span>
          </div>
          <ScrollArea className="flex max-h-[200px] w-full flex-col rounded-md bg-primary-foreground p-2 font-mono">
            {Object.entries(dependencies).map((item, index) => (
              <div key={index} className="flex w-full flex-row text-xs">
                <blockquote>{item[0]}</blockquote>
                <blockquote>: {item[1]}</blockquote>
              </div>
            ))}
          </ScrollArea>
        </div>
      )}

      {devDependencies && (
        <div className="mt-4 flex flex-1 flex-col items-start">
          <div className="mb-4 flex w-full flex-row items-center gap-4">
            <Boxes size={20} />
            <span>Dev Dependencies</span>
          </div>
          <ScrollArea className="flex max-h-[200px] w-full  flex-col rounded-md bg-primary-foreground p-2 font-mono">
            {Object.entries(devDependencies).map((item, index) => (
              <div key={index} className="flex w-full flex-row text-xs">
                <blockquote>{item[0]}</blockquote>
                <blockquote>: {item[1]}</blockquote>
              </div>
            ))}
          </ScrollArea>
        </div>
      )}

      {peerDependencies && (
        <div className="flex flex-1 flex-col items-start">
          <div className="mb-4 mt-4 flex w-full flex-row items-center gap-4">
            <Combine size={20} />
            <span>Peer Dependencies</span>
          </div>
          <ScrollArea className="flex max-h-[200px] w-full  flex-col rounded-md bg-primary-foreground p-2 font-mono">
            {Object.entries(peerDependencies).map((item, index) => (
              <div key={index} className="flex w-full flex-row text-xs">
                <blockquote>{item[0]}</blockquote>
                <blockquote>: {item[1]}</blockquote>
              </div>
            ))}
          </ScrollArea>
        </div>
      )}
    </ScrollArea>
  )
}
