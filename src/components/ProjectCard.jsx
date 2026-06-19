import { motion } from 'framer-motion'

export default function ProjectCard({ title, industry, description, results, technologies, image, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.07 }}
      className="proj-card"
    >
      <div className="proj-img-wrap">
        {image ? (
          <img src={image} alt={title} loading="lazy" className="proj-img" />
        ) : (
          <div style={{ width: '100%', height: '100%', background: '#DDEAF7' }} />
        )}
      </div>

      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ marginBottom: 12 }}>
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

      <style>{`
        .proj-card {
          background: var(--color-card);
          border: 1px solid var(--color-border);
          border-radius: var(--r-lg);
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
        }
        .proj-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-3px);
          border-color: var(--color-border-2);
        }
        .proj-img-wrap {
          aspect-ratio: 16/9;
          overflow: hidden;
          background: #C8DCFA;
          flex-shrink: 0;
        }
        .proj-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.45s cubic-bezier(0.25, 0.1, 0.25, 1);
          will-change: transform;
        }
        .proj-card:hover .proj-img {
          transform: scale(1.04);
        }
      `}</style>
    </motion.article>
  )
}
