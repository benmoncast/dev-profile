import { cn } from '../../utils/cn.js'

const variants = {
  default: 'border-[var(--line)] bg-[var(--surface)] text-[var(--muted)]',
  accent: 'border-[var(--accent-soft)] bg-[var(--accent-soft)] text-[var(--accent-text)]',
  warm: 'border-[var(--warm-soft)] bg-[var(--warm-soft)] text-[var(--warm-text)]',
}

export function Badge({ children, className, variant = 'default' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
