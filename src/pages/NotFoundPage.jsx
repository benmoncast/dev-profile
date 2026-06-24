import { ArrowLeft } from 'lucide-react'
import { Button } from '../components/ui/Button.jsx'
import { PageTransition } from '../components/ui/PageTransition.jsx'
import { Section } from '../components/ui/Section.jsx'
import { pageContent, uiLabels } from '../data/portfolio.js'

export default function NotFoundPage() {
  return (
    <PageTransition>
      <Section {...pageContent.notFound}>
        <Button to="/" variant="secondary">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {uiLabels.backHome}
        </Button>
      </Section>
    </PageTransition>
  )
}
