import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data.jsx'

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4, delay },
})

const ProjectsHero = () => (
  <section className="bg-surface page-top" style={{ paddingBottom: 0 }}>
    <div className="wrap" style={{ paddingTop: 64, paddingBottom: 48 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24, alignItems: 'end' }} className="proj-hero-grid">
        <div>
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="eyebrow" style={{ marginBottom: 16 }}>
            Our Work
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="t-h1">
            Some of the things{' '}
            <span style={{ color: '#3B7DD8' }}>we've built</span>
          </motion.h1>
        </div>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          style={{ fontSize: 16, color: '#4A6A8A', lineHeight: 1.7, maxWidth: 380, alignSelf: 'end' }}
          className="proj-hero-desc"
        >
          These are real projects with real results. The goal is always the same: does it actually work for the people using it?
        </motion.p>
      </div>
    </div>
    <div className="divider" />
  </section>
)

const ProjectsGrid = () => (
  <section className="section" style={{ background: '#DDEAF7' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }} className="proj-grid">
        {projects.map((p, i) => <ProjectCard key={p.title} {...p} index={i} />)}
      </div>
    </div>
  </section>
)

const impactStats = [
  { value: '2.8×',     label: 'Avg revenue growth',  note: 'Year one, across clients' },
  { value: '40%',      label: 'Cost savings',         note: 'Through automation' },
  { value: '10 weeks', label: 'Time to launch',       note: 'Idea to production' },
  { value: '$50M+',    label: 'Revenue generated',    note: 'For client businesses' },
]

const ImpactBand = () => (
  <section className="bg-surface" style={{ borderTop: '1px solid #AECAEC', borderBottom: '1px solid #AECAEC' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} className="impact-grid">
        {impactStats.map((s, i) => (
          <motion.div key={s.label} {...fadeIn(i * 0.06)}
            style={{ padding: '32px 24px', borderRight: i % 2 === 0 ? '1px solid #AECAEC' : 'none', borderBottom: i < 2 ? '1px solid #AECAEC' : 'none' }}
            className="impact-cell"
          >
            <p className="stat-value" style={{ marginBottom: 4 }}>{s.value}</p>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#0A1628', marginBottom: 2 }}>{s.label}</p>
            <p style={{ fontSize: 11, color: '#4A6A8A' }}>{s.note}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const ProjectsCTA = () => (
  <section className="section bg-surface">
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32, alignItems: 'center' }} className="proj-cta-grid">
        <div>
          <p className="eyebrow" style={{ marginBottom: 16 }}>What's next?</p>
          <h2 className="t-h2" style={{ marginBottom: 12 }}>Ready to be our next great project?</h2>
          <p style={{ fontSize: 15, color: '#4A6A8A', lineHeight: 1.7, maxWidth: 400 }}>
            We're selective — but we're always happy to have an honest conversation about what you're building.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn btn-primary btn-lg">Start your project</Link>
          <Link to="/about" className="btn btn-outline btn-lg">About us</Link>
        </div>
      </div>
    </div>
  </section>
)

export default function Projects() {
  return (
    <>
      <style>{`
        @media (min-width: 640px) {
          .proj-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (min-width: 768px) {
          .proj-hero-grid { grid-template-columns: 1.2fr 1fr !important; }
        }
        @media (min-width: 1024px) {
          .proj-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .impact-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .impact-cell { border-bottom: none !important; }
          .impact-cell:not(:last-child) { border-right: 1px solid #AECAEC !important; }
          .proj-cta-grid { grid-template-columns: 1.5fr 1fr !important; }
        }
      `}</style>
      <ProjectsHero />
      <ProjectsGrid />
      <ImpactBand />
      <ProjectsCTA />
    </>
  )
}
