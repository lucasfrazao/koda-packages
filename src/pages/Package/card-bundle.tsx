import { Card, CardContent, CardHeader } from '@/components/ui/card'

export function CardBundle() {
  return (
    <Card className="w-full">
      <CardHeader className="text-lg font-semibold">
        Bundle Information
      </CardHeader>
      <CardContent className="flex flex-col gap-4">content</CardContent>
    </Card>
  )
}
