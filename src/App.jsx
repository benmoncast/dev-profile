import { lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout.jsx'
import { PageLoader } from './components/ui/PageLoader.jsx'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const SkillsPage = lazy(() => import('./pages/SkillsPage.jsx'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage.jsx'))
const ProjectDetailsPage = lazy(() => import('./pages/ProjectDetailsPage.jsx'))
const ExperiencePage = lazy(() => import('./pages/ExperiencePage.jsx'))
const EducationPage = lazy(() => import('./pages/EducationPage.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'))

export default function App() {
  const location = useLocation()

  return (
    <AppLayout>
      <Suspense fallback={<PageLoader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </AppLayout>
  )
}
