import { cn } from '../../utils/cn.js'

export function Card({ children, className, interactive = false, as: Component = 'div', ...props }) {
  return (
    <Component
      className={cn(
        'rounded-lg border border-[var(--line)] bg-[var(--surface)] shadow-[0_20px_70px_rgba(8,9,11,0.08)] backdrop-blur-xl',
        interactive && 'transition duration-200 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--surface-strong)]',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
