import { Award } from 'lucide-react'
import { Badge } from '../components/ui/Badge.jsx'
import { Card } from '../components/ui/Card.jsx'
import { PageTransition } from '../components/ui/PageTransition.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { Section } from '../components/ui/Section.jsx'
import { Timeline } from '../components/ui/Timeline.jsx'
import { certifications, education, pageContent, uiLabels } from '../data/portfolio.js'

export default function EducationPage() {
  return (
    <PageTransition>
      <Section {...pageContent.education}>
        <Timeline items={education} variant="education" />
      </Section>

      <Section className="bg-[var(--surface-muted)]" {...pageContent.certifications}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((certification, index) => (
            <Reveal delay={index * 0.05} key={certification}>
              <Card className="h-full p-5">
                <Award className="h-6 w-6 text-[var(--accent-text)]" aria-hidden="true" />
                <Badge className="mt-5" variant="accent">
                  {uiLabels.learningSignal}
                </Badge>
                <p className="mt-4 font-bold leading-7 text-[var(--text)]">{certification}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </PageTransition>
  )
}
