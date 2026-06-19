import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'About',    path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact',  path: '/contact' },
  { label: 'Careers',  path: '/careers' },
]

const SERVICE_LINKS = [
  { label: 'Web Development',    path: '/services' },
  { label: 'Mobile Apps',        path: '/services' },
  { label: 'UI/UX Design',       path: '/services' },
  { label: 'AI Solutions',       path: '/services' },
  { label: 'Automation Systems', path: '/services' },
  { label: 'Cloud Solutions',    path: '/services' },
]

const IconMail = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const IconPhone = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.1 0h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

const IconPin = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const CONTACT_ITEMS = [
  { icon: <IconMail />,  label: 'Info@tzmicha.com', href: 'mailto:Info@tzmicha.com' },
  { icon: <IconPhone />, label: '+91 83415 51387',  href: 'tel:+918341551387' },
  { icon: <IconPin />,   label: 'Hyderabad, India', href: null },
]

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    style={{ fontSize: 13, color: '#7A8496', textDecoration: 'none', transition: 'color 0.15s ease', lineHeight: 1.3 }}
    onMouseEnter={e => e.currentTarget.style.color = '#A8B4C4'}
    onMouseLeave={e => e.currentTarget.style.color = '#7A8496'}
  >
    {children}
  </Link>
)

const ColHeader = ({ children }) => (
  <p style={{ fontSize: 10, fontWeight: 700, color: '#56616E', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 10 }}>
    {children}
  </p>
)

export default function Footer() {
  return (
    <footer style={{ background: '#0D0F14', color: '#7A8496' }}>



      <div className="wrap" style={{ paddingTop: 20, paddingBottom: 14 }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32 }} className="footer-main">

          {/* Col 1 — Brand */}
          <div>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 2, marginBottom: 8 }}>
              <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.03em', color: '#F0EAD6' }}>TZ</span>
              <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.03em', color: '#60AEDE' }}>Micha</span>
            </Link>
            <p style={{ fontSize: 11, lineHeight: 1.6, color: '#7A8496', marginBottom: 10, maxWidth: 200 }}>
              Technology studio, Hyderabad. We build digital products that actually work.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {CONTACT_ITEMS.map(item => (
                item.href ? (
                  <a key={item.label} href={item.href}
                    style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#8A8070', textDecoration: 'none', transition: 'color 0.15s ease' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#A0B8D0'}
                    onMouseLeave={e => e.currentTarget.style.color = '#7A8496'}
                  >
                    <span style={{ color: '#7A9ABE', flexShrink: 0, display: 'flex' }}>{item.icon}</span>
                    {item.label}
                  </a>
                ) : (
                  <span key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#7A8496' }}>
                    <span style={{ color: '#7A9ABE', flexShrink: 0, display: 'flex' }}>{item.icon}</span>
                    {item.label}
                  </span>
                )
              ))}
            </div>
          </div>

          {/* Col 2 — Company */}
          <div>
            <ColHeader>Company</ColHeader>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {NAV_LINKS.map(({ label, path }) => (
                <FooterLink key={path} to={path}>{label}</FooterLink>
              ))}
            </div>
          </div>

          {/* Col 3 — Services */}
          <div>
            <ColHeader>Services</ColHeader>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {SERVICE_LINKS.map(({ label, path }) => (
                <FooterLink key={label} to={path}>{label}</FooterLink>
              ))}
            </div>
          </div>

          {/* Col 4 — Stats */}
          <div>
            <ColHeader>By the numbers</ColHeader>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {[
                { value: '150+', label: 'Projects' },
                { value: '98%',  label: 'Retention' },
                { value: '40+',  label: 'Countries' },
                { value: '5yrs', label: 'Experience' },
              ].map(stat => (
                <div key={stat.label} style={{ background: '#131008', border: '1px solid #2A2010', borderRadius: 8, padding: '8px 10px' }}>
                  <p style={{ fontSize: 16, fontWeight: 800, color: '#F0EAD6', letterSpacing: '-0.02em', lineHeight: 1 }}>{stat.value}</p>
                  <p style={{ fontSize: 10, color: '#56616E', fontWeight: 500, marginTop: 3, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Col 5 — CTA */}
          <div>
            <ColHeader>Start a project</ColHeader>
            <div style={{ background: '#131008', border: '1px solid #2A2010', borderRadius: 10, padding: '12px 14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6A8AAE', flexShrink: 0, display: 'inline-block' }} />
                <span style={{ fontSize: 10, fontWeight: 600, color: '#7A8496', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Available now</span>
              </div>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#F0EAD6', lineHeight: 1.4, marginBottom: 4 }}>
                Ready to build something great?
              </p>
              <p style={{ fontSize: 11, color: '#7A8496', lineHeight: 1.5, marginBottom: 10 }}>
                Free first call. No commitment.
              </p>
              <Link to="/contact" className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center', fontSize: 12 }}>
                Start a Project →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{ height: 1, background: '#1E1A10', margin: '12px 0 10px' }} />

        {/* ── Bottom bar ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }} className="footer-bottom">
          <p style={{ fontSize: 11, color: '#56616E' }}>
            © 2026 TZMicha Technologies, Inc. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6A8AAE', display: 'inline-block' }} />
              <span style={{ fontSize: 11, color: '#56616E' }}>All systems operational</span>
            </div>
            <span style={{ color: '#1E1A10', fontSize: 11 }}>·</span>
            {[{ label: 'Privacy Policy', path: '/privacy' }, { label: 'Terms of Service', path: '/terms' }].map(({ label, path }, i, arr) => (
              <span key={label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <Link
                  to={path}
                  style={{ fontSize: 11, color: '#56616E', textDecoration: 'none', transition: 'color 0.15s ease' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#7A8496'}
                  onMouseLeave={e => e.currentTarget.style.color = '#56616E'}
                >{label}</Link>
                {i < arr.length - 1 && <span style={{ color: '#1E1A10' }}>·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .footer-main { grid-template-columns: 1fr 1fr 1fr !important; gap: 24px !important; }
        }
        @media (min-width: 1024px) {
          .footer-main { grid-template-columns: 1.6fr 0.7fr 0.9fr 0.9fr 1.1fr !important; gap: 32px !important; }
          .footer-bottom { flex-direction: row !important; justify-content: space-between; gap: 0 !important; }
        }
      `}</style>
    </footer>
  )
}
