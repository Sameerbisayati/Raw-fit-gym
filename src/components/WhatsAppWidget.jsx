import { MessageCircle } from 'lucide-react'

export default function WhatsAppWidget() {
  const whatsappUrl = "https://wa.me/916000609292?text=Hi%20RAW%20FIT%20Team%2C%20I%20am%20interested%20in%20exploring%20a%20franchise%20partnership."

  return (
    <a 
      href={whatsappUrl}
      target="_blank" 
      rel="noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Connect on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="whatsapp-tooltip">Quick Franchise Enquiry</span>
    </a>
  )
}