import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const PHONE = '918341551387'
const PHONE_DISPLAY = '+91 83415 51387'

const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.1 0h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

const IconMessage = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
)

export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 50, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            style={{ width: 260, background: '#F4F7FD', border: '1px solid #AECAEC', borderRadius: 14, boxShadow: '0 8px 24px rgba(30,77,140,0.12), 0 2px 6px rgba(30,77,140,0.07)', overflow: 'hidden' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderBottom: '1px solid #AECAEC' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#1E4D8C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#F4F7FD', fontWeight: 800, fontSize: 13 }}>TZ</span>
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#0A1628', lineHeight: 1.2 }}>TZMicha</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 3 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3B7DD8', display: 'block' }} />
                  <span style={{ fontSize: 11, color: '#4A6A8A' }}>Available now</span>
                </div>
              </div>
            </div>

            <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <p style={{ fontSize: 12, color: '#4A6A8A', lineHeight: 1.6, marginBottom: 4 }}>
                Reach us via call or WhatsApp. We typically respond within minutes.
              </p>

              <a href={`tel:+${PHONE}`}
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 8, background: '#DDEAF7', border: '1px solid #AECAEC', textDecoration: 'none', transition: 'border-color 0.15s ease' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#1E4D8C'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#AECAEC'}
              >
                <div style={{ width: 30, height: 30, borderRadius: 6, background: '#E8F0FB', border: '1px solid #C2D8F5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#1E4D8C' }}>
                  <IconPhone />
                </div>
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, color: '#4A6A8A', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 1 }}>Call us</p>
                  <p style={{ fontSize: 12, fontWeight: 600, color: '#0A1628' }}>{PHONE_DISPLAY}</p>
                </div>
              </a>

              <a href={`https://wa.me/${PHONE}?text=Hi%20TZMicha%2C%20I%27d%20like%20to%20discuss%20a%20project.`}
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 8, background: '#E8F0FB', border: '1px solid #C2D8F5', textDecoration: 'none', transition: 'background 0.15s ease' }}
                onMouseEnter={e => e.currentTarget.style.background = '#C2D8F5'}
                onMouseLeave={e => e.currentTarget.style.background = '#E8F0FB'}
              >
                <div style={{ width: 30, height: 30, borderRadius: 6, background: '#C2D8F5', border: '1px solid #8BBDE8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#123470' }}>
                  <IconMessage />
                </div>
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, color: '#123470', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 1 }}>WhatsApp</p>
                  <p style={{ fontSize: 12, fontWeight: 600, color: '#0A1628' }}>{PHONE_DISPLAY}</p>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button type="button" onClick={() => setOpen(v => !v)}
        whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
        style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '0 18px', height: 44, borderRadius: 9999, background: '#1E4D8C', border: 'none', color: '#F4F7FD', fontSize: 14, fontWeight: 600, cursor: 'pointer', boxShadow: '0 4px 14px rgba(30,77,140,0.38)', transition: 'background 0.15s ease', fontFamily: 'DM Sans, ui-sans-serif, sans-serif' }}
        onMouseEnter={e => e.currentTarget.style.background = '#123470'}
        onMouseLeave={e => e.currentTarget.style.background = '#1E4D8C'}
        aria-label="Contact us"
      >
        {open ? (
          <>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="#F4F7FD" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>Close</span>
          </>
        ) : (
          <>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#F4F7FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.1 0h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <span>Contact Us</span>
          </>
        )}
      </motion.button>
    </div>
  )
}
