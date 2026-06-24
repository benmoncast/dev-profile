import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navItems, site } from '../../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface-muted)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)] text-sm font-black text-[var(--accent-contrast)]">
              {site.initials}
            </span>
            <div>
              <p className="font-black text-[var(--text)]">{site.productName}</p>
              <p className="text-sm text-[var(--muted)]">{site.headline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-2xl leading-7 text-[var(--muted)]">{site.description}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase text-[var(--text)]">{site.footer.exploreLabel}</p>
            <div className="mt-3 grid gap-2">
              {navItems.slice(1).map((item) => (
                <Link className="text-sm text-[var(--muted)] transition hover:text-[var(--accent-text)]" key={item.href} to={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase text-[var(--text)]">{site.footer.connectLabel}</p>
            <div className="mt-3 grid gap-2">
              {site.socials.map((social) => (
                <a className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--accent-text)]" href={social.href} key={social.label}>
                  {social.label}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--line)] px-4 py-5 text-center text-sm text-[var(--muted)]">
        {site.footer.note}
      </div>
    </footer>
  )
}
