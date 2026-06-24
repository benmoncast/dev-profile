import { CheckCircle2 } from 'lucide-react'
import { Badge } from '../components/ui/Badge.jsx'
import { Card } from '../components/ui/Card.jsx'
import { PageTransition } from '../components/ui/PageTransition.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { Section } from '../components/ui/Section.jsx'
import { home, pageContent, site, valueProps } from '../data/portfolio.js'

export default function AboutPage() {
  return (
    <PageTransition>
      <Section {...pageContent.about}>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Card className="p-6">
              <Badge variant="accent">{site.role}</Badge>
              <h2 className="mt-5 text-3xl font-black text-[var(--text)]">{site.headline}</h2>
              <p className="mt-5 leading-8 text-[var(--muted)]">
                {pageContent.about.narrative}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {home.stats.map((stat) => (
                  <div className="rounded-lg border border-[var(--line)] bg-[var(--surface-muted)] p-4" key={stat.label}>
                    <p className="text-2xl font-black text-[var(--text)]">{stat.value}</p>
                    <p className="mt-1 text-xs text-[var(--muted)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
          <div className="grid gap-4">
            {valueProps.map((item, index) => (
              <Reveal delay={index * 0.06} key={item.title}>
                <Card className="p-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[var(--accent-text)]" aria-hidden="true" />
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text)]">{item.title}</h3>
                      <p className="mt-2 leading-7 text-[var(--muted)]">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </PageTransition>
  )
}
