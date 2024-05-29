import { TooltipProvider } from '@/components/ui/tooltip'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

export function App() {
  return (
    <TooltipProvider>
      <RouterProvider router={router} />
    </TooltipProvider>
  )
}
