import { Outlet } from 'react-router-dom'

export function LayoutHome() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Outlet />
    </div>
  )
}
