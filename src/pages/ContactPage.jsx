import { ArrowUpRight } from 'lucide-react'
import { ContactForm } from '../components/sections/ContactForm.jsx'
import { Badge } from '../components/ui/Badge.jsx'
import { Card } from '../components/ui/Card.jsx'
import { PageTransition } from '../components/ui/PageTransition.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { Section } from '../components/ui/Section.jsx'
import { contact, uiLabels } from '../data/portfolio.js'

export default function ContactPage() {
  return (
    <PageTransition>
      <Section eyebrow={contact.eyebrow} title={contact.title} description={contact.description}>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Card className="p-6">
              <Badge variant="accent">{uiLabels.openChannel}</Badge>
              <p className="mt-5 text-2xl font-black text-[var(--text)]">{contact.responseTime}</p>
              <div className="mt-6 grid gap-4">
                {contact.options.map((option) => (
                  <a className="rounded-lg border border-[var(--line)] bg-[var(--surface-muted)] p-4 transition hover:border-[var(--accent)]" href={option.href} key={option.label}>
                    <span className="flex items-center justify-between gap-4 text-sm font-bold text-[var(--muted)]">
                      {option.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="mt-2 block font-semibold text-[var(--text)]">{option.value}</span>
                  </a>
                ))}
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </PageTransition>
  )
}
