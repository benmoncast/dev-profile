import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import heroImage from '../../assets/hero.png'
import { home, uiLabels } from '../../data/portfolio.js'
import { Badge } from '../ui/Badge.jsx'
import { Button } from '../ui/Button.jsx'
import { Reveal } from '../ui/Reveal.jsx'

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden border-b border-[var(--line)]">
      <div className="absolute inset-0 premium-grid opacity-60" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div>
          <Reveal>
            <Badge variant="accent">
              <Sparkles className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
              {home.hero.eyebrow}
            </Badge>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl text-4xl font-black text-[var(--text)] sm:text-5xl lg:text-6xl">
              {home.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-5 max-w-xl">
              <motion.p
                className="signature-text text-3xl text-[var(--accent-text)]"
                initial={shouldReduceMotion ? false : { clipPath: 'inset(0 100% 0 0)' }}
                animate={shouldReduceMotion ? undefined : { clipPath: 'inset(0 0% 0 0)' }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {home.hero.signature}
              </motion.p>
              <span className="signature-line" aria-hidden="true" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">{home.hero.description}</p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" to={home.hero.primaryCta.href}>
                {home.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button size="lg" to={home.hero.secondaryCta.href} variant="secondary">
                {home.hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {home.hero.proofPoints.map((point) => (
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--muted)]" key={point}>
                  <CheckCircle2 className="h-4 w-4 text-[var(--accent-text)]" aria-hidden="true" />
                  {point}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="hero-console relative rounded-lg border border-[var(--line)] bg-[var(--surface)] p-3 shadow-[0_30px_90px_rgba(8,9,11,0.14)]">
            <div className="flex items-center justify-between border-b border-[var(--line)] px-2 pb-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f4d35e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#14b8a6]" />
              </div>
              <p className="text-xs font-bold uppercase text-[var(--muted)]">{home.productPanel.consoleLabel}</p>
            </div>
            <div className="grid gap-4 pt-4 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface-muted)]">
                <img alt={uiLabels.brandLogoAlt} className="h-full min-h-72 w-full object-cover" src={heroImage} />
              </div>
              <div className="flex flex-col gap-3">
                <div className="rounded-lg border border-[var(--line)] bg-[var(--surface-muted)] p-4">
                  <p className="text-sm font-bold text-[var(--text)]">{home.productPanel.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{home.productPanel.subtitle}</p>
                </div>
                {home.productPanel.rows.map((row) => (
                  <div className="flex items-center justify-between rounded-lg border border-[var(--line)] bg-[var(--surface-muted)] px-4 py-3" key={row.label}>
                    <span className="text-sm text-[var(--muted)]">{row.label}</span>
                    <span className="text-sm font-bold text-[var(--text)]">{row.value}</span>
                  </div>
                ))}
                <div className="rounded-lg border border-[var(--line)] bg-[var(--accent-soft)] p-4 text-sm font-semibold text-[var(--accent-text)]">
                  {home.hero.availability}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
