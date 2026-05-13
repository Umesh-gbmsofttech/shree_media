import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`glass rounded-3xl p-6 shadow-soft ${className}`}
    >
      {children}
    </motion.div>
  )
}
