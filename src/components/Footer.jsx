import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo-link" aria-label="RAW FIT GYM, back to top">
              <img src="/logo.png" alt="" className="footer-logo-img" onError={(e) => { e.currentTarget.style.display = 'none' }} />
              <span className="logo-text-footer">RAW<span className="gold-text">FIT</span> <small className="text-muted">GYM</small></span>
            </a>
            <p>Premium fitness, premium experience, scalable business.</p>
          </div>

          <nav className="footer-links" aria-label="Footer">
            <p className="footer-heading">Explore</p>
            <a href="#identity">Identity</a>
            <a href="#formats">Franchise formats</a>
            <a href="#roi">Financial model</a>
            <a href="#revenue">Revenue streams</a>
            <a href="#founders">Founders</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="footer-links">
            <p className="footer-heading">Contact</p>
            <a href="tel:+916000609292"><Phone size={14} /> +91 60006 09292</a>
            <a href="mailto:rawfitgym26@gmail.com"><Mail size={14} /> rawfitgym26@gmail.com</a>
            <span className="footer-addr"><MapPin size={14} /> Sector-122, Noida</span>
            <a href="https://www.instagram.com/rawfitgymofficial/" target="_blank" rel="noreferrer" className="social-btn">
              Instagram <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> (opens in new tab)</span>
            </a>
            <a href="#enquiry" className="btn btn-gold">Franchise enquiry</a>
          </div>
        </div>

     
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} RAW FIT GYM. All rights reserved.</p>
           <p className="footer-disclaimer">Franchise information is indicative and subject to final commercial agreement.</p>
          <a href="#home" className="back-top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}