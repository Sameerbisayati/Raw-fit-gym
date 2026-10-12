import { motion } from 'framer-motion'
import { Users, UserRound, Dumbbell, ShoppingBag, Coffee, CalendarCheck, ArrowUpRight } from 'lucide-react'

const streams = [
  {
    number: '01',
    title: 'Memberships',
    description: 'Recurring monthly and annual subscriptions forming predictable core cash flow.',
    icon: Users,
  },
  {
    number: '02',
    title: 'Personal Training',
    description: 'High-margin 1-on-1 performance coaching programs and personal training packages.',
    icon: UserRound,
  },
  {
    number: '03',
    title: 'Group Classes',
    description: 'Instructor-led functional fitness, spinning, and specialized HIIT sessions.',
    icon: Dumbbell,
  },
  {
    number: '04',
    title: 'Fitness Retail',
    description: 'Branded RAW FIT apparel, lifting gear, shakers, and training accessories.',
    icon: ShoppingBag,
  },
  {
    number: '05',
    title: 'Nutrition Services',
    description: 'In-house protein shake bar, supplement sales, and customized dietary guidance.',
    icon: Coffee,
  },
  {
    number: '06',
    title: 'Workshops & Events',
    description: 'Strength competitions, body transformation challenges, and guest athlete seminars.',
    icon: CalendarCheck,
  },
]

export default function RevenueStreams() {
  return (
    <section className="section-padding bg-darker" id="revenue">
      <div className="container">
        <motion.div 
          className="section-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="eyebrow">
            <span className="eyebrow-line" />
            BEYOND MEMBERSHIPS
          </div>
          <h2>Multiple revenue <span className="gold-text">channels.</span></h2>
          <p>
            Maximize revenue per square foot through six complementary monetizable fitness services.
          </p>
        </motion.div>

        <div className="revenue-grid mt-12">
          {streams.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div 
                className="revenue-card"
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="rev-card-top">
                  <span className="rev-num">{item.number}</span>
                  <div className="rev-icon"><Icon size={22} /></div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#enquiry" className="rev-link" aria-label={`Enquire about ${item.title}`}>
                  <ArrowUpRight size={18} />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}