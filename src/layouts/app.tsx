import { Github } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

export function LayoutApp() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <header className="flex w-full flex-row items-center justify-between px-8 py-4">
        <img className="h-14 w-14" src="./koda.svg" alt="logo koda packages" />

        <span className="my-4 font-mono text-xl tracking-wider text-foreground">
          koda package
        </span>

        <div className="flex flex-row items-center gap-4">
          <span className="text-sm">FAQ</span>
          <span className="text-sm">About</span>

          <Link to="https://github.com/lucasfrazao/koda-packages">
            <div className="rounded-full bg-slate-200 p-2">
              <Github size={24} />
            </div>
          </Link>
        </div>
      </header>

      <div className="px-8">
        <Outlet />
      </div>
    </div>
  )
}