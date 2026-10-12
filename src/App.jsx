import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandIntro from './components/BrandIntro'
import FranchiseFormats from './components/FranchiseFormats'
import RoiCalculator from './components/RoiCalculator'
import RevenueStreams from './components/RevenueStreams'
import Founders from './components/Founders'
import LaunchRoadmap from './components/LaunchRoadmap'
import FAQ from './components/FAQ'
import FranchiseForm from './components/FranchiseForm'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'
import StatsTicker from './components/StatsTicker' 

export default function App() {
  return (
    <div className="app-main">
      <Navbar />
      <Hero />
<StatsTicker></StatsTicker>
      <BrandIntro />
      <FranchiseFormats />
      <RoiCalculator />
      <RevenueStreams />
      <Founders />
      <LaunchRoadmap />
      <FAQ />
      <FranchiseForm />
      <Footer />
      <WhatsAppWidget></WhatsAppWidget>
    </div>
  )
}