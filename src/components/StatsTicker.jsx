import { Layers, MapPin, Award, ShieldCheck, Coins, Route } from 'lucide-react'

const items = [
  { icon: Layers, key: '2 formats', val: 'Prime and Luxury' },
  { icon: MapPin, key: 'Flagship', val: 'Sector-122, Noida · opens 12 Nov 2026' },
  { icon: Award, key: 'IFBB Pro', val: 'founder and head coach' },
  { icon: ShieldCheck, key: 'Standardised', val: 'identity, zones and member journey' },
  { icon: Coins, key: '6 revenue streams', val: 'beyond memberships' },
  { icon: Route, key: '7-step roadmap', val: 'from enquiry to opening' },
]

function Row({ hidden }) {
  return (
    <ul className="tk-row" aria-hidden={hidden || undefined}>
      {items.map(({ icon: Icon, key, val }) => (
        <li className="tk-item" key={key}>
          <span className="tk-icon"><Icon size={15} /></span>
          <span className="tk-key">{key}</span>
          <span className="tk-val">{val}</span>
          <span className="tk-sep" aria-hidden="true" />
        </li>
      ))}
    </ul>
  )
}

export default function StatsTicker() {
  return (
    <div className="tk" role="region" aria-label="Key facts about RAW FIT GYM">
      <span className="tk-fade tk-fade-l" aria-hidden="true" />
      <span className="tk-fade tk-fade-r" aria-hidden="true" />
      <div className="tk-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  )
}