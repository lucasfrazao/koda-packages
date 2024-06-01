import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { FolderGit2, Link, Microscope, Package, Scale } from 'lucide-react'

export function GeneralInfoSkeleton() {
  return (
    <Card className="w-full">
      <CardHeader className="flex w-full flex-row items-center justify-between">
        <span className="text-lg font-semibold">General Information</span>

        <span className="flex gap-2 text-sm text-muted-foreground hover:cursor-help">
          Composition
          <Microscope />
        </span>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <FolderGit2 size={20} />
            <span>Repository</span>
          </div>
          <Skeleton className="h-[20px] w-[200px]" />
        </div>

        <Separator />

        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <Link size={20} />
            <span>Homepage</span>
          </div>
          <Skeleton className="h-[20px] w-[200px]" />
        </div>

        <Separator />

        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <Package size={20} />
            <span>Latest Version</span>
          </div>
          <Skeleton className="h-[20px] w-[50px]" />
        </div>

        <Separator />

        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <Scale size={20} />
            <span>License</span>
          </div>
          <Skeleton className="h-[20px] w-[50px]" />
        </div>
      </CardContent>
    </Card>
  )
}
