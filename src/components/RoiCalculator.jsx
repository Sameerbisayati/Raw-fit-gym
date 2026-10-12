import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, ArrowRight } from 'lucide-react'

const CAPEX = { Prime: 18000000, Luxury: 32000000 } // matches indicative ₹1.80 Cr / ₹3.20 Cr
const inr = (n) => n.toLocaleString('en-IN')

function Slider({ id, label, value, min, max, step, onChange, display }) {
  return (
    <div className="input-group mt-6">
      <div className="slider-header">
        <label htmlFor={id} className="input-label">{label}</label>
        <span className="slider-val gold-text">{display}</span>
      </div>
      <input id={id} type="range" className="custom-slider" min={min} max={max} step={step}
        value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </div>
  )
}

export default function RoiCalculator() {
  const [format, setFormat] = useState('Prime')
  const [members, setMembers] = useState(450)
  const [arpu, setArpu] = useState(3500)
  const [margin, setMargin] = useState(30)

  const revenue = members * arpu
  const profit = revenue * (margin / 100)
  const payback = profit > 0 ? Math.round(CAPEX[format] / profit) : null

  return (
    <section className="section-padding bg-dark" id="roi">
      <div className="container">
        <motion.div className="section-heading text-center" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2>Illustrative <span className="gold-text">payback scenario</span></h2>
          <p className="max-w-2xl mx-auto">
            Change the assumptions to see how membership, pricing and margin affect payback. These are your inputs, not RAW FIT projections.
          </p>
        </motion.div>

        <div className="roi-calculator-card mt-12">
          <div className="calc-inputs-col">
            <div className="input-group">
              <span className="input-label" id="fmt-label">Franchise format</span>
              <div className="toggle-btn-group" role="group" aria-labelledby="fmt-label">
                {[['Prime', 450], ['Luxury', 800]].map(([f, m]) => (
                  <button key={f} type="button" aria-pressed={format === f}
                    className={`toggle-btn ${format === f ? 'active' : ''}`}
                    onClick={() => { setFormat(f); setMembers(m) }}>
                    {f} · {f === 'Prime' ? '₹1.80 Cr' : '₹3.20 Cr'}
                  </button>
                ))}
              </div>
            </div>
            <Slider id="members" label="Active members" value={members} min={200} max={1200} step={25} onChange={setMembers} display={`${inr(members)} members`} />
            <Slider id="arpu" label="Average monthly fee per member" value={arpu} min={2000} max={7500} step={250} onChange={setArpu} display={`₹${inr(arpu)} / mo`} />
            <Slider id="margin" label="Operating margin (your assumption)" value={margin} min={10} max={45} step={1} onChange={setMargin} display={`${margin}%`} />
          </div>

          <div className="calc-results-col">
            <div>
              <div className="results-header"><Calculator size={20} className="gold-icon" /><span>Scenario result</span></div>
              <div className="results-grid mt-6" aria-live="polite">
                <div className="res-card"><span className="res-lbl">Monthly revenue</span><span className="res-val">₹{(revenue / 100000).toFixed(2)} lakh</span></div>
                <div className="res-card"><span className="res-lbl">Monthly operating profit</span><span className="res-val gold-text">₹{(profit / 100000).toFixed(2)} lakh</span></div>
                <div className="res-card"><span className="res-lbl">Indicative investment</span><span className="res-val">₹{(CAPEX[format] / 10000000).toFixed(2)} Cr</span></div>
                <div className="res-card highlighted"><span className="res-lbl">Simple payback</span><span className="res-val gold-text">{payback ? `${payback} months` : 'n/a'}</span></div>
              </div>
              <p className="roi-note">
                Illustrative only. Excludes ramp-up time, rent, taxes, royalty and financing. Not a forecast or guarantee of returns.
              </p>
            </div>
            <a href="#enquiry" className="btn btn-gold btn-block mt-8">Ask for the detailed financial plan <ArrowRight size={16} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}