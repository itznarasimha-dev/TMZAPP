import { motion } from 'framer-motion'

export default function ProjectCard({ title, industry, description, results, technologies, image, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.07 }}
      className="card card-interactive"
      style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
    >
      <div style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#C8DCFA', flexShrink: 0 }}>
        {image ? (
          <img src={image} alt={title} loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: '#DDEAF7' }} />
        )}
      </div>

      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          {industry && <span className="pill">{industry}</span>}
        </div>

        <h3 className="t-h3" style={{ marginBottom: 8, fontSize: 16 }}>{title}</h3>
        <p className="t-body-sm" style={{ marginBottom: 16, flex: 1 }}>{description}</p>

        {results && (
          <div style={{ background: '#DDEAF7', border: '1px solid #AECAEC', borderRadius: 8, padding: '10px 14px', marginBottom: 16 }}>
            <p style={{ fontSize: 10, fontWeight: 700, color: '#1E4D8C', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Impact</p>
            <p style={{ fontSize: 12, color: '#0A1628', lineHeight: 1.5 }}>{results}</p>
          </div>
        )}

        {technologies?.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {technologies.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        )}
      </div>
    </motion.article>
  )
}
