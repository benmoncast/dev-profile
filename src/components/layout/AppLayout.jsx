import { uiLabels } from '../../data/portfolio.js'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <a className="skip-link" href="#main-content">
        {uiLabels.skipToContent}
      </a>
      <Navbar />
      <main id="main-content" className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  )
}
