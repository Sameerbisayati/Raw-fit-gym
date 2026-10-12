import { useId, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const WA = 'https://wa.me/916000609292?text=Hi%20RAW%20FIT%20GYM%2C%20I%20have%20a%20question%20about%20the%20franchise.'

const questions = [
  { question: 'What investment is required?', answer: 'Prime (3,000–4,000 sq ft) is indicatively ₹1.80 Crore and Luxury (6,000–8,000 sq ft) is ₹3.20 Crore. Figures are indicative and subject to final commercial agreement, site condition and location.' },
  { question: 'How long from first enquiry to opening?', answer: 'Our roadmap targets about 16 weeks from first enquiry to grand opening. This is indicative and depends on site approvals and fit-out.' },
  { question: 'Do you help with site selection and equipment?', answer: 'Yes. The model covers site evaluation, layout planning, fit-out and equipment installation, and team hiring. The exact scope is confirmed in the franchise agreement.' },
  { question: 'What are the royalty and fees?', answer: 'Royalty and fee terms are shared during the franchise discussion so they can be matched to your format and city.' },
  { question: 'Do I need gym management experience?', answer: 'Eligibility is assessed in the franchise discussion. Training, SOPs and club-management systems are part of the RAW FIT operating model.' },
  { question: 'Can I see expected returns?', answer: 'We do not promise returns. Use the financial model above for an illustrative scenario with your own assumptions, then ask us for a detailed plan.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const base = useId()

  return (
    <section className="section-padding bg-dark" id="faq">
      <div className="container max-w-4xl">
        <motion.div className="section-heading text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2>Frequently asked <span className="gold-text">questions</span></h2>
        </motion.div>

        <div className="faq-list mt-10">
          {questions.map((q, i) => {
            const open = openIndex === i
            const btn = `${base}-q${i}`, panel = `${base}-a${i}`
            return (
              <div className={`faq-item ${open ? 'open' : ''}`} key={q.question}>
                <h3 className="faq-heading">
                  <button type="button" id={btn} aria-expanded={open} aria-controls={panel} className="faq-q-btn"
                    onClick={() => setOpenIndex(open ? -1 : i)}>
                    <span className="q-text">{q.question}</span>
                    <span className="toggle-icon" aria-hidden="true">{open ? <Minus size={18} /> : <Plus size={18} />}</span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div id={panel} role="region" aria-labelledby={btn} className="faq-ans-wrap"
                      style={{ overflow: 'hidden' }}
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                      <p className="faq-ans-text">{q.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        <p className="faq-cta">Still have a question? <a href={WA} target="_blank" rel="noreferrer">Ask on WhatsApp</a> or <a href="#enquiry">send an enquiry</a>.</p>
      </div>
    </section>
  )
}