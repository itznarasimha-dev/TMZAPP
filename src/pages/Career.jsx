import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { careers } from '../data.jsx'

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4, delay },
})

const CareerHero = () => (
  <section className="bg-surface page-top" style={{ paddingBottom: 0 }}>
    <div className="wrap" style={{ paddingTop: 64, paddingBottom: 48 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24, alignItems: 'end' }} className="career-hero-grid">
        <div>
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="eyebrow" style={{ marginBottom: 16 }}>
            We're Hiring
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="t-h1">
            Come work on things{' '}
            <span style={{ color: '#3B7DD8' }}>that actually ship</span>
          </motion.h1>
        </div>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          style={{ fontSize: 16, color: '#4A6A8A', lineHeight: 1.7, maxWidth: 360, alignSelf: 'end' }}
          className="career-hero-desc"
        >
          A small, focused team in Hyderabad. We build real products for real clients, move fast, and care about the quality of our work.
        </motion.p>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
        style={{ display: 'flex', gap: 0, borderTop: '1px solid #AECAEC', marginTop: 40, paddingTop: 24, flexWrap: 'wrap' }}
      >
        {[
          { value: '35+',  label: 'Team members' },
          { value: '100%', label: 'Remote friendly' },
          { value: '40+',  label: 'Countries served' },
        ].map((s, i) => (
          <div key={s.label} style={{ paddingRight: 32, marginRight: 32, borderRight: i < 2 ? '1px solid #AECAEC' : 'none' }}>
            <p className="stat-value" style={{ fontSize: 28, marginBottom: 2 }}>{s.value}</p>
            <p style={{ fontSize: 12, color: '#4A6A8A', fontWeight: 500 }}>{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
    <div className="divider" />
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
  const [form, setForm] = useState({ name: '', email: '', role: '', linkedin: '', message: '' })
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Job Application — ${form.role || 'Open Role'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nRole: ${form.role}\nLinkedIn: ${form.linkedin}\n\nCover Letter:\n${form.message}`
    )
    window.location.href = `mailto:Info@tzmicha.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="apply" className="section bg-surface" style={{ borderTop: '1px solid #AECAEC' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48 }} className="apply-grid">
          <div>
            <SectionHeading eyebrow="Apply" title="Introduce yourself" description="No cover letter template needed. Just tell us who you are, what you've worked on, and what excites you." align="left" />
          </div>

          <motion.div {...fadeIn(0.1)} className="card card-p-lg">
            <div style={{ background: '#E8F0FB', border: '1px solid #C2D8F5', borderRadius: 8, padding: '10px 14px', marginBottom: 20, fontSize: 13, color: '#0A1628', display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B7DD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>This will open your email client to send your application to{' '}
                <strong style={{ color: '#3B7DD8' }}>Info@tzmicha.com</strong>
              </span>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }} className="apply-form-row">
                <div>
                  <label className="field-label">Full Name *</label>
                  <input name="name" required value={form.name} onChange={onChange} className="field-input" placeholder="Alex Johnson" />
                </div>
                <div>
                  <label className="field-label">Email *</label>
                  <input name="email" type="email" required value={form.email} onChange={onChange} className="field-input" placeholder="alex@company.com" />
                </div>
              </div>
              <div>
                <label className="field-label">Role Applying For *</label>
                <select name="role" required value={form.role} onChange={onChange} className="field-input" style={{ color: form.role ? '#0A1628' : '#7A9ABE' }}>
                  <option value="">Select a role...</option>
                  {careers.map(j => <option key={j.title} value={j.title}>{j.title}</option>)}
                  <option value="Other / Open Application">Other / Open Application</option>
                </select>
              </div>
              <div>
                <label className="field-label">LinkedIn / Portfolio URL</label>
                <input name="linkedin" value={form.linkedin} onChange={onChange} className="field-input" placeholder="https://linkedin.com/in/yourprofile" />
              </div>
              <div>
                <label className="field-label">Cover Letter / Message *</label>
                <textarea name="message" required rows={5} value={form.message} onChange={onChange} className="field-input" style={{ resize: 'none', fontFamily: 'inherit' }} placeholder="What have you built? What do you care about? Why TZMicha?" />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ borderRadius: 10, width: '100%' }}>
                Send my application
              </button>
            </form>
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
