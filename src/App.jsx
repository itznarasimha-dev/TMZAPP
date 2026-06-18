import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Career from './pages/Career'

const Layout = () => (
  <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', flexDirection: 'column' }}>
    <Navbar />
    <main style={{ flex: 1 }}><Outlet /></main>
    <Footer />
  </div>
)

const NotFound = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center', padding: '0 24px' }}>
    <p style={{ fontSize: 96, fontWeight: 800, color: '#1E4D8C', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 16 }}>404</p>
    <h1 style={{ fontSize: 24, fontWeight: 700, color: '#0A1628', marginBottom: 8 }}>Page not found</h1>
    <p style={{ fontSize: 15, color: '#4A6A8A', marginBottom: 32 }}>The page you're looking for doesn't exist.</p>
    <a href="/" className="btn btn-primary" style={{ padding: '0 24px', height: 44, fontSize: 14 }}>Go back home</a>
  </div>
)

const wrap = (Page) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
  >
    <Page />
  </motion.div>
)

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppRoutes() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route index          element={wrap(Home)} />
            <Route path="about"   element={wrap(About)} />
            <Route path="services" element={wrap(Services)} />
            <Route path="projects" element={wrap(Projects)} />
            <Route path="contact" element={wrap(Contact)} />
            <Route path="careers" element={wrap(Career)} />
            <Route path="*"       element={wrap(NotFound)} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <FloatingContact />
    </BrowserRouter>
  )
}
