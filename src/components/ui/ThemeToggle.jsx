import { Moon, Sun } from 'lucide-react'
import { uiLabels } from '../../data/portfolio.js'
import { useTheme } from '../../hooks/useTheme.js'

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()
  const label = isDark ? uiLabels.switchToLight : uiLabels.switchToDark

  return (
    <button
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--surface-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      onClick={toggleTheme}
      title={label}
      type="button"
    >
      {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
    </button>
  )
}
