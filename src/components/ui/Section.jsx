import { Reveal } from './Reveal.jsx'
import { cn } from '../../utils/cn.js'

export function Section({
  eyebrow,
  title,
  description,
  children,
  className,
  headerClassName,
  id,
}) {
  return (
    <section className={cn('section-spacing', className)} id={id}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <Reveal className={cn('mb-10 max-w-3xl', headerClassName)}>
            {eyebrow && <p className="mb-3 text-sm font-bold uppercase text-[var(--accent-text)]">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-bold text-[var(--text)] sm:text-4xl lg:text-5xl">{title}</h2>}
            {description && <p className="mt-4 text-base leading-8 text-[var(--muted)] sm:text-lg">{description}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
