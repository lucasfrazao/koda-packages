import { Input } from '@/components/ui/input'
import { Label } from './components/ui/label'

export function App() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center">
        <img className="h-24 w-24" src="./koda.svg" alt="logo koda packages" />
        <Label className="text-md my-4 font-mono tracking-wider text-foreground">
          koda package
        </Label>
        <Input className="w-[300px]" placeholder="type package name here" />
      </div>

      <small className="fixed bottom-2">made with love by Lucas Frazao</small>
    </div>
  )
}
