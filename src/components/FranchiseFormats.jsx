import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Crown, Check, ArrowUpRight } from 'lucide-react'

const formats = [
  {
    id: 'prime',
    name: 'Prime',
    number: '01',
    investment: '₹1.80 Crore',
    area: '3,000–4,000 sq. ft.',
    icon: Building2,
    tag: 'Prime Format',
    description: 'A premium compact format engineered for high-density catchments and disciplined operations.',
    facilities: [
      'Professional strength equipment',
      'Dedicated cardio zone',
      'Functional training area',
      'Member changing facilities',
      'Structured operating model',
    ],
  },
  {
    id: 'luxury',
    name: 'Luxury',
    number: '02',
    investment: '₹3.20 Crore',
    area: '6,000–8,000 sq. ft.',
    icon: Crown,
    tag: 'Flagship Scale',
    description: 'An expanded premium club format designed as a full fitness destination and brand flagship.',
    facilities: [
      'Expanded strength equipment',
      'Premium cardio zone',
      'Dedicated functional training',
      'Enhanced member facilities',
      'Expanded training experience',
    ],
  },
]

export default function FranchiseFormats() {
  const [activeTab, setActiveTab] = useState('prime')

  return (
    <section className="section-padding bg-darker" id="formats">
      <div className="container">
        <motion.div 
          className="section-heading text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow justify-center">
            <span className="eyebrow-line" />
            OWN A RAW FIT CLUB
            <span className="eyebrow-line" />
          </div>
          <h2>Two formats. <br /><span className="gold-text">One ambitious vision.</span></h2>
          <p className="max-w-2xl mx-auto">
            Explore the indicative franchise formats and choose the scale that best fits your location, investment capacity, and business plan.
          </p>

          {/* Interactive Weight Plate Switcher */}
          <div className="plate-switcher mt-8">
            <button 
              className={`plate-btn ${activeTab === 'prime' ? 'active' : ''}`}
              onClick={() => setActiveTab('prime')}
            >
              <span>Prime · ₹1.80 Cr</span>
            </button>
            <button 
              className={`plate-btn ${activeTab === 'luxury' ? 'active' : ''}`}
              onClick={() => setActiveTab('luxury')}
            >
              <span>Luxury · ₹3.20 Cr</span>
            </button>
          </div>
        </motion.div>

        {/* Animated Card Display */}
        <div className="format-grid mt-12">
          {formats.map((format, index) => {
            const Icon = format.icon
            const isSelected = activeTab === format.id

            return (
              <motion.article 
                className={`format-card ${isSelected ? 'featured' : 'dimmed'}`}
                key={format.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                onClick={() => setActiveTab(format.id)}
              >
                <div className="format-card-top">
                  <div className="format-icon-bg">
                    <Icon size={24} />
                  </div>
                  <span className="format-number">{format.number} / FORMAT</span>
                </div>

                <h3 className="mt-4">{format.name}</h3>
                <p className="format-desc">{format.description}</p>

                <div className="format-metrics mt-6">
                  <div className="metric-box">
                    <span className="lbl">INDICATIVE INVESTMENT</span>
                    <span className="val gold-text">{format.investment}</span>
                  </div>
                  <div className="metric-box">
                    <span className="lbl">RECOMMENDED AREA</span>
                    <span className="val">{format.area}</span>
                  </div>
                </div>

                <div className="format-features mt-6">
                  <span className="features-title">FORMAT HIGHLIGHTS</span>
                  <ul>
                    {format.facilities.map((fac) => (
                      <li key={fac}>
                        <Check size={16} className="gold-icon" />
                        <span>{fac}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#enquiry" className="btn btn-gold btn-block mt-8 flex-center gap-2">
                  <span>Enquire about {format.name}</span>
                  <ArrowUpRight size={18} />
                </a>
              </motion.article>
            )
          })}
        </div>

        <p className="disclaimer-text text-center mt-8">
          Investment figures and area requirements are indicative only. Final costs, facilities, commercial terms, and eligibility are subject to confirmation by RAW FIT.
        </p>
      </div>
    </section>
  )
}