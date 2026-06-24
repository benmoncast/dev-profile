import { uiLabels } from '../../data/portfolio.js'

export function PageLoader() {
  return (
    <div className="mx-auto flex min-h-[55vh] max-w-7xl items-center justify-center px-4">
      <div className="flex items-center gap-3 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--muted)]">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[var(--accent)]" />
        {uiLabels.loadingPortfolio}
      </div>
    </div>
  )
}
