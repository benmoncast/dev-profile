import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { uiLabels } from '../../data/portfolio.js'
import { Badge } from './Badge.jsx'
import { Card } from './Card.jsx'
import { cn } from '../../utils/cn.js'

function projectActionProps(href) {
  if (!href || href === '#') {
    return {
      href: '#',
      'aria-disabled': true,
      onClick: (event) => event.preventDefault(),
      title: 'Link not yet available',
    }
  }

  return {
    href,
    rel: 'noreferrer',
    target: '_blank',
  }
}

function ProjectAction({ children, className, href, icon: Icon, variant = 'secondary' }) {
  return (
    <a
      className={cn(
        'inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border px-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]',
        'hover:-translate-y-0.5 active:translate-y-0',
        variant === 'primary'
          ? 'border-transparent bg-[var(--accent)] text-[var(--accent-contrast)] hover:bg-[var(--accent-strong)]'
          : 'border-[var(--line)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--accent)] hover:bg-[var(--surface-strong)]',
        className,
      )}
      {...projectActionProps(href)}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      {children}
    </a>
  )
}

export function ProjectCard({ project }) {
  return (
    <Card interactive as="article" className="group flex h-full flex-col overflow-hidden">
      <Link className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]" to={`/projects/${project.slug}`}>
        <div className="relative min-h-56 overflow-hidden border-b border-[var(--line)]">
          {project.coverImage ? (
            <img
              alt={`${project.title} screenshot`}
              className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              src={project.coverImage}
            />
          ) : (
            <div className="project-visual absolute inset-0" aria-hidden="true" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,9,11,0.82)] via-[rgba(8,9,11,0.36)] to-[rgba(8,9,11,0.12)]" aria-hidden="true" />
          <div className="relative flex min-h-56 flex-col justify-between p-5">
            <div className="flex items-center justify-between gap-3">
              <Badge variant="accent">{project.category}</Badge>
              <ArrowUpRight className="h-5 w-5 text-white/78 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-white/75">{uiLabels.caseStudy}</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
            </div>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="leading-7 text-[var(--muted)]">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <div className="mt-auto grid grid-cols-3 gap-3 pt-6">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-lg font-bold text-[var(--text)]">{metric.value}</p>
              <p className="text-xs text-[var(--muted)]">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-2 border-t border-[var(--line)] pt-5 sm:grid-cols-3">
          <Link
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-3 text-sm font-bold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--surface-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            to={`/projects/${project.slug}`}
          >
            {uiLabels.caseStudy}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <ProjectAction href={project.githubLink} icon={Github}>
            {uiLabels.github}
          </ProjectAction>
          <ProjectAction href={project.liveLink} icon={ExternalLink} variant="primary">
            {uiLabels.livePreview}
          </ProjectAction>
        </div>
      </div>
    </Card>
  )
}
