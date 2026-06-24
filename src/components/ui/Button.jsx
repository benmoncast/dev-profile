import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn.js'

const variants = {
  primary:
    'border-transparent bg-[var(--accent)] text-[var(--accent-contrast)] shadow-[0_14px_30px_rgba(20,184,166,0.22)] hover:bg-[var(--accent-strong)]',
  secondary:
    'border-[var(--line)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)] hover:bg-[var(--surface-strong)]',
  ghost:
    'border-transparent bg-transparent text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--text)]',
}

const sizes = {
  sm: 'min-h-9 px-3 text-sm',
  md: 'min-h-11 px-4 text-sm',
  lg: 'min-h-12 px-5 text-base',
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  to,
  href,
  disabled,
  ...props
}) {
  const buttonClassName = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg border font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]',
    'hover:-translate-y-0.5 active:translate-y-0',
    disabled && 'pointer-events-none opacity-55',
    variants[variant],
    sizes[size],
    className,
  )

  if (to) {
    return (
      <Link className={buttonClassName} to={to} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={buttonClassName} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={buttonClassName} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
