import { motion } from 'framer-motion'

export default function TestimonialCard({ quote, name, role, company, rating, avatar, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.07 }}
      className="card card-p"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#3B7DD8">
            <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.437.59 3.44L7 8.89l-3.09 1.622.59-3.44L2 4.635l3.455-.505z" />
          </svg>
        ))}
      </div>

      <p style={{ fontSize: 14, lineHeight: 1.7, color: '#1E3A5F', flex: 1, marginBottom: 24, fontStyle: 'italic' }}>
        "{quote}"
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid #AECAEC' }}>
        <div className="avatar" style={{ width: 36, height: 36, fontSize: 12 }}>{avatar}</div>
        <div>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#0A1628' }}>{name}</p>
          <p style={{ fontSize: 12, color: '#4A6A8A', marginTop: 1 }}>{role} · {company}</p>
        </div>
      </div>
    </motion.article>
  )
}
