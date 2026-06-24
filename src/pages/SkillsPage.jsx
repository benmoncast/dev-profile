import { SkillCard } from '../components/ui/SkillCard.jsx'
import { PageTransition } from '../components/ui/PageTransition.jsx'
import { Reveal } from '../components/ui/Reveal.jsx'
import { Section } from '../components/ui/Section.jsx'
import { pageContent, skillCategories } from '../data/portfolio.js'

export default function SkillsPage() {
  return (
    <PageTransition>
      <Section {...pageContent.skills}>
        <div className="grid gap-5 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal delay={index * 0.06} key={category.title}>
              <SkillCard category={category} />
            </Reveal>
          ))}
        </div>
      </Section>
    </PageTransition>
  )
}
