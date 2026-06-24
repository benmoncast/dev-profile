import { PageTransition } from '../components/ui/PageTransition.jsx'
import { Section } from '../components/ui/Section.jsx'
import { Timeline } from '../components/ui/Timeline.jsx'
import { experience, pageContent } from '../data/portfolio.js'

export default function ExperiencePage() {
  return (
    <PageTransition>
      <Section {...pageContent.experience}>
        <Timeline items={experience} />
      </Section>
    </PageTransition>
  )
}
