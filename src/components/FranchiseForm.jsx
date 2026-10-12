import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'

const cities = ['Delhi NCR', 'Chandigarh', 'Mumbai', 'Bengaluru', 'Jaipur', 'Lucknow']
const WA = '916000609292'
const initial = { name: '', email: '', phone: '', city: '', format: 'Prime', investment: '₹1.80–₹3.20 Crore', message: '' }

export default function FranchiseForm() {
  const [form, setForm] = useState(initial)
  const [waUrl, setWaUrl] = useState('')

  const set = (name, value) => setForm((f) => ({ ...f, [name]: value }))
  const onChange = (e) => set(e.target.name, e.target.value)

  const onSubmit = (e) => {
    e.preventDefault()
    const msg = `*RAW FIT Franchise Enquiry*\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Phone:* ${form.phone}\n*City:* ${form.city}\n*Format:* ${form.format}\n*Budget:* ${form.investment}\n*Notes:* ${form.message || 'N/A'}`
    const url = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`
    setWaUrl(url)
    window.open(url, '_blank', 'noopener')
  }

  return (
    <section className="section-padding bg-darker" id="enquiry">
      <div className="container">
        <div className="enquiry-grid">
          <motion.div className="enquiry-info" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2>Start your <span className="gold-text">RAW FIT enquiry.</span></h2>
            <p>Share your city and preferred format. Our team will contact you to discuss site, terms and next steps.</p>

            <div className="territory-checker-card mt-6">
              <p className="territory-title" id="city-label">Tap a city to fill it in</p>
              <div className="city-badges-grid mt-3" role="group" aria-labelledby="city-label">
                {cities.map((c) => (
                  <button key={c} type="button" aria-pressed={form.city === c}
                    className={`city-badge-btn ${form.city === c ? 'selected' : ''}`} onClick={() => set('city', c)}>
                    <span>{c}</span>
                  </button>
                ))}
              </div>
              <p className="territory-note mt-3">Territory terms are discussed during evaluation.</p>
            </div>

            <div className="contact-details mt-8">
              <a href="mailto:rawfitgym26@gmail.com" className="contact-item"><div className="icon-box"><Mail size={18} /></div><div><small>Email</small><p>rawfitgym26@gmail.com</p></div></a>
              <a href="tel:+916000609292" className="contact-item"><div className="icon-box"><Phone size={18} /></div><div><small>Phone / WhatsApp</small><p>+91 60006 09292</p></div></a>
              <div className="contact-item"><div className="icon-box"><MapPin size={18} /></div><div><small>Flagship club</small><p>Sector-122, Noida, Uttar Pradesh</p></div></div>
            </div>
          </motion.div>

          <motion.div className="enquiry-card" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {waUrl ? (
              <div className="form-success-box text-center py-8" role="status">
                <CheckCircle2 size={56} className="gold-icon mx-auto" />
                <h3 className="mt-4">Your enquiry is ready in WhatsApp</h3>
                <p className="mt-2 text-muted">Press send in WhatsApp to deliver it. Nothing is submitted until you do.</p>
                <a className="btn btn-gold mt-6" href={waUrl} target="_blank" rel="noreferrer">Open WhatsApp again</a>
                <button type="button" className="btn btn-outline mt-4" onClick={() => { setWaUrl(''); setForm(initial) }}>Start a new enquiry</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="form-layout">
                <h3>Franchise enquiry</h3>
                <div className="form-field"><label htmlFor="f-name">Full name *</label>
                  <input id="f-name" name="name" type="text" autoComplete="name" required value={form.name} onChange={onChange} /></div>
                <div className="form-row">
                  <div className="form-field"><label htmlFor="f-email">Email *</label>
                    <input id="f-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={onChange} /></div>
                  <div className="form-field"><label htmlFor="f-phone">Phone *</label>
                    <input id="f-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required pattern="[+0-9 ]{10,15}"
                      title="Enter a 10-digit mobile number, with or without +91" placeholder="+91 98765 43210" value={form.phone} onChange={onChange} /></div>
                </div>
                <div className="form-row">
                  <div className="form-field"><label htmlFor="f-city">Preferred city *</label>
                    <input id="f-city" name="city" type="text" required placeholder="e.g. Delhi NCR" value={form.city} onChange={onChange} /></div>
                  <div className="form-field"><label htmlFor="f-format">Format</label>
                    <select id="f-format" name="format" value={form.format} onChange={onChange}>
                      <option value="Prime">Prime (3,000–4,000 sq ft)</option>
                      <option value="Luxury">Luxury (6,000–8,000 sq ft)</option>
                      <option value="Not sure">Not sure yet</option>
                    </select></div>
                </div>
                <div className="form-field"><label htmlFor="f-inv">Investment range</label>
                  <select id="f-inv" name="investment" value={form.investment} onChange={onChange}>
                    <option value="₹1.80–₹3.20 Crore">₹1.80 – ₹3.20 Crore</option>
                    <option value="Above ₹3.20 Crore">Above ₹3.20 Crore</option>
                    <option value="Not sure">Not sure yet</option>
                  </select></div>
                <div className="form-field"><label htmlFor="f-msg">Site details or timeline (optional)</label>
                  <textarea id="f-msg" name="message" rows="3" value={form.message} onChange={onChange} /></div>
                <button type="submit" className="btn btn-gold btn-block flex-center gap-2 mt-4">Continue in WhatsApp <Send size={16} /></button>
                <p className="form-hint">This opens WhatsApp with your details filled in. Figures are indicative.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}