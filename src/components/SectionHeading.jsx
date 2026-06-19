import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, align = 'center', className = '', titleStyle = {}, descriptionStyle = {}, eyebrowStyle = {} }) {
  const isLeft   = align === 'left'
  const isCenter = align === 'center'

  return (
    <div className={className} style={{
      textAlign: isLeft ? 'left' : isCenter ? 'center' : 'right',
      maxWidth: isCenter ? 560 : 'none',
      marginLeft: isCenter ? 'auto' : undefined,
      marginRight: isCenter ? 'auto' : undefined,
    }}>
      {eyebrow && (
        <motion.p initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}
          className="eyebrow"
          style={{ marginBottom: 12, justifyContent: isLeft ? 'flex-start' : isCenter ? 'center' : 'flex-end', ...eyebrowStyle }}
        >{eyebrow}</motion.p>
      )}
      {title && (
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }}
          className="t-h2" style={titleStyle}
        >{title}</motion.h2>
      )}
      {description && (
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
          style={{ marginTop: 12, fontSize: 15, lineHeight: 1.7, color: '#8A92A6', maxWidth: 480, marginLeft: isCenter ? 'auto' : undefined, marginRight: isCenter ? 'auto' : undefined, ...descriptionStyle }}
        >{description}</motion.p>
      )}
    </div>
  )
}
