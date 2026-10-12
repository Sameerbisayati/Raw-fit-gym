import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Identity', href: '#identity' },
  { label: 'Formats', href: '#formats' },
  { label: 'Revenue', href: '#revenue' },
  { label: 'Founders', href: '#founders' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="brand-logo" onClick={() => setMobileOpen(false)}>
          <img 
            src="/logo.png" 
            alt="RAW FIT GYM Logo" 
            className="navbar-logo-img"
            onError={(e) => {
              // Fallback if logo.png fails to load
              e.target.style.display = 'none'
            }}
          />
          <div className="brand-text">
            <span className="brand-title">RAW<span className="gold-text">FIT</span></span>
            <span className="brand-sub">GYM</span>
          </div>
        </a>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="#enquiry" className="btn btn-gold flex-center gap-2">
            <span>Franchise Enquiry</span>
            <ArrowUpRight size={16} />
          </a>
          <button 
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container mobile-menu-inner">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#enquiry" 
                className="btn btn-gold text-center mt-4"
                onClick={() => setMobileOpen(false)}
              >
                Franchise Enquiry
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}