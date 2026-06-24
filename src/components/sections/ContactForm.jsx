import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Loader2, Send, TriangleAlert } from 'lucide-react'
import { useState } from 'react'
import { contact } from '../../data/portfolio.js'
import { Button } from '../ui/Button.jsx'
import { Card } from '../ui/Card.jsx'

const initialValues = {
  name: '',
  email: '',
  message: '',
}

function validate(values) {
  const errors = {}

  if (values.name.trim().length < 2) {
    errors.name = contact.form.fields.name.error
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = contact.form.fields.email.error
  }

  if (values.message.trim().length < 20) {
    errors.message = contact.form.fields.message.error
  }

  return errors
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  function updateField(event) {
    const { name, value } = event.target
    setValues((currentValues) => ({ ...currentValues, [name]: value }))
    setErrors((currentErrors) => ({ ...currentErrors, [name]: undefined }))
    setStatus('idle')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      setStatus('error')
      return
    }

    setStatus('loading')

    window.setTimeout(() => {
      setStatus('success')
      setValues(initialValues)
    }, 800)
  }

  return (
    <Card className="p-5 sm:p-6">
      <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="text-sm font-bold text-[var(--text)]" htmlFor="name">
            {contact.form.fields.name.label}
          </label>
          <input
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={Boolean(errors.name)}
            className="mt-2 w-full rounded-lg border border-[var(--line)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent-ring)]"
            id="name"
            name="name"
            onChange={updateField}
            placeholder={contact.form.fields.name.placeholder}
            type="text"
            value={values.name}
          />
          {errors.name && <p className="mt-2 text-sm text-[var(--danger)]" id="name-error">{errors.name}</p>}
        </div>

        <div>
          <label className="text-sm font-bold text-[var(--text)]" htmlFor="email">
            {contact.form.fields.email.label}
          </label>
          <input
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={Boolean(errors.email)}
            className="mt-2 w-full rounded-lg border border-[var(--line)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent-ring)]"
            id="email"
            name="email"
            onChange={updateField}
            placeholder={contact.form.fields.email.placeholder}
            type="email"
            value={values.email}
          />
          {errors.email && <p className="mt-2 text-sm text-[var(--danger)]" id="email-error">{errors.email}</p>}
        </div>

        <div>
          <label className="text-sm font-bold text-[var(--text)]" htmlFor="message">
            {contact.form.fields.message.label}
          </label>
          <textarea
            aria-describedby={errors.message ? 'message-error' : undefined}
            aria-invalid={Boolean(errors.message)}
            className="mt-2 min-h-36 w-full resize-y rounded-lg border border-[var(--line)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent-ring)]"
            id="message"
            name="message"
            onChange={updateField}
            placeholder={contact.form.fields.message.placeholder}
            value={values.message}
          />
          {errors.message && <p className="mt-2 text-sm text-[var(--danger)]" id="message-error">{errors.message}</p>}
        </div>

        <Button disabled={status === 'loading'} type="submit">
          {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
          {contact.form.submitLabel}
        </Button>

        <AnimatePresence mode="wait">
          {status === 'success' && (
            <motion.div
              className="flex items-start gap-3 rounded-lg border border-[var(--success-line)] bg-[var(--success-bg)] p-4 text-sm text-[var(--success-text)]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {contact.form.successMessage}
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              className="flex items-start gap-3 rounded-lg border border-[var(--danger-line)] bg-[var(--danger-bg)] p-4 text-sm text-[var(--danger)]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {contact.form.errorMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </Card>
  )
}
