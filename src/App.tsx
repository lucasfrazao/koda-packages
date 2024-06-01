import { RouterProvider } from 'react-router-dom'

import { TooltipProvider } from '@/components/ui/tooltip'
import { ThemeProvider } from '@/context/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <RouterProvider router={router} />
      </TooltipProvider>
    </ThemeProvider>
  )
}
