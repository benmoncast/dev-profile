import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navItems, site, uiLabels } from '../../data/portfolio.js'
import { cn } from '../../utils/cn.js'
import { ThemeToggle } from '../ui/ThemeToggle.jsx'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClassName = ({ isActive }) =>
    cn(
      'rounded-md px-3 py-2 text-sm font-semibold transition hover:bg-[var(--surface)] hover:text-[var(--text)]',
      isActive ? 'bg-[var(--surface-strong)] text-[var(--text)]' : 'text-[var(--muted)]',
    )

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--nav-bg)] backdrop-blur-xl">
      <nav aria-label="Primary" className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]" to="/" onClick={() => setIsOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)] text-sm font-black text-[var(--accent-contrast)]">
            {site.initials}
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block text-sm font-black text-[var(--text)]">{site.name}</span>
            <span className="block text-xs font-semibold text-[var(--muted)]">{site.role}</span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink className={linkClassName} key={item.href} to={item.href}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-expanded={isOpen}
            aria-label={isOpen ? uiLabels.closeNavigation : uiLabels.openNavigation}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] transition hover:bg-[var(--surface-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-[var(--line)] bg-[var(--bg)] px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <NavLink className={linkClassName} key={item.href} onClick={() => setIsOpen(false)} to={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
