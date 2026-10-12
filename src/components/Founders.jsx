import { motion } from 'framer-motion'
import { Award, ShieldCheck } from 'lucide-react'

const BASE = 'https://api.storebox.ai/media/bdc0fdd5-5c88-447b-839e-aeb0ea426ebc'
const founders = [
  { name: 'Rahul', role: 'Founder · Head Coach', credential: 'IFBB Pro', achievement: 'Pro card, 2022 Sheru Classic',
    image: `${BASE}/c37748c2-6761-4f27-8da4-7991188f4254/SaveClip-App_463362569_18442858009071724_411442800992287323_n.jpg`,
    alt: 'Rahul on stage at a bodybuilding competition', icon: Award },
  { name: 'Yash Baliyan', role: 'Co-Founder', credential: 'Indian Air Force', achievement: 'Athlete · Pro Supplements',
    image: `${BASE}/da2dfd0d-3e5c-4960-a117-07299f2847cc/rfg-yash-stage.jpg`,
    alt: 'Yash Baliyan on stage at a physique competition', icon: ShieldCheck },
]

export default function Founders() {
  return (
    <section className="section-padding bg-dark" id="founders">
      <div className="container">
        <motion.div className="section-heading" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2>Driven by discipline. <span className="gold-text">Built for performance.</span></h2>
          <p>Professional bodybuilding coaching meets military-level discipline: no gimmicks, just authentic, lasting results.</p>
        </motion.div>

        <div className="founders-grid mt-12">
          {founders.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.article className="founder-card" key={f.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
                <div className="founder-img-wrap">
                  <img src={f.image} alt={f.alt} loading="lazy" width="600" height="420" />
                  <div className="img-overlay" />
                  <div className="founder-badge"><Icon size={16} aria-hidden="true" /><span>{f.credential}</span></div>
                </div>
                <div className="founder-info">
                  <span className="founder-role">{f.role}</span>
                  <h3>{f.name}</h3>
                  <p className="founder-achieve">{f.achievement}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}