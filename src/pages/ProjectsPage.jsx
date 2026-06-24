import { Filter } from 'lucide-react'
import { useMemo, useState } from 'react'
import { EmptyState } from '../components/ui/EmptyState.jsx'
import { PageTransition } from '../components/ui/PageTransition.jsx'
import { ProjectCard } from '../components/ui/ProjectCard.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { Section } from '../components/ui/Section.jsx'
import { pageContent, projects, uiLabels } from '../data/portfolio.js'
import { cn } from '../utils/cn.js'

export default function ProjectsPage() {
  const categories = useMemo(() => ['All', ...new Set(projects.map((project) => project.category))], [])
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <PageTransition>
      <Section {...pageContent.projects}>
        <Reveal>
          <div className="mb-8 flex flex-wrap items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-2">
            <span className="inline-flex items-center gap-2 px-3 text-sm font-bold text-[var(--muted)]">
              <Filter className="h-4 w-4" aria-hidden="true" />
              {uiLabels.filter}
            </span>
            {categories.map((category) => (
              <button
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]',
                  activeCategory === category
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)]'
                    : 'text-[var(--muted)] hover:bg-[var(--surface-strong)] hover:text-[var(--text)]',
                )}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {filteredProjects.length ? (
          <div className="grid gap-5 lg:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <Reveal delay={index * 0.05} key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        ) : (
          <EmptyState title={pageContent.projects.emptyTitle} description={pageContent.projects.emptyDescription} />
        )}
      </Section>
    </PageTransition>
  )
}
