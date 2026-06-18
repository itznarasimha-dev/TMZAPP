import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV = [
  { label: 'About',    path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Careers',  path: '/careers' },
  { label: 'Contact',  path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled]  = useState(false)
  const [visible, setVisible]    = useState(true)
  const location  = useLocation()
  const timerRef  = useRef(null)
  const isHome    = location.pathname === '/'
  const autoHide  = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    clearTimeout(timerRef.current)
    if (!autoHide) return
    const scheduleHide = () => {
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setVisible(false), 3000)
    }
    const onActivity = () => { setVisible(true); scheduleHide() }
    scheduleHide()
    window.addEventListener('mousemove', onActivity, { passive: true })
    window.addEventListener('scroll',    onActivity, { passive: true })
    window.addEventListener('touchmove', onActivity, { passive: true })
    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('mousemove', onActivity)
      window.removeEventListener('scroll',    onActivity)
      window.removeEventListener('touchmove', onActivity)
    }
  }, [autoHide, location.pathname])

  const navVisible = autoHide ? visible : true
  const glass = isHome && !scrolled

  const bg           = glass ? 'rgba(8,18,40,0.65)'     : 'rgba(244,247,253,0.97)'
  const borderColor  = glass ? 'rgba(91,155,213,0.20)'  : '#AECAEC'
  const shadow       = glass ? '0 2px 24px rgba(0,0,0,0.30)' : '0 1px 12px rgba(30,77,140,0.09)'
  const logoMain     = glass ? '#F4F7FD' : '#0A1628'
  const logoAccent   = glass ? '#60AEDE' : '#1E4D8C'
  const linkColor    = glass ? '#A0BCD8' : '#1E3A5F'
  const linkActive   = glass ? '#60AEDE' : '#1E4D8C'
  const linkActiveBg = glass ? 'rgba(96,174,222,0.18)' : '#E8F0FB'
  const linkHoverCol = glass ? '#FFFFFF' : '#1E4D8C'
  const linkHoverBg  = glass ? 'rgba(255,255,255,0.10)' : '#E8F0FB'

  return (
    <>
      <style>{`
        .nav-desktop { display: none; }
        .nav-cta     { display: none; }
        .nav-burger  { display: flex; }

        @media (min-width: 1024px) {
          .nav-desktop { display: flex; align-items: center; gap: 2px; }
          .nav-cta     { display: flex; align-items: center; }
          .nav-burger  { display: none !important; }
          .nav-mobile-menu { display: none !important; }
        }

        .nav-link {
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 500;
          text-decoration: none;
          letter-spacing: 0.01em;
          background: transparent;
          transition: color 0.18s ease, background 0.18s ease;
          white-space: nowrap;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          padding: 11px 14px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          background: transparent;
          transition: color 0.15s ease, background 0.15s ease;
        }
      `}</style>

      <motion.header
        initial={false}
        animate={{
          y:       navVisible ? 0 : -80,
          opacity: navVisible ? 1 : 0,
          background: bg,
          borderColor: borderColor,
          boxShadow: shadow,
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'fixed', top: 12,
          left: 0, right: 0,
          marginLeft: 'auto', marginRight: 'auto',
          zIndex: 100,
          height: 66,
          width: 'calc(100% - 48px)',
          maxWidth: 1100,
          borderRadius: 16,
          border: '1px solid',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
        }}
      >
        <div style={{ height: 66, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, paddingLeft: 24, paddingRight: 24 }}>

          {/* Logo */}
          <Link to="/" onClick={() => setOpen(false)}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}
          >
            <motion.span animate={{ color: logoMain }} transition={{ duration: 0.3 }}
              style={{ fontSize: 19, fontWeight: 900, letterSpacing: '-0.05em' }}>TZ</motion.span>
            <motion.span animate={{ color: logoAccent }} transition={{ duration: 0.3 }}
              style={{ fontSize: 19, fontWeight: 900, letterSpacing: '-0.05em' }}>Micha</motion.span>
          </Link>

          {/* Desktop nav */}
          <nav className="nav-desktop">
            {NAV.map(({ label, path }) => (
              <NavLink key={path} to={path}
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? linkActive : linkColor,
                  background: isActive ? linkActiveBg : 'transparent',
                })}
                onMouseEnter={e => { e.currentTarget.style.color = linkHoverCol; e.currentTarget.style.background = linkHoverBg }}
                onMouseLeave={e => {
                  const isActive = e.currentTarget.getAttribute('aria-current') === 'page'
                  e.currentTarget.style.color = isActive ? linkActive : linkColor
                  e.currentTarget.style.background = isActive ? linkActiveBg : 'transparent'
                }}
              >{label}</NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="nav-cta" style={{ gap: 10 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px',
              borderRadius: 999,
              border: `1px solid ${glass ? 'rgba(96,174,222,0.35)' : '#AECAEC'}`,
              background: glass ? 'rgba(96,174,222,0.12)' : '#E8F0FB',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3B7DD8', display: 'block', boxShadow: '0 0 6px rgba(59,125,216,0.7)' }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: glass ? '#60AEDE' : '#123470', letterSpacing: '0.04em' }}>Available</span>
            </div>
            <Link to="/contact" className="btn btn-primary btn-sm" style={{ letterSpacing: '-0.01em' }}>
              Start a Project
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button type="button" className="nav-burger" onClick={() => setOpen(v => !v)}
            aria-label="Toggle navigation"
            style={{
              width: 38, height: 38, borderRadius: 9, flexShrink: 0,
              border: `1px solid ${glass ? 'rgba(255,255,255,0.15)' : '#AECAEC'}`,
              background: open ? (glass ? 'rgba(255,255,255,0.12)' : '#E8F0FB') : (glass ? 'rgba(255,255,255,0.07)' : '#F4F7FD'),
              alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'background 0.15s ease',
            }}
          >
            {open ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke={glass ? '#FFFFFF' : '#1E4D8C'} strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="13" viewBox="0 0 18 13" fill="none">
                <path d="M0 1h18M0 6.5h12M0 12h18" stroke={glass ? '#FFFFFF' : '#0A1628'} strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="nav-mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              style={{
                background: glass ? 'rgba(8,18,40,0.94)' : 'rgba(244,247,253,0.98)',
                backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                borderTop: `1px solid ${glass ? 'rgba(255,255,255,0.08)' : '#AECAEC'}`,
                boxShadow: '0 8px 24px rgba(30,77,140,0.10)',
              }}
            >
              <div className="wrap" style={{ paddingTop: 14, paddingBottom: 18 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 14 }}>
                  {[{ label: 'Home', path: '/' }, ...NAV].map(({ label, path }) => (
                    <NavLink key={path} to={path} end={path === '/'}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) => isActive ? 'mobile-nav-link mobile-nav-link-active' : 'mobile-nav-link'}
                      style={{ color: glass ? '#A0C8E8' : '#1E3A5F' }}
                    >{label}</NavLink>
                  ))}
                </div>
                <div style={{ height: 1, background: glass ? 'rgba(255,255,255,0.08)' : '#AECAEC', marginBottom: 14 }} />
                <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary"
                  style={{ width: '100%', height: 46, fontSize: 15, borderRadius: 10 }}>
                  Start a Project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
