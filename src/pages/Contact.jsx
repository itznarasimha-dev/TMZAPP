import { useState } from 'react'
import { motion } from 'framer-motion'
import { faqs } from '../data.jsx'
import contactBg from '../assets/contact page background.jpg'
import contact2Bg from '../assets/contact 2.jpg'

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4, delay },
})

const ContactHero = () => (
  <section className="bg-surface page-top" style={{ paddingBottom: 0, backgroundImage: `url(${contactBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 100%)' }} />
    <div className="wrap" style={{ paddingTop: 100, paddingBottom: 64, position: 'relative', zIndex: 1 }}>
      <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="eyebrow" style={{ marginBottom: 16, color: '#93C5FD' }}>
        Get In Touch
      </motion.p>
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="t-h1" style={{ maxWidth: 560, color: '#FFFFFF', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
        Got a project in mind?{' '}
        <span style={{ color: '#60AEDE' }}>Let's talk.</span>
      </motion.h1>
    </div>
  </section>
)

const ContactMain = () => {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)
    try {
      const res = await fetch('https://formspree.io/f/xpwzgkod', {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      })
      if (res.ok) { setStatus('success'); e.target.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section className="section" style={{ background: '#DDEAF7' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'start' }} className="contact-grid">

          <motion.div {...fadeIn(0)}>
            <p style={{ fontSize: 22, fontWeight: 800, color: '#0A1628', letterSpacing: '-0.02em', marginBottom: 8 }}>
              Drop us a message
            </p>
            <p style={{ fontSize: 15, color: '#4A6A8A', lineHeight: 1.7, marginBottom: 32, maxWidth: 360 }}>
              Fill in the form and we'll come back to you within 24 hours — no sales pitch, just a real conversation.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid #AECAEC', borderRadius: 12, overflow: 'hidden', background: '#EEF3FB', marginBottom: 24 }}>
              {[
                { label: 'Email',    value: 'Info@tzmicha.com',  href: 'mailto:Info@tzmicha.com' },
                { label: 'Phone',    value: '+91 83415 51387',   href: 'tel:+918341551387' },
                { label: 'Response', value: 'Within 24 hours',   href: null },
              ].map((item, i, arr) => (
                <div key={item.label} style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: i < arr.length - 1 ? '1px solid #AECAEC' : 'none' }}>
                  <p style={{ fontSize: 11, fontWeight: 600, color: '#4A6A8A', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} style={{ fontSize: 13, fontWeight: 600, color: '#0A1628', textDecoration: 'none', transition: 'color 0.15s ease' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#60AEDE'}
                        onMouseLeave={e => e.currentTarget.style.color = '#0A1628'}
                      >{item.value}</a>
                    : <p style={{ fontSize: 13, fontWeight: 600, color: '#0A1628' }}>{item.value}</p>
                  }
                </div>
              ))}
            </div>

            <div style={{ padding: '16px 20px', border: '1px solid #AECAEC', borderRadius: 10, background: '#EEF3FB' }}>
              <p style={{ fontSize: 11, fontWeight: 600, color: '#4A6A8A', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 6 }}>Office</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: '#0A1628', marginBottom: 2 }}>TZMicha Technologies, Inc.</p>
              <p style={{ fontSize: 13, color: '#4A6A8A' }}>Hyderabad, Telangana, India</p>
            </div>
          </motion.div>

          <motion.div {...fadeIn(0.1)} className="card card-p-lg">
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#E8F0FB', border: '1px solid #C2D8F5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 22 }}>✓</div>
                <p style={{ fontSize: 18, fontWeight: 700, color: '#0A1628', marginBottom: 6 }}>Message sent!</p>
                <p style={{ fontSize: 14, color: '#4A6A8A' }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }} className="form-row">
                  <div>
                    <label className="field-label">Full Name *</label>
                    <input name="name" required className="field-input" placeholder="Alex Johnson" />
                  </div>
                  <div>
                    <label className="field-label">Business Email *</label>
                    <input name="email" type="email" required className="field-input" placeholder="alex@company.com" />
                  </div>
                </div>
                <div>
                  <label className="field-label">Company</label>
                  <input name="company" className="field-input" placeholder="Company Name" />
                </div>
                <div>
                  <label className="field-label">Service Interest</label>
                  <select name="service" className="field-input" style={{ color: '#0A1628' }}>
                    <option value="">Select a service...</option>
                    {['Web Development', 'Mobile Apps', 'AI Solutions', 'Automation', 'Full Product Build', 'Other'].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="field-label">Project Brief *</label>
                  <textarea name="message" required rows={5} className="field-input" style={{ resize: 'none', fontFamily: 'inherit' }} placeholder="Describe your project, goals, and timeline..." />
                </div>
                {status === 'error' && (
                  <div className="state-error">Something went wrong. Please try again or email us directly.</div>
                )}
                <button type="submit" disabled={status === 'sending'} className="btn btn-primary btn-lg"
                  style={{ width: '100%', borderRadius: 10, opacity: status === 'sending' ? 0.6 : 1 }}>
                  {status === 'sending' ? 'Sending...' : 'Send it over'}
                </button>
                <p style={{ textAlign: 'center', fontSize: 12, color: '#4A6A8A' }}>We'll get back to you within 24 hours. No spam, ever.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const IconGlobe = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
  </svg>
)
const IconShield = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)
const IconMapPin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)

const infoTiles = [
  { icon: <IconGlobe />,  value: '40+',   label: 'Countries',      detail: 'We work across every timezone with async-friendly processes.' },
  { icon: <IconShield />, value: 'SOC 2', label: 'Security ready', detail: 'Enterprise-grade security baked into every project from day one.' },
  { icon: <IconMapPin />, value: 'HYD',   label: 'Based in India', detail: 'Headquartered in Hyderabad, serving clients globally.' },
]

const InfoBand = () => (
  <section className="bg-surface" style={{ borderTop: '1px solid #AECAEC', borderBottom: '1px solid #AECAEC' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {infoTiles.map((item, i) => (
          <motion.div key={item.label} {...fadeIn(i * 0.07)}
            style={{ padding: '24px 20px', borderRight: i < infoTiles.length - 1 ? '1px solid #AECAEC' : 'none', display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}
          >
            <div style={{ width: 36, height: 36, borderRadius: 8, background: '#C8DCFA', border: '1px solid #7AAAD8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginBottom: 4, color: '#1E4D8C' }}>
              {item.icon}
            </div>
            <p style={{ fontSize: 20, fontWeight: 800, color: '#60AEDE', letterSpacing: '-0.02em', lineHeight: 1 }}>{item.value}</p>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#0A1628' }}>{item.label}</p>
            <p style={{ fontSize: 12, color: '#4A6A8A', lineHeight: 1.55 }}>{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const FaqSection = () => {
  const [open, setOpen] = useState(null)
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <img src={contact2Bg} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }} />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'start' }} className="faq-grid">
          <div>
            <p className="eyebrow" style={{ marginBottom: 12, color: '#60AEDE' }}>FAQ</p>
            <h2 className="t-h2" style={{ marginBottom: 12, color: '#FFFFFF' }}>Common questions</h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
              Everything you need to know before starting a conversation with us.
            </p>
          </div>
          <div style={{ maxWidth: 680, margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid rgba(255,255,255,0.25)', borderRadius: 12, overflow: 'hidden', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
            {faqs.map((faq, i) => (
              <motion.div key={faq.question} {...fadeIn(i * 0.04)} style={{ borderBottom: i < faqs.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: '100%', textAlign: 'left', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', gap: 16 }}
                >
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#FFFFFF' }}>{faq.question}</span>
                  <span style={{ fontSize: 20, color: '#60AEDE', fontWeight: 400, flexShrink: 0, lineHeight: 1, transform: open === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s ease', display: 'block' }}>+</span>
                </button>
                {open === i && (
                  <div style={{ padding: '0 20px 16px', borderTop: '1px solid #AECAEC' }}>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, paddingTop: 12 }}>{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Contact() {
  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .contact-grid { grid-template-columns: 1fr 1.4fr !important; }
          .form-row { grid-template-columns: 1fr 1fr !important; }
          .faq-grid { grid-template-columns: 1fr 2fr !important; }
        }
      `}</style>
      <ContactHero />
      <ContactMain />
      <InfoBand />
      <FaqSection />
    </>
  )
}
