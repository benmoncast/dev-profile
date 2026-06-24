import { Quote, Star } from 'lucide-react'
import { Badge } from './Badge.jsx'
import { Card } from './Card.jsx'

export function TestimonialCard({ testimonial }) {
  return (
    <Card className="h-full p-6">
      <div className="flex items-start justify-between gap-4">
        <Quote className="h-7 w-7 text-[var(--accent-text)]" aria-hidden="true" />
        <Badge variant="warm">
          <Star className="mr-1 h-3.5 w-3.5 fill-current" aria-hidden="true" />
          {testimonial.rating}
        </Badge>
      </div>
      <p className="mt-5 leading-8 text-[var(--text)]">"{testimonial.message}"</p>
      <div className="mt-6 border-t border-[var(--line)] pt-5">
        <p className="font-bold text-[var(--text)]">{testimonial.name}</p>
        <p className="text-sm text-[var(--muted)]">{testimonial.role}</p>
        <Badge className="mt-3">{testimonial.highlight}</Badge>
      </div>
    </Card>
  )
}
