import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import TestimonialCard from '../components/TestimonialCard'
import { services, projects, processSteps, testimonials, whyChoose } from '../data.jsx'
import bgVideo from '../assets/backgound_tzm.mp4'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.25, 0.1, 0.25, 1] },
})

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.4, delay, ease: [0.25, 0.1, 0.25, 1] },
})

const Hero = () => (
  <section style={{ paddingTop: 64, paddingBottom: 0, position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
    <motion.video
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.8, ease: 'easeOut' }}
      autoPlay muted loop playsInline aria-hidden="true"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none', zIndex: 0 }}
    >
      <source src={bgVideo} type="video/mp4" />
    </motion.video>

    <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(5,12,30,0.58)', pointerEvents: 'none', zIndex: 1 }} />

    <div className="wrap" style={{ paddingTop: 64, paddingBottom: 0, position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 'calc(100vh - 64px)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center', paddingBottom: 64 }} className="hero-grid">
        <div style={{ maxWidth: 600 }}>
          <motion.p {...fade(0)} className="eyebrow" style={{ marginBottom: 20, color: '#60AEDE' }}>
            Technology Studio · Hyderabad, India
          </motion.p>
          <motion.h1 {...fade(0.08)} className="t-display" style={{ marginBottom: 20, color: '#F4F7FD' }}>
            We build things<br />
            <span style={{ color: '#60AEDE' }}>that actually work.</span>
          </motion.h1>
          <motion.p {...fade(0.15)} style={{ fontSize: 17, lineHeight: 1.7, color: '#7AAAD8', maxWidth: 480, marginBottom: 32 }}>
            TZMicha is a technology studio based in Hyderabad. We design, build, and ship digital products for founders and teams who care about getting it right.
          </motion.p>
          <motion.div {...fade(0.22)} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Start a project</Link>
            <Link to="/projects" className="btn btn-outline btn-lg" style={{ background: 'rgba(96,174,222,0.10)', borderColor: 'rgba(96,174,222,0.35)', color: '#C2D8F5' }}>See our work</Link>
          </motion.div>
        </div>

        <motion.div {...fade(0.1)} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="hero-stats">
          {[
            { value: '150+', label: 'Projects shipped',   note: 'Since 2020' },
            { value: '98%',  label: 'Client retention',   note: 'Come back for more' },
            { value: '10wk', label: 'Avg time to launch', note: 'Idea to production' },
            { value: '40+',  label: 'Countries',          note: 'Global client base' },
          ].map(s => (
            <div key={s.label} style={{ padding: 20, background: 'rgba(8,20,50,0.62)', border: '1px solid rgba(96,174,222,0.18)', borderRadius: 14, backdropFilter: 'blur(8px)' }}>
              <p className="stat-value" style={{ marginBottom: 4, color: '#60AEDE' }}>{s.value}</p>
              <p style={{ fontSize: 12, fontWeight: 600, color: '#A0C8E8', marginBottom: 2 }}>{s.label}</p>
              <p style={{ fontSize: 11, color: '#3A6A9E' }}>{s.note}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div style={{ borderTop: '1px solid rgba(96,174,222,0.18)', paddingTop: 20, paddingBottom: 20, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 12, color: '#3A6A9E', marginRight: 8 }}>Trusted by teams at</span>
        {['Startups', 'SaaS Companies', 'HealthTech', 'FinTech', 'AI Ventures', 'E-commerce'].map(c => (
          <span key={c} style={{ fontSize: 12, fontWeight: 600, color: '#7AAAD8', padding: '3px 10px', borderRadius: 4, background: 'rgba(96,174,222,0.10)', border: '1px solid rgba(96,174,222,0.22)' }}>{c}</span>
        ))}
      </div>
    </div>
  </section>
)

const ServicesPreview = () => (
  <section className="section bg-surface">
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16, marginBottom: 48 }} className="two-col-header">
        <SectionHeading eyebrow="What We Do" title="Things we're genuinely good at" align="left" />
        <p style={{ fontSize: 15, color: '#4A6A8A', lineHeight: 1.7, maxWidth: 400, alignSelf: 'end' }} className="services-desc">
          We focus on the areas where we can do excellent work — and turn down projects where we can't. No filler services.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 1, background: '#7AAAD8', border: '1px solid #7AAAD8', borderRadius: 14, overflow: 'hidden' }} className="services-grid">
        {services.slice(0, 6).map((s, i) => (
          <motion.div key={s.title} {...fadeIn(i * 0.05)} style={{ background: '#EEF3FB', padding: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: '#C8DCFA', border: '1px solid #7AAAD8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#1E4D8C' }}>
              {s.icon}
            </div>
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0A1628', marginBottom: 6 }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: '#4A6A8A', lineHeight: 1.65, marginBottom: 12 }}>{s.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {s.stack.slice(0, 3).map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end' }}>
        <Link to="/services" className="link-arrow">
          View all services
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="#1E4D8C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  </section>
)

const WhySection = () => (
  <section className="section" style={{ background: '#DDEAF7' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'start' }} className="why-grid">
        <div>
          <SectionHeading eyebrow="Why TZMicha" title="A technology partner that delivers results, not excuses" description="We don't just build software — we build businesses. Every engagement is designed to move the needle on what matters most." align="left" />
          <Link to="/about" className="link-arrow" style={{ marginTop: 24, display: 'inline-flex' }}>
            Learn about us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="#1E4D8C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderRadius: 12, overflow: 'hidden', border: '1px solid #7AAAD8' }}>
          {whyChoose.map((item, i) => (
            <motion.div key={item.title} {...fadeIn(i * 0.05)} style={{ background: '#EEF3FB', padding: '18px 24px', display: 'flex', gap: 16, alignItems: 'flex-start', borderBottom: i < whyChoose.length - 1 ? '1px solid #AECAEC' : 'none' }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: '#C8DCFA', border: '1px solid #7AAAD8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1, color: '#1E4D8C' }}>
                {item.icon}
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#0A1628', marginBottom: 3 }}>{item.title}</p>
                <p style={{ fontSize: 12, color: '#4A6A8A', lineHeight: 1.6 }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

const ProcessSection = () => (
  <section className="section bg-surface">
    <div className="wrap">
      <SectionHeading eyebrow="Our Process" title="From vision to launch in weeks, not months" description="A refined delivery framework built around your business goals — not our billable hours." className="section-header" />

      <div className="process-grid-mobile">
        {processSteps.map((step, i) => (
          <motion.div key={step.step} {...fadeIn(i * 0.07)} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
              <div className="step-num">{step.icon}</div>
              {i < processSteps.length - 1 && <div style={{ width: 1, flex: 1, minHeight: 24, background: '#7AAAD8', marginTop: 6 }} />}
            </div>
            <div style={{ background: '#DDEAF7', border: '1px solid #AECAEC', borderRadius: 12, padding: '18px 20px', flex: 1, marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6, gap: 8, flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: '#0A1628' }}>{step.step}</h3>
                <span style={{ fontSize: 11, color: '#4A6A8A', fontWeight: 500, whiteSpace: 'nowrap' }}>{step.duration}</span>
              </div>
              <p style={{ fontSize: 12, color: '#1E3A5F', lineHeight: 1.65 }}>{step.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="process-grid-desktop">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 16, left: 16, right: 16, height: 1, background: '#7AAAD8', zIndex: 0 }} />
          {processSteps.map((step, i) => (
            <div key={step.step} style={{ position: 'relative', zIndex: 1 }}>
              <div className="step-num">{step.icon}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gap: 16 }} className="process-grid">
          {processSteps.map((step, i) => (
            <motion.div key={step.step} {...fadeIn(i * 0.07)} style={{ background: '#DDEAF7', border: '1px solid #AECAEC', borderRadius: 12, padding: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, gap: 8 }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: '#0A1628' }}>{step.step}</h3>
                <span style={{ fontSize: 11, color: '#4A6A8A', fontWeight: 500, whiteSpace: 'nowrap' }}>{step.duration}</span>
              </div>
              <p style={{ fontSize: 12, color: '#1E3A5F', lineHeight: 1.65 }}>{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

const FeaturedProjects = () => (
  <section className="section" style={{ background: '#DDEAF7' }}>
    <div className="wrap">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
        <SectionHeading eyebrow="Featured Work" title="Products that demonstrate real-world impact" align="left" />
        <Link to="/projects" className="link-arrow" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
          All projects
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="#1E4D8C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }} className="projects-grid">
        {projects.slice(0, 3).map((p, i) => <ProjectCard key={p.title} {...p} index={i} />)}
      </div>
    </div>
  </section>
)

const techStack = [
  { name: 'React', cat: 'Frontend' }, { name: 'Next.js', cat: 'Frontend' },
  { name: 'TypeScript', cat: 'Language' }, { name: 'Node.js', cat: 'Backend' },
  { name: 'Python', cat: 'Backend' }, { name: 'PostgreSQL', cat: 'Database' },
  { name: 'Redis', cat: 'Database' }, { name: 'AWS', cat: 'Cloud' },
  { name: 'GCP', cat: 'Cloud' }, { name: 'Docker', cat: 'DevOps' },
  { name: 'Kubernetes', cat: 'DevOps' }, { name: 'OpenAI', cat: 'AI' },
  { name: 'TensorFlow', cat: 'AI' }, { name: 'GraphQL', cat: 'API' },
  { name: 'Figma', cat: 'Design' }, { name: 'Tailwind', cat: 'Frontend' },
]

const TechStack = () => (
  <section className="section bg-surface">
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center' }} className="tech-grid">
        <SectionHeading eyebrow="Technology Stack" title="Modern, battle-tested tools" description="We work with the best modern technologies across the entire stack — chosen for reliability and performance, not trends." align="left" />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {techStack.map(t => (
            <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 8, background: '#C8DCFA', border: '1px solid #7AAAD8', boxShadow: '0 1px 2px rgba(30,77,140,0.06)' }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#0A1628' }}>{t.name}</span>
              <span style={{ fontSize: 10, fontWeight: 500, color: '#4A6A8A' }}>{t.cat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

const Testimonials = () => (
  <section className="section" style={{ background: '#DDEAF7' }}>
    <div className="wrap">
      <SectionHeading eyebrow="Client Testimonials" title="What our clients say" description="Hear directly from the founders and engineering leaders we've worked with." className="section-header" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }} className="testimonials-grid">
        {testimonials.map((t, i) => <TestimonialCard key={t.name} {...t} index={i} />)}
      </div>
    </div>
  </section>
)

const CTA = () => (
  <section className="section bg-surface" style={{ borderTop: '1px solid #AECAEC' }}>
    <div className="wrap">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32, alignItems: 'center' }} className="cta-grid">
        <div>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Ready to start?</p>
          <h2 className="t-h1" style={{ marginBottom: 16 }}>
            Let's build something<br />
            <span style={{ color: '#3B7DD8' }}>you're proud of.</span>
          </h2>
          <p style={{ fontSize: 16, color: '#4A6A8A', lineHeight: 1.7, maxWidth: 440 }}>
            Whether you're just getting started, trying to scale, or rescuing something that went sideways — we're happy to talk through it honestly.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Start your project</Link>
            <Link to="/projects" className="btn btn-outline btn-lg">View our work</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['Reply within 24 hours', 'Free first conversation', 'No pressure, no obligation'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="7" fill="#3B7DD8" />
                  <path d="M4 7l2 2 4-4" stroke="#F4F7FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: 13, color: '#4A6A8A' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Styles = () => (
  <style>{`
    @media (min-width: 640px) {
      .services-grid { grid-template-columns: 1fr 1fr !important; }
      .projects-grid { grid-template-columns: 1fr 1fr !important; }
      .testimonials-grid { grid-template-columns: 1fr 1fr !important; }
    }
    @media (min-width: 1024px) {
      .hero-grid     { grid-template-columns: 1.15fr 0.85fr !important; }
      .hero-stats    { max-width: 400px; }
      .two-col-header { grid-template-columns: 1fr 1fr !important; align-items: end; }
      .services-desc { display: block !important; }
      .services-grid { grid-template-columns: 1fr 1fr 1fr !important; }
      .why-grid      { grid-template-columns: 1fr 1fr !important; }
      .projects-grid { grid-template-columns: repeat(3, 1fr) !important; }
      .tech-grid     { grid-template-columns: 1fr 1.5fr !important; }
      .testimonials-grid { grid-template-columns: repeat(3, 1fr) !important; }
      .cta-grid      { grid-template-columns: 1.2fr 1fr !important; gap: 64px !important; }
      .process-grid-mobile { display: none !important; }
      .process-grid-desktop { display: block !important; }
      .process-grid  { grid-template-columns: repeat(6, 1fr) !important; }
    }
    @media (max-width: 1023px) {
      .process-grid-mobile { display: flex !important; flex-direction: column; }
      .process-grid-desktop { display: none !important; }
    }
    @media (max-width: 639px) {
      .hero-stats { grid-template-columns: 1fr 1fr !important; }
    }
  `}</style>
)

export default function Home() {
  return (
    <>
      <Styles />
      <Hero />
      <ServicesPreview />
      <WhySection />
      <ProcessSection />
      <FeaturedProjects />
      <TechStack />
      <Testimonials />
      <CTA />
    </>
  )
}
