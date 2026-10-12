import { motion } from 'framer-motion'
import {
  MapPin,
  ClipboardCheck,
  Wallet,
  Building2,
  Wrench,
  Users,
  Rocket,
  CheckCircle2,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Initial Enquiry',
    description: 'Share your interest, preferred city, and investment range with our franchise expansion team.',
    icon: MapPin,
    duration: 'Week 1',
  },
  {
    number: '02',
    title: 'Business Discussion',
    description: 'Discuss your business goals, financial expectations, and strategic territory suitability.',
    icon: ClipboardCheck,
    duration: 'Week 2',
  },
  {
    number: '03',
    title: 'Investment Planning',
    description: 'Review indicative CAPEX, operating cash flow projections, and sign commercial terms.',
    icon: Wallet,
    duration: 'Week 3',
  },
  {
    number: '04',
    title: 'Site Selection & Audit',
    description: 'Evaluate catchment demographics, floor plan footprint, accessibility, and local competition.',
    icon: Building2,
    duration: 'Weeks 4-6',
  },
  {
    number: '05',
    title: 'Club Fit-out & Machinery',
    description: 'Turnkey interior design, flooring, lighting, and heavy strength equipment installation.',
    icon: Wrench,
    duration: 'Weeks 7-12',
  },
  {
    number: '06',
    title: 'Team Hiring & SOPs',
    description: 'Staff recruitment, master trainer certification, software deployment, and pre-sales.',
    icon: Users,
    duration: 'Weeks 11-14',
  },
  {
    number: '07',
    title: 'Grand Opening',
    description: 'Official club inauguration, local VIP launch event, and active member onboarding.',
    icon: Rocket,
    duration: 'Week 16 Launch',
  },
]

export default function LaunchRoadmap() {
  return (
    <section className="section-padding bg-darker roadmap-section-wrapper" id="roadmap">
      <div className="container relative-container">
        <motion.div 
          className="section-heading text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow justify-center">
            <span className="eyebrow-line" />
            YOUR FRANCHISE JOURNEY
            <span className="eyebrow-line" />
          </div>
          <h2>
            From first conversation <br />
            <span className="gold-text">to grand opening.</span>
          </h2>
          <p className="max-w-2xl mx-auto">
            A structured 7-step execution playbook engineered to transition your location from contract signing to recurring revenue.
          </p>
        </motion.div>

        <div className="roadmap-scroll-timeline mt-16">
          {/* Continuous Base Spine Line */}
          <div className="timeline-continuous-spine" />

          <div className="timeline-steps-wrapper">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              const isLast = index === steps.length - 1

              return (
                <motion.div 
                  className={`timeline-step-row ${isEven ? 'even-row' : 'odd-row'}`}
                  key={step.number}
                  initial="inactive"
                  whileInView="active"
                  viewport={{ amount: 0.4, margin: '-10% 0px -10% 0px' }}
                  variants={{
                    inactive: { opacity: 0.3, scale: 0.96 },
                    active: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Content Card */}
                  <motion.div 
                    className="step-card-box"
                    variants={{
                      inactive: { 
                        borderColor: 'rgba(255, 255, 255, 0.05)',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)' 
                      },
                      active: { 
                        borderColor: '#D4AF37',
                        boxShadow: '0 12px 35px rgba(212, 175, 55, 0.25)' 
                      },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="step-card-header">
                      <div className="step-icon-badge">
                        <Icon size={22} />
                      </div>
                      <span className="step-timeline-tag">{step.duration}</span>
                    </div>

                    <h3>{step.title}</h3>
                    <p>{step.description}</p>

                    <div className="step-card-footer">
                      <CheckCircle2 size={14} className="gold-text" />
                      <span>Phase {step.number} Readiness</span>
                    </div>
                  </motion.div>

                  {/* Central Node & Active Gold Connecting Pipe */}
                  <div className="timeline-center-node">
                    {/* Glowing Gold Active Line Segment that stretches down to the next node */}
                    {!isLast && (
                      <motion.div 
                        className="node-connecting-pipe"
                        variants={{
                          inactive: { opacity: 0, scaleY: 0 },
                          active: { opacity: 1, scaleY: 1 },
                        }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                      />
                    )}

                    {/* Outer Node Ring */}
                    <motion.div 
                      className="node-outer-ring"
                      variants={{
                        inactive: { 
                          borderColor: 'rgba(255, 255, 255, 0.15)', 
                          backgroundColor: '#050505',
                          boxShadow: '0 0 0px transparent' 
                        },
                        active: { 
                          borderColor: '#D4AF37', 
                          backgroundColor: '#161510',
                          boxShadow: '0 0 25px rgba(212, 175, 55, 0.7)' 
                        },
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.div 
                        className="node-inner-dot"
                        variants={{
                          inactive: { color: 'rgba(255, 255, 255, 0.3)' },
                          active: { color: '#D4AF37' },
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        {step.number}
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="timeline-spacer" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}