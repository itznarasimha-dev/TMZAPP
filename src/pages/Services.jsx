import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { services } from '../data.jsx'

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.4, delay },
})

const ServicesHero = () => (
  <section className="bg-surface page-top" style={{ paddingBottom: 0 }}>
    <div className="wrap" style={{ paddingTop: 64, paddingBottom: 48 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24, alignItems: 'end' }} className="services-hero-grid">
        <div>
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="eyebrow" style={{ marginBottom: 16 }}>
            Our Services
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="t-h1">
            The things we build,{' '}
            <span style={{ color: '#3B7DD8' }}>and how we build them</span>
          </motion.h1>
        </div>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          style={{ fontSize: 16, color: '#4A6A8A', lineHeight: 1.7, maxWidth: 400, alignSelf: 'end' }}
          className="services-hero-desc"
        >
          We focus on the areas where we genuinely excel — and we're honest with you when something isn't in our wheelhouse.
        </motion.p>
      </div>
    </div>
    <div className="divider" />
  </section>
)

const ServicesGrid = () => (
  <section className="section" style={{ background: '#DDEAF7' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }} className="svc-grid">
        {services.map((s, i) => (
          <motion.article key={s.title} {...fadeIn(i * 0.05)} className="card" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '24px 28px', borderBottom: '1px solid #AECAEC', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: '#C8DCFA', border: '1px solid #7AAAD8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#1E4D8C' }}>
                {s.icon}
              </div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0A1628', marginBottom: 2 }}>{s.title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {s.stack.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0 }} className="svc-card-body">
              <div style={{ padding: '20px 28px' }} className="svc-desc">
                <p style={{ fontSize: 13, color: '#4A6A8A', lineHeight: 1.7 }}>{s.description}</p>
              </div>
              <div style={{ padding: '20px 28px', borderTop: '1px solid #AECAEC' }} className="svc-benefits">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#1E4D8C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>What you get</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {s.benefits.map(b => (
                    <div key={b} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                        <circle cx="7" cy="7" r="7" fill="#3B7DD8" />
                        <path d="M4 7l2 2 4-4" stroke="#F4F7FD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: 12, color: '#1E3A5F', lineHeight: 1.55 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ padding: '20px 28px', borderTop: '1px solid #AECAEC', background: '#C8DCFA' }} className="svc-outcome">
                <p style={{ fontSize: 10, fontWeight: 700, color: '#1E4D8C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>What it means for you</p>
                <p style={{ fontSize: 13, color: '#0A1628', lineHeight: 1.6, fontWeight: 500 }}>{s.outcome}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

const ServicesCTA = () => (
  <section className="section bg-surface" style={{ borderTop: '1px solid #AECAEC' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32, alignItems: 'center' }} className="svc-cta-grid">
        <div>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Not sure where to start?</p>
          <h2 className="t-h2" style={{ marginBottom: 12 }}>Tell us what you're trying to do</h2>
          <p style={{ fontSize: 15, color: '#4A6A8A', lineHeight: 1.7, maxWidth: 400 }}>
            Most good projects don't fit neatly into a category. We'll work it out together in a free, no-pressure conversation.
          </p>
        </div>
        <div>
          <Link to="/contact" className="btn btn-primary btn-lg">Have a conversation</Link>
        </div>
      </div>
    </div>
  </section>
)

export default function Services() {
  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .services-hero-grid { grid-template-columns: 1.2fr 1fr !important; }
          .svc-grid { grid-template-columns: 1fr 1fr !important; }
          .svc-cta-grid { grid-template-columns: 1.5fr 1fr !important; }
        }
        @media (min-width: 1024px) {
          .svc-card-body { grid-template-columns: 1.5fr 1fr 1fr !important; gap: 0 !important; }
          .svc-benefits  { border-top: none !important; border-right: 1px solid #AECAEC !important; border-left: 1px solid #AECAEC !important; }
          .svc-outcome   { border-top: none !important; }
          .svc-desc      { border-right: 1px solid #AECAEC !important; }
        }
      `}</style>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </>
  )
}
