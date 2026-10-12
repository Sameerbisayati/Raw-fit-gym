import { motion } from 'framer-motion'
import { Dumbbell, Users, TrendingUp, Target, ArrowUpRight } from 'lucide-react'

const highlights = [
  {
    icon: Dumbbell,
    number: '01',
    title: 'Premium Training',
    text: 'Performance-focused spaces designed with bio-mechanically engineered equipment for serious fitness enthusiasts.',
  },
  {
    icon: Users,
    number: '02',
    title: 'Member Experience',
    text: 'A welcoming, high-end environment delivering high retention rates and strong organic community advocacy.',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Scalable Operations',
    text: 'Turnkey standard operating procedures, automated member management, and centralized supply chain access.',
  },
]

export default function BrandIntro() {
  return (
    <section className="section-padding bg-dark" id="identity">
      <div className="container">
        <motion.div 
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="eyebrow">
            <span className="eyebrow-line" />
            THE RAW FIT IDENTITY
          </div>
          <h2>
            More than a gym. <br />
            <span className="gold-text">A performance culture.</span>
          </h2>
          <p>
            RAW FIT brings together thoughtful gym layout design, world-class training 
            equipment, and a luxury member experience in one high-yield business format.
          </p>
        </motion.div>

        <div className="brand-grid mt-12">
          <motion.div 
            className="brand-image-card"
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img 
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1100&q=85" 
              alt="Modern Gym Floor" 
            />
            <div className="brand-image-overlay" />
            <div className="brand-caption">
              <span className="badge-gold">FLAGSHIP DESIGN</span>
              <p className="caption-title">RAW FIT / SECTOR-122 NOIDA</p>
            </div>
          </motion.div>

          <div className="brand-features-list">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.a 
                  href="#enquiry"
                  className="brand-feature-card interactive-card"
                  key={item.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ scale: 1.02, x: 6 }}
                >
                  <div className="feature-num-icon">
                    <span className="num">{item.number}</span>
                    <div className="icon-box"><Icon size={20} /></div>
                  </div>
                  <div className="feature-text">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <ArrowUpRight className="arrow-icon" size={18} />
                </motion.a>
              )
            })}

            <motion.div 
              className="brand-note-box mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Target className="gold-icon flex-shrink-0" size={24} />
              <p>
                <strong>Our Blueprint:</strong> High retention through unyielding standard of service, 
                streamlined overheads, and sustained multi-channel marketing support.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}