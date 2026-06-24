import { ArrowRight } from 'lucide-react'
import { HeroSection } from '../components/sections/HeroSection.jsx'
import { StatsBand } from '../components/sections/StatsBand.jsx'
import { Badge } from '../components/ui/Badge.jsx'
import { Button } from '../components/ui/Button.jsx'
import { Card } from '../components/ui/Card.jsx'
import { PageTransition } from '../components/ui/PageTransition.jsx'
import { ProjectCard } from '../components/ui/ProjectCard.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { Section } from '../components/ui/Section.jsx'
import { SkillCard } from '../components/ui/SkillCard.jsx'
import { TestimonialCard } from '../components/ui/TestimonialCard.jsx'
import { home, projects, skillCategories, testimonials, valueProps } from '../data/portfolio.js'

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)

  return (
    <PageTransition>
      <HeroSection />
      <StatsBand />

      <Section {...home.sections[0]}>
        <div className="grid gap-4 md:grid-cols-3">
          {valueProps.map((item, index) => (
            <Reveal delay={index * 0.06} key={item.title}>
              <Card interactive className="h-full p-6">
                <Badge variant={index === 1 ? 'warm' : 'accent'}>Signal {index + 1}</Badge>
                <h3 className="mt-5 text-2xl font-bold text-[var(--text)]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section {...home.sections[1]} className="bg-[var(--surface-muted)]">
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal delay={index * 0.06} key={project.slug}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Button to={home.projectsLink.href} variant="secondary">
            {home.projectsLink.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </Reveal>
      </Section>

      <Section {...home.skillsPreview}>
        <div className="grid gap-5 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal delay={index * 0.06} key={category.title}>
              <SkillCard category={category} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section {...home.sections[2]} className="bg-[var(--surface-muted)]">
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal delay={index * 0.06} key={testimonial.name}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-[var(--line)]">
        <Reveal>
          <div className="rounded-lg border border-[var(--line)] bg-[var(--text)] px-6 py-10 text-[var(--bg)] sm:px-8 lg:flex lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase opacity-70">{home.finalCta.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">{home.finalCta.title}</h2>
              <p className="mt-4 max-w-2xl opacity-75">{home.finalCta.description}</p>
            </div>
            <Button className="mt-6 bg-[var(--accent)] text-[var(--accent-contrast)] hover:bg-[var(--accent-strong)] lg:mt-0" to={home.finalCta.cta.href}>
              {home.finalCta.cta.label}
            </Button>
          </div>
        </Reveal>
      </Section>
    </PageTransition>
  )
}
