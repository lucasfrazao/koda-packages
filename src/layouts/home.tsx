import { Carrot } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

export function LayoutHome() {
  return (
    <div className="flex min-h-screen flex-col justify-between antialiased">
      <Outlet />

      <footer className="flex w-full flex-row items-center justify-center gap-1 py-4">
        <span>made with love by</span>
        <Link
          className="font-bold hover:text-[#E4434C]"
          to="https://github.com/lucasfrazao"
          target="_blank"
        >
          Lucas Frazao
        </Link>
        <Carrot size={18} />
      </footer>
    </div>
  )
}
