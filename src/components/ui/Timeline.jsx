import { Badge } from './Badge.jsx'
import { Card } from './Card.jsx'
import { Reveal } from './Reveal.jsx'

export function Timeline({ items, variant = 'experience' }) {
  if (!items?.length) {
    return null
  }

  return (
    <div className="relative">
      <div className="absolute left-3 top-0 hidden h-full w-px bg-[var(--line)] md:block" aria-hidden="true" />
      <div className="space-y-5">
        {items.map((item, index) => (
          <Reveal key={`${item.role ?? item.program}-${item.period}`} delay={index * 0.05}>
            <div className="relative md:pl-10">
              <span className="absolute left-0 top-6 hidden h-6 w-6 rounded-lg border border-[var(--accent)] bg-[var(--bg)] md:block" aria-hidden="true" />
              <Card className="p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase text-[var(--accent-text)]">{item.period}</p>
                    <h3 className="mt-2 text-2xl font-bold text-[var(--text)]">
                      {variant === 'education' ? item.program : item.role}
                    </h3>
                    <p className="mt-1 text-[var(--muted)]">
                      {variant === 'education' ? item.institution : item.company} - {item.location}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(item.tags ?? item.highlights ?? []).slice(0, 4).map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
                <p className="mt-5 leading-8 text-[var(--muted)]">{item.description}</p>
                {item.bullets && (
                  <ul className="mt-5 grid gap-3 text-sm leading-6 text-[var(--muted)]">
                    {item.bullets.map((bullet) => (
                      <li className="flex gap-3" key={bullet}>
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
