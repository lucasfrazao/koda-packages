import { Skeleton } from '@/components/ui/skeleton'

export function ResumePackageSkeleton() {
  return (
    <div className="mt-12 flex w-full flex-col gap-2">
      <Skeleton className="h-[28px] w-[200px]" />
      <Skeleton className="h-[24px] w-[500px]" />
      <Skeleton className="h-[24px] w-[200px]" />
    </div>
  )
}
