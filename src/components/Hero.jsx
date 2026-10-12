import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

const stats = [
  { val: '₹1.80 Cr', lbl: 'Prime format (indicative)' },
  { val: '₹3.20 Cr', lbl: 'Luxury format (indicative)' },
  { val: '12 Nov 2026', lbl: 'Flagship opens, Sector-122 Noida' },
]

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg" aria-hidden="true">
        <video autoPlay loop muted playsInline preload="metadata" className="hero-video-bg"
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=75">
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        <motion.p className="hero-badge" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          Premium gym franchise
        </motion.p>
        <motion.h1 className="hero-title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          Build the next <span className="gold-gradient">RAW FIT</span> Gym.
        </motion.h1>
        <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          A premium fitness franchise built around performance, member experience and scalable operations.
          Choose Prime or Luxury and see an illustrative payback scenario before you enquire.
        </motion.p>
        <motion.div className="hero-ctas" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <a href="#enquiry" className="btn btn-gold btn-lg">Enquire about a franchise <ArrowUpRight size={18} /></a>
          <a href="#roi" className="btn btn-outline btn-lg">Try the financial model</a>
        </motion.div>

        <div className="hero-stats-row">
          {stats.map((s, i) => (
            <div className="hero-stat-wrap" key={s.val}>
              {i > 0 && <span className="stat-divider" aria-hidden="true" />}
              <div className="hero-stat"><span className="stat-val">{s.val}</span><span className="stat-lbl">{s.lbl}</span></div>
            </div>
          ))}
        </div>
      </div>

      <a href="#identity" className="scroll-indicator" aria-label="Scroll to next section"><ChevronDown size={20} /></a>
    </section>
  )
}