import { Badge } from './Badge.jsx'
import { Card } from './Card.jsx'

export function SkillCard({ category }) {
  return (
    <Card interactive className="h-full p-6">
      <h3 className="text-2xl font-bold text-[var(--text)]">{category.title}</h3>
      <p className="mt-3 leading-7 text-[var(--muted)]">{category.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <Badge key={skill} variant="accent">
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  )
}
