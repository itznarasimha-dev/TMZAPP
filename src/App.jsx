import { BrowserRouter, Routes, Route, Outlet, useLocation, Link } from 'react-router-dom'
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
  <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', flexDirection: 'column', overscrollBehavior: 'none' }}>
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
    <Link to="/" className="btn btn-primary" style={{ padding: '0 24px', height: 44, fontSize: 14 }}>Go back home</Link>
  </div>
)

const pageVariants = {
  initial:  { opacity: 0,    y: 15 },
  animate:  { opacity: 1,    y: 0  },
  exit:     { opacity: 0,    y: -15 },
}

const pageTransition = {
  duration: 0.38,
  ease: [0.25, 0.1, 0.25, 1],
}

const wrap = (Page) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={pageTransition}
  >
    <Page />
  </motion.div>
)

function AppRoutes() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo({ top: 0 })}>
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
