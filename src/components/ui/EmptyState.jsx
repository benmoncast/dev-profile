import { SearchX } from 'lucide-react'
import { Card } from './Card.jsx'

export function EmptyState({ title, description }) {
  return (
    <Card className="flex flex-col items-center justify-center px-6 py-12 text-center">
      <SearchX className="mb-4 h-9 w-9 text-[var(--muted)]" aria-hidden="true" />
      <h3 className="text-xl font-bold text-[var(--text)]">{title}</h3>
      <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--muted)]">{description}</p>
    </Card>
  )
}
