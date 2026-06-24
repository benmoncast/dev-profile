import { home } from '../../data/portfolio.js'
import { Reveal } from '../ui/Reveal.jsx'

export function StatsBand() {
  return (
    <div className="border-b border-[var(--line)] bg-[var(--surface-muted)]">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 sm:grid-cols-3 sm:px-6 lg:px-8">
        {home.stats.map((stat, index) => (
          <Reveal delay={index * 0.06} key={stat.label}>
            <div className="rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5">
              <p className="text-3xl font-black text-[var(--text)]">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-[var(--muted)]">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
