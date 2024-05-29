import { Carrot } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

export function LayoutHome() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Outlet />

      <footer className="fixed bottom-2 flex w-full flex-row items-center justify-center gap-1">
        <span>made with love by</span>
        <Link
          className="font-bold hover:text-[#E4434C]"
          to="github.com/lucasfrazao"
        >
          Lucas Frazao
        </Link>
        <Carrot size={18} />
      </footer>
    </div>
  )
}
