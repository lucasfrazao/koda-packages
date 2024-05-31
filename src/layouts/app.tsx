import { Carrot, Github } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

export function LayoutApp() {
  return (
    <div className="flex min-h-screen flex-col justify-between antialiased">
      <div>
        <header className="flex w-full flex-row items-center justify-between px-8 py-4">
          <img
            className="h-14 w-14"
            src="./koda.svg"
            alt="logo koda packages"
          />

          <Link to="/">
            <span className="my-4 font-mono text-xl tracking-wider text-foreground hover:text-muted-foreground">
              koda package
            </span>
          </Link>

          <div className="flex flex-row items-center gap-4">
            <Link to="#">
              <span className="text-sm">FAQ</span>
            </Link>

            <Link to="/about">
              <span className="text-sm hover:text-muted-foreground">About</span>
            </Link>

            <Link
              to="https://github.com/lucasfrazao/koda-packages"
              target="_blank"
            >
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
