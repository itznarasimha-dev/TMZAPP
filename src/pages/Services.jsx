import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { services, SERVICE_IMAGES } from '../data.jsx'
import servicesBg from '../assets/services background.jpg'
import service2Bg from '../assets/service 2.jpg'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
}

function ServiceCard({ s }) {
  const img = SERVICE_IMAGES[s.title]

  return (
    <motion.article
      variants={cardVariants}
      className="svc-card"
    >
      {/* Image */}
      <div className="svc-img-wrap">
        {img ? (
          <img src={img} alt={s.title} loading="lazy" className="svc-img" />
        ) : (
          <div className="svc-img-fallback">
            <div className="svc-img-fallback-icon">{s.icon}</div>
          </div>
        )}
        <div className="svc-badge">{s.icon}</div>
      </div>

      {/* Body */}
      <div className="svc-body">
        <div style={{ marginBottom: 12 }}>
          <h3 className="svc-title">{s.title}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {s.stack.slice(0, 4).map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        <div style={{ height: 1, background: '#E4EDF8', marginBottom: 14 }} />

        <p className="svc-desc">{s.description}</p>

        <div style={{ marginBottom: 16 }}>
          <p className="svc-label">What you get</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {s.benefits.map(b => (
              <div key={b} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                  <circle cx="7" cy="7" r="7" fill="#3B7DD8" />
                  <path d="M4 7l2 2 4-4" stroke="#F4F7FD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: 12.5, color: '#1E3A5F', lineHeight: 1.55 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="svc-outcome">
          <p className="svc-label">Outcome</p>
          <p style={{ fontSize: 12.5, color: '#0A1628', lineHeight: 1.58, fontWeight: 500 }}>{s.outcome}</p>
        </div>
      </div>
    </motion.article>
  )
}

const ServicesHero = () => (
  <section style={{ backgroundImage: `url(${servicesBg})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 100%)' }} />
    <div className="wrap" style={{ paddingTop: 100, paddingBottom: 64, position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24, alignItems: 'end' }} className="services-hero-grid">
        <div>
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="eyebrow" style={{ marginBottom: 16, color: '#93C5FD' }}>
            Our Services
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="t-h1" style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            The things we build,{' '}
            <span style={{ color: '#60AEDE' }}>and how we build them</span>
          </motion.h1>
        </div>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, maxWidth: 400, alignSelf: 'end' }}
          className="services-hero-desc"
        >
          We focus on the areas where we genuinely excel and we're honest with you when something isn't in our wheelhouse.
        </motion.p>
      </div>
    </div>
  </section>
)

const ServicesGrid = () => (
  <section className="section" style={{ background: '#DDEAF7' }}>
    <div className="wrap">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }}
        className="svc-grid"
      >
        {services.map(s => <ServiceCard key={s.title} s={s} />)}
      </motion.div>
    </div>
  </section>
)

const ServicesCTA = () => (
  <section className="section" style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid #AECAEC' }}>
    <img src={service2Bg} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }} />
    <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32, alignItems: 'center' }} className="svc-cta-grid">
        <div>
          <p className="eyebrow" style={{ marginBottom: 16, color: '#60AEDE' }}>Not sure where to start?</p>
          <h2 className="t-h2" style={{ marginBottom: 12, color: '#FFFFFF' }}>Tell us what you're trying to do</h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, maxWidth: 400 }}>
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
          .svc-grid            { grid-template-columns: 1fr 1fr !important; }
          .svc-cta-grid        { grid-template-columns: 1.5fr 1fr !important; }
        }
        @media (min-width: 1280px) {
          .svc-grid { grid-template-columns: 1fr 1fr 1fr 1fr !important; }
        }

        /* ── Card ── */
        .svc-card {
          background: #F4F7FD;
          border: 1px solid #AECAEC;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
          cursor: default;
          transition: box-shadow 0.28s ease, border-color 0.28s ease, transform 0.28s ease;
        }
        .svc-card:hover {
          box-shadow: 0 16px 40px rgba(30,77,140,0.13);
          border-color: #7AAAD8;
          transform: translateY(-4px);
        }

        /* ── Image ── */
        .svc-img-wrap {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
          background: #DDEAF7;
          flex-shrink: 0;
        }
        .svc-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
          will-change: transform;
        }
        .svc-card:hover .svc-img {
          transform: scale(1.05);
        }
        .svc-img-fallback {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #C8DCFA 0%, #DDEAF7 50%, #E8F0FB 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .svc-img-fallback-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: #E8F0FB;
          border: 1px solid #C2D8F5;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1E4D8C;
        }

        /* ── Icon badge ── */
        .svc-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 2;
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: rgba(244,247,253,0.95);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(174,202,236,0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1E4D8C;
          box-shadow: 0 2px 6px rgba(30,77,140,0.10);
          transition: transform 0.22s ease;
        }
        .svc-card:hover .svc-badge {
          transform: scale(1.1);
        }

        /* ── Body ── */
        .svc-body {
          padding: 20px 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .svc-title {
          font-size: 16px;
          font-weight: 700;
          color: #0A1628;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        .svc-desc {
          font-size: 13px;
          color: #4A6A8A;
          line-height: 1.72;
          margin-bottom: 18px;
          flex: 1;
        }
        .svc-label {
          font-size: 10px;
          font-weight: 700;
          color: #1E4D8C;
          text-transform: uppercase;
          letter-spacing: 0.09em;
          margin-bottom: 10px;
        }
        .svc-outcome {
          padding: 12px 16px;
          background: linear-gradient(135deg, #DDEAF7 0%, #C8DCFA 100%);
          border: 1px solid #AECAEC;
          border-radius: 10px;
          margin-top: auto;
        }
      `}</style>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
    </>
  )
}
