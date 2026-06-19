import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { careers } from '../data.jsx'
import careerBg from '../assets/career background.jpg'
import careers2Bg from '../assets/careers 2.jpg'

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4, delay },
})

const CareerHero = () => (
  <section className="bg-surface page-top" style={{ paddingBottom: 0, backgroundImage: `url(${careerBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 100%)' }} />
    <div className="wrap" style={{ paddingTop: 100, paddingBottom: 64, position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24, alignItems: 'end' }} className="career-hero-grid">
        <div>
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="eyebrow" style={{ marginBottom: 16, color: '#93C5FD' }}>
            We're Hiring
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="t-h1" style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Come work on things{' '}
            <span style={{ color: '#60AEDE' }}>that actually ship</span>
          </motion.h1>
        </div>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, maxWidth: 360, alignSelf: 'end' }}
          className="career-hero-desc"
        >
          A small, focused team in Hyderabad. We build real products for real clients, move fast, and care about the quality of our work.
        </motion.p>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
        style={{ display: 'flex', gap: 0, borderTop: '1px solid rgba(255,255,255,0.2)', marginTop: 40, paddingTop: 24, flexWrap: 'wrap' }}
      >
        {[
          { value: '35+',  label: 'Team members' },
          { value: '100%', label: 'Remote friendly' },
          { value: '40+',  label: 'Countries served' },
        ].map((s, i) => (
          <div key={s.label} style={{ paddingRight: 32, marginRight: 32, borderRight: i < 2 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}>
            <p className="stat-value" style={{ fontSize: 28, marginBottom: 2, color: '#FFFFFF' }}>{s.value}</p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
)

const CareersList = () => {
  const [selected, setSelected] = useState(null)
  return (
    <section className="section" style={{ background: '#DDEAF7' }}>
      <div className="wrap">
        <SectionHeading eyebrow="Open Roles" title="Find something that fits" description="We hire for attitude and craft. Every application is reviewed personally." className="section-header" align="left" />
        <div style={{ border: '1px solid #AECAEC', borderRadius: 12, overflow: 'hidden', background: '#EEF3FB' }}>
          {careers.map((job, i) => (
            <motion.div key={job.title} {...fadeIn(i * 0.05)} style={{ borderBottom: i < careers.length - 1 ? '1px solid #AECAEC' : 'none' }}>
              <button
                type="button"
                onClick={() => setSelected(selected === i ? null : i)}
                style={{ width: '100%', textAlign: 'left', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 8 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 15, fontWeight: 700, color: '#0A1628' }}>{job.title}</span>
                    <span className="pill">{job.department}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                    <span style={{ fontSize: 12, color: '#4A6A8A' }}>{job.location}</span>
                    <span className="tag">{job.type}</span>
                    <span style={{ fontSize: 18, color: '#3B7DD8', fontWeight: 400, lineHeight: 1, transform: selected === i ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.2s ease', display: 'block' }}>+</span>
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {selected === i && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ overflow: 'hidden' }}>
                    <div style={{ padding: '0 24px 24px', borderTop: '1px solid #AECAEC', paddingTop: 16 }}>
                      <p style={{ fontSize: 14, color: '#4A6A8A', lineHeight: 1.75, marginBottom: 16 }}>{job.description}</p>
                      <a href="#apply" onClick={e => e.stopPropagation()} className="btn btn-primary btn-sm">
                        Apply for this role →
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ApplicationForm = () => {
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
    <section id="apply" style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid #AECAEC', paddingTop: 32, paddingBottom: 32 }}>
      <img src={careers2Bg} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '30% center', zIndex: 0 }} />
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48 }} className="apply-grid">
          <div>
            <SectionHeading eyebrow="Apply" title="Introduce yourself" description="No cover letter template needed. Just tell us who you are, what you've worked on, and what excites you." align="left" titleStyle={{ color: '#FFFFFF' }} descriptionStyle={{ color: 'rgba(255,255,255,0.75)' }} eyebrowStyle={{ color: '#60AEDE' }} />
          </div>

          <motion.div {...fadeIn(0.1)} className="card-p-lg" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 14 }}>
            <div style={{ background: '#E8F0FB', border: '1px solid #C2D8F5', borderRadius: 8, padding: '10px 14px', marginBottom: 20, fontSize: 13, color: '#0A1628', display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B7DD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>Your application will be sent directly to{' '}
                <strong style={{ color: '#3B7DD8' }}>Info@tzmicha.com</strong>
              </span>
            </div>

            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#E8F0FB', border: '1px solid #C2D8F5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 22 }}>✓</div>
                <p style={{ fontSize: 18, fontWeight: 700, color: '#0A1628', marginBottom: 6 }}>Application sent!</p>
                <p style={{ fontSize: 14, color: '#4A6A8A' }}>We'll review it and get back to you soon.</p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }} className="apply-form-row">
                <div>
                  <label className="field-label" style={{ color: 'rgba(255,255,255,0.85)' }}>Full Name *</label>
                  <input name="name" required className="field-input" placeholder="Alex Johnson" />
                </div>
                <div>
                  <label className="field-label" style={{ color: 'rgba(255,255,255,0.85)' }}>Email *</label>
                  <input name="email" type="email" required className="field-input" placeholder="alex@company.com" />
                </div>
              </div>
              <div>
                <label className="field-label" style={{ color: 'rgba(255,255,255,0.85)' }}>Role Applying For *</label>
                <select name="role" required className="field-input" style={{ color: '#0A1628' }}>
                  <option value="">Select a role...</option>
                  {careers.map(j => <option key={j.title} value={j.title}>{j.title}</option>)}
                  <option value="Other / Open Application">Other / Open Application</option>
                </select>
              </div>
              <div>
                <label className="field-label" style={{ color: 'rgba(255,255,255,0.85)' }}>LinkedIn / Portfolio URL</label>
                <input name="linkedin" className="field-input" placeholder="https://linkedin.com/in/yourprofile" />
              </div>
              <div>
                <label className="field-label" style={{ color: 'rgba(255,255,255,0.85)' }}>Cover Letter / Message *</label>
                <textarea name="message" required rows={5} className="field-input" style={{ resize: 'none', fontFamily: 'inherit' }} placeholder="What have you built? What do you care about? Why TZMicha?" />
              </div>
              {status === 'error' && (
                <div className="state-error">Something went wrong. Please try again or email us directly.</div>
              )}
              <button type="submit" disabled={status === 'sending'} className="btn btn-primary btn-lg"
                style={{ borderRadius: 10, width: '100%', opacity: status === 'sending' ? 0.6 : 1 }}>
                {status === 'sending' ? 'Sending...' : 'Send my application'}
              </button>
            </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function Career() {
  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .career-hero-grid { grid-template-columns: 1.2fr 1fr !important; }
          .apply-grid { grid-template-columns: 1fr 1.6fr !important; align-items: start !important; }
          .apply-form-row { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
      <CareerHero />
      <CareersList />
      <ApplicationForm />
    </>
  )
}
