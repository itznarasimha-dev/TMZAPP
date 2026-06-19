import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Careers',  path: '/careers' },
  { label: 'Contact',  path: '/contact' },
]

function NavItem({ label, path, glass, linkColor, linkActive }) {
  const [hovered, setHovered] = useState(false)
  const underline = glass ? '#60AEDE' : '#1E4D8C'

  return (
    <NavLink
      to={path}
      end={path === '/'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={({ isActive }) => ({
        position: 'relative',
        padding: '6px 14px',
        borderRadius: 8,
        fontSize: 13.5,
        fontWeight: isActive ? 600 : 500,
        textDecoration: 'none',
        letterSpacing: '0.01em',
        whiteSpace: 'nowrap',
        color: isActive ? linkActive : hovered ? linkActive : linkColor,
        transition: 'color 0.18s ease',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0,
      })}
    >
      {({ isActive }) => (
        <>
          <span>{label}</span>
          <motion.span
            initial={false}
            animate={{
              scaleX: isActive || hovered ? 1 : 0,
              opacity: isActive ? 1 : hovered ? 0.55 : 0,
            }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              display: 'block',
              height: 2,
              width: '55%',
              borderRadius: 2,
              background: underline,
              transformOrigin: 'center',
              marginTop: 2,
            }}
          />
        </>
      )}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible]   = useState(true)
  const location = useLocation()
  const timerRef = useRef(null)
  const isHome   = location.pathname === '/'
  const autoHide = isHome && !scrolled

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

  const bg          = glass ? 'rgba(6,14,32,0.72)'           : 'rgba(248,251,254,0.97)'
  const borderColor = glass ? 'rgba(96,174,222,0.18)'        : 'rgba(174,202,236,0.8)'
  const shadow      = glass ? '0 4px 32px rgba(0,0,0,0.28)' : '0 2px 16px rgba(30,77,140,0.08)'
  const logoMain    = glass ? '#F4F7FD' : '#0A1628'
  const logoAccent  = glass ? '#60AEDE' : '#1E4D8C'
  const linkColor   = glass ? 'rgba(180,210,235,0.72)' : '#6A8AAA'
  const linkActive  = glass ? '#FFFFFF' : '#0A1628'

  return (
    <>
      <style>{`
        .nav-desktop, .nav-right { display: none; }
        .nav-burger { display: flex; }
        @media (min-width: 1024px) {
          .nav-desktop { display: flex !important; align-items: center; }
          .nav-right   { display: flex !important; align-items: center; }
          .nav-burger  { display: none !important; }
          .nav-mobile-menu { display: none !important; }
        }
        .mobile-nav-link {
          display: flex;
          align-items: center;
          padding: 11px 14px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.18s ease, background 0.18s ease;
        }
      `}</style>

      <motion.header
        initial={false}
        animate={{
          y: navVisible ? 0 : -90, opacity: navVisible ? 1 : 0,
          background: bg, borderColor, boxShadow: shadow,
        }}
        transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          position: 'fixed', top: 14, left: 0, right: 0,
          marginLeft: 'auto', marginRight: 'auto',
          zIndex: 100, height: open ? 'auto' : 56,
          minHeight: 56,
          width: 'calc(100% - 48px)', maxWidth: 1200,
          borderRadius: open ? 20 : 16, border: '1px solid',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          overflow: 'hidden',
        }}
      >
        <div style={{
          height: 56, display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, gap: 16,
        }}>

          {/* Logo */}
          <Link to="/" onClick={() => setOpen(false)}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}
          >
            <motion.span animate={{ color: logoMain }} transition={{ duration: 0.25 }}
              style={{ fontSize: 20, fontWeight: 900, letterSpacing: '-0.05em' }}>TZ</motion.span>
            <motion.span animate={{ color: logoAccent }} transition={{ duration: 0.25 }}
              style={{ fontSize: 20, fontWeight: 900, letterSpacing: '-0.05em' }}>Micha</motion.span>
          </Link>

          {/* Desktop nav — absolutely centered */}
          <nav className="nav-desktop" style={{
            position: 'absolute', left: '50%', transform: 'translateX(-50%)',
            alignItems: 'center', gap: 0,
          }}>
            {NAV.map(({ label, path }) => (
              <NavItem key={path} label={label} path={path}
                glass={glass} linkColor={linkColor} linkActive={linkActive} />
            ))}
          </nav>

          {/* Right: pill + divider + CTA */}
          <div className="nav-right" style={{ gap: 10, flexShrink: 0 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 5,
              padding: '4px 11px', borderRadius: 9999,
              border: `1px solid ${glass ? 'rgba(96,174,222,0.28)' : 'rgba(174,202,236,0.9)'}`,
              background: glass ? 'rgba(96,174,222,0.10)' : 'rgba(232,240,251,0.8)',
            }}>
              <span style={{
                width: 5, height: 5, borderRadius: '50%',
                background: '#3B7DD8', flexShrink: 0, display: 'block',
                boxShadow: '0 0 5px rgba(59,125,216,0.8)',
              }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.05em',
                color: glass ? '#7AAAD8' : '#1E4D8C' }}>Available</span>
            </div>
            <div style={{ width: 1, height: 18,
              background: glass ? 'rgba(255,255,255,0.12)' : 'rgba(174,202,236,0.8)' }} />
            <Link to="/contact" className="btn btn-primary btn-sm" style={{
              fontSize: 13, height: 34, padding: '0 16px', borderRadius: 9,
              letterSpacing: '-0.01em',
              boxShadow: glass ? '0 2px 12px rgba(30,77,140,0.35)' : '0 1px 6px rgba(30,77,140,0.20)',
            }}>
              Start a Project
            </Link>
          </div>

          {/* Mobile burger */}
          <button type="button" className="nav-burger" onClick={() => setOpen(v => !v)}
            aria-label="Toggle navigation"
            style={{
              width: 36, height: 36, borderRadius: 9, flexShrink: 0,
              border: `1px solid ${glass ? 'rgba(255,255,255,0.14)' : '#AECAEC'}`,
              background: open
                ? (glass ? 'rgba(255,255,255,0.12)' : '#E8F0FB')
                : (glass ? 'rgba(255,255,255,0.06)' : '#F4F7FD'),
              alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'background 0.15s ease',
            }}
          >
            <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
              {open ? (
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1 1l11 11M12 1L1 12" stroke={glass ? '#FFFFFF' : '#1E4D8C'} strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                  <path d="M0 1h17M0 6h11M0 11h17" stroke={glass ? '#FFFFFF' : '#0A1628'} strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              )}
            </motion.div>
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
              transition={{ duration: 0.22, ease: 'easeOut' }}
              style={{
                background: glass ? 'rgba(6,14,32,0.97)' : 'rgba(244,247,253,0.99)',
                backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                borderTop: `1px solid ${glass ? 'rgba(255,255,255,0.07)' : 'rgba(174,202,236,0.6)'}`,
                borderRadius: '0 0 16px 16px',
              }}
            >
              <div style={{ padding: '8px 12px 14px' }}>
                {NAV.map(({ label, path }, i) => (
                  <NavLink key={path} to={path} end={path === '/'}
                    onClick={() => setOpen(false)}
                    className="mobile-nav-link"
                    style={({ isActive }) => ({
                      color: isActive
                        ? (glass ? '#FFFFFF' : '#0A1628')
                        : (glass ? 'rgba(180,210,235,0.75)' : '#4A6A8A'),
                      background: isActive
                        ? (glass ? 'rgba(96,174,222,0.15)' : 'rgba(30,77,140,0.07)')
                        : 'transparent',
                      fontWeight: isActive ? 700 : 500,
                      borderLeft: isActive ? `3px solid #60AEDE` : '3px solid transparent',
                      paddingLeft: 14,
                      marginBottom: i < NAV.length - 1 ? 2 : 0,
                    })}
                  >
                    {label}
                  </NavLink>
                ))}

                <div style={{ height: 1, background: glass ? 'rgba(255,255,255,0.08)' : 'rgba(174,202,236,0.5)', margin: '10px 0' }} />

                <Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary"
                  style={{ width: '100%', height: 44, fontSize: 14, borderRadius: 10, justifyContent: 'center', letterSpacing: '-0.01em' }}>
                  Start a Project
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, marginTop: 10 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3B7DD8', display: 'block', boxShadow: '0 0 5px rgba(59,125,216,0.8)' }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: glass ? 'rgba(120,170,210,0.7)' : '#7A9ABE', letterSpacing: '0.04em' }}>Available for new projects</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
