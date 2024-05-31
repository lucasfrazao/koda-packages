import { Loader2 } from 'lucide-react'

export function MaintainersSkeleton() {
  return (
    <div className="w-full">
      <span className="w-full text-left text-xl">Maintainers</span>
      <div className="flex h-[240px] w-full items-center justify-center py-4">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    </div>
  )
}
