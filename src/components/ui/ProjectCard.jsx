import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { uiLabels } from '../../data/portfolio.js'
import { Badge } from './Badge.jsx'
import { Card } from './Card.jsx'

export function ProjectCard({ project }) {
  return (
    <Card interactive as="article" className="group flex h-full flex-col overflow-hidden">
      <Link className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]" to={`/projects/${project.slug}`}>
        <div className="project-visual flex min-h-48 flex-col justify-between border-b border-[var(--line)] p-5">
          <div className="flex items-center justify-between gap-3">
            <Badge variant="accent">{project.category}</Badge>
            <ArrowUpRight className="h-5 w-5 text-[var(--muted)] transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--accent-text)]" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase text-[var(--muted)]">{uiLabels.caseStudy}</p>
            <h3 className="mt-2 text-2xl font-bold text-[var(--text)]">{project.title}</h3>
          </div>
        </div>
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
        </div>
      </Link>
    </Card>
  )
}
