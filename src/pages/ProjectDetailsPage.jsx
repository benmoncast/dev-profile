import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Badge } from '../components/ui/Badge.jsx'
import { Button } from '../components/ui/Button.jsx'
import { Card } from '../components/ui/Card.jsx'
import { PageTransition } from '../components/ui/PageTransition.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { Section } from '../components/ui/Section.jsx'
import { pageContent, projects, uiLabels } from '../data/portfolio.js'

export default function ProjectDetailsPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <PageTransition>
        <Section {...pageContent.projectDetails.notFound}>
          <Button to="/projects" variant="secondary">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {uiLabels.backToProjects}
          </Button>
        </Section>
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <Section className="border-b border-[var(--line)]" eyebrow={project.category} title={project.title} description={project.summary}>
        <Reveal>
          <div className="flex flex-wrap gap-3">
            <Button to="/projects" variant="secondary">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {uiLabels.backToProjects}
            </Button>
            <Button href={project.liveLink} variant="primary">
              {uiLabels.livePreview}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href={project.githubLink} variant="ghost">
              <Github className="h-4 w-4" aria-hidden="true" />
              {uiLabels.github}
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-5 lg:grid-cols-3">
          {pageContent.projectDetails.storyBlocks.map((item, index) => (
            <Reveal delay={index * 0.06} key={item.label}>
              <Card className="h-full p-6">
                <Badge variant={index === 2 ? 'warm' : 'accent'}>{item.label}</Badge>
                <p className="mt-5 leading-8 text-[var(--muted)]">{project[item.key]}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section {...pageContent.projectDetails.screenshots}>
        <div className="grid gap-5 lg:grid-cols-2">
          {project.screenshots.map((screenshot, index) => (
            <Reveal delay={index * 0.06} key={screenshot.title}>
              <Card className="overflow-hidden">
                <div className="project-visual min-h-64 p-6">
                  <Badge>{uiLabels.screenshot} {index + 1}</Badge>
                  <h3 className="mt-20 text-3xl font-black text-[var(--text)]">{screenshot.title}</h3>
                </div>
                <div className="p-5">
                  <p className="leading-7 text-[var(--muted)]">{screenshot.caption}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-[var(--surface-muted)]" eyebrow={pageContent.projectDetails.stack.eyebrow} title={pageContent.projectDetails.stack.title}>
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Card className="p-6">
              <h3 className="text-2xl font-bold text-[var(--text)]">{pageContent.projectDetails.stack.techTitle}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="accent">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {project.metrics.map((metric) => (
                  <div className="rounded-lg border border-[var(--line)] bg-[var(--surface-muted)] p-4" key={metric.label}>
                    <p className="text-2xl font-black text-[var(--text)]">{metric.value}</p>
                    <p className="mt-1 text-xs text-[var(--muted)]">{metric.label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="p-6">
              <h3 className="text-2xl font-bold text-[var(--text)]">{pageContent.projectDetails.stack.processTitle}</h3>
              <div className="mt-6 grid gap-4">
                {project.process.map((step, index) => (
                  <div className="flex gap-4" key={step}>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)] text-sm font-black text-[var(--accent-contrast)]">
                      {index + 1}
                    </span>
                    <p className="pt-1 leading-7 text-[var(--muted)]">{step}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <Card className="p-6">
            <p className="text-sm font-bold uppercase text-[var(--accent-text)]">{pageContent.projectDetails.outcomeEyebrow}</p>
            <h2 className="mt-3 text-3xl font-black text-[var(--text)]">{project.outcome}</h2>
            <Link className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--accent-text)]" to="/contact">
              {uiLabels.discussSimilarBuild}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Card>
        </Reveal>
      </Section>
    </PageTransition>
  )
}
