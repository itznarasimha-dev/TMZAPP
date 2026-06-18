import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { team } from '../data.jsx'

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.4, delay },
})

const AboutHero = () => (
  <section className="bg-surface page-top" style={{ paddingBottom: 0 }}>
    <div className="wrap" style={{ paddingTop: 64, paddingBottom: 48 }}>
      <div style={{ maxWidth: 680, marginBottom: 48 }}>
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="eyebrow" style={{ marginBottom: 20 }}>
          About TZMicha
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="t-h1" style={{ marginBottom: 16 }}>
          We help good ideas become{' '}
          <span style={{ color: '#3B7DD8' }}>great products</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          style={{ fontSize: 17, color: '#4A6A8A', lineHeight: 1.7, maxWidth: 520 }}>
          TZMicha is a technology studio based in Hyderabad. We're a small team of engineers, designers, and product people who genuinely care about what we build.
        </motion.p>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid #AECAEC', paddingTop: 24, gap: 0 }}
        className="fact-bar"
      >
        {[
          { label: 'Founded',   value: '2020' },
          { label: 'Based in',  value: 'Hyderabad, India' },
          { label: 'Team size', value: '35+ people' },
        ].map((f, i) => (
          <div key={f.label} style={{ padding: '16px 24px', borderRight: i < 2 ? '1px solid #AECAEC' : 'none', paddingLeft: i === 0 ? 0 : 24 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: '#4A6A8A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{f.label}</p>
            <p style={{ fontSize: 18, fontWeight: 800, color: '#0A1628', letterSpacing: '-0.02em' }}>{f.value}</p>
          </div>
        ))}
      </motion.div>
    </div>
    <div className="divider" />
  </section>
)

const StorySection = () => (
  <section className="section" style={{ background: '#DDEAF7' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48 }} className="story-grid">
        <SectionHeading eyebrow="Our Story" title="We started because we were frustrated too" align="left" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }} className="story-cards">
          {[
            { label: 'The honest problem', text: "Clients kept telling us the same story: they'd hired someone to build their product, got something that looked fine in demos, and then spent the next year trying to fix it. The gap between 'delivered' and 'actually works' was costing real money and real time." },
            { label: 'What we do differently', text: "We ask more questions before we write any code. We push back when something doesn't make sense. We build things we'd be happy to maintain ourselves. And we stay close to our clients — not just during the build, but after it." },
          ].map((item, i) => (
            <motion.div key={item.label} {...fadeIn(i * 0.1)} style={{ borderLeft: '3px solid #3B7DD8', paddingLeft: 20 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#1E4D8C', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>{item.label}</p>
              <p style={{ fontSize: 15, color: '#1E3A5F', lineHeight: 1.75 }}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

const values = [
  { title: 'Move fast, stay clean',     detail: "Shipping weekly keeps momentum. But we don't sacrifice quality to hit a date — we scope carefully so we can do both." },
  { title: 'Good work compounds',       detail: "Every decision we make is one you'll be living with for a while. We try to make sure you're glad you made it." },
  { title: 'Did it actually help?',     detail: "We care about whether the product moves the needle, not whether the Jira board is empty. Impact is the metric." },
  { title: 'No black boxes',            detail: "You get daily updates and weekly demos. If something is taking longer than expected, you hear it from us first." },
  { title: 'Always learning',           detail: "Technology moves fast. We read, experiment, and stay current — so your product benefits from what's working now." },
  { title: 'Your success is the point', detail: "We're not trying to rack up billable hours. We're trying to help you build something that works." },
]

const ValuesSection = () => (
  <section className="section bg-surface">
    <div className="wrap">
      <SectionHeading eyebrow="Our Values" title="Principles that guide every decision" className="section-header" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', border: '1px solid #AECAEC', borderRadius: 14, overflow: 'hidden' }} className="values-grid">
        {values.map((v, i) => (
          <motion.div key={v.title} {...fadeIn(i * 0.05)}
            style={{ padding: '20px 24px', background: '#EEF3FB', borderBottom: i < values.length - 1 ? '1px solid #AECAEC' : 'none', display: 'flex', gap: 16, alignItems: 'flex-start' }}
            className="values-row"
          >
            <div style={{ minWidth: 180, flexShrink: 0 }} className="values-title">
              <p style={{ fontSize: 14, fontWeight: 700, color: '#0A1628' }}>{v.title}</p>
            </div>
            <p style={{ fontSize: 13, color: '#4A6A8A', lineHeight: 1.7 }}>{v.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const TeamSection = () => (
  <section className="section" style={{ background: '#DDEAF7' }}>
    <div className="wrap">
      <SectionHeading eyebrow="Leadership Team" title="Built by operators from world-class companies" description="A small team of people who've built products at scale — and who care about the craft." className="section-header" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }} className="team-grid">
        {team.map((member, i) => (
          <motion.div key={member.name} {...fadeIn(i * 0.06)} className="card card-p" style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            <div className="avatar" style={{ width: 48, height: 48, fontSize: 14, flexShrink: 0 }}>{member.avatar}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap', marginBottom: 2 }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#0A1628' }}>{member.name}</p>
                <p style={{ fontSize: 12, color: '#3B7DD8', fontWeight: 600 }}>{member.role}</p>
              </div>
              <p style={{ fontSize: 11, color: '#4A6A8A', marginBottom: 8, fontWeight: 500 }}>{member.specialty}</p>
              <p style={{ fontSize: 13, color: '#4A6A8A', lineHeight: 1.65 }}>{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const AboutCTA = () => (
  <section className="section bg-surface" style={{ borderTop: '1px solid #AECAEC' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32, alignItems: 'center' }} className="about-cta-grid">
        <div>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Sounds like a fit?</p>
          <h2 className="t-h2" style={{ marginBottom: 12 }}>Let's have an honest conversation</h2>
          <p style={{ fontSize: 15, color: '#4A6A8A', lineHeight: 1.7, maxWidth: 420 }}>
            We're selective about who we work with — but we're always happy to hear what you're building and see if we're a good match.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn btn-primary btn-lg">Get In Touch</Link>
          <Link to="/projects" className="btn btn-outline btn-lg">View Our Work</Link>
        </div>
      </div>
    </div>
  </section>
)

export default function About() {
  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .fact-bar { grid-template-columns: repeat(3, 1fr) !important; }
          .story-grid { grid-template-columns: 1fr 1.5fr !important; align-items: start; }
          .values-grid { grid-template-columns: 1fr !important; }
          .values-row { flex-direction: row !important; }
          .team-grid  { grid-template-columns: 1fr 1fr !important; }
        }
        @media (min-width: 1024px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .team-grid   { grid-template-columns: repeat(3, 1fr) !important; }
          .about-cta-grid { grid-template-columns: 1.2fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .fact-bar { grid-template-columns: 1fr 1fr !important; }
          .values-row { flex-direction: column !important; }
          .values-title { min-width: auto !important; }
        }
      `}</style>
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <AboutCTA />
    </>
  )
}
