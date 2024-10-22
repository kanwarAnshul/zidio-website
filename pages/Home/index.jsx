import ContactUs from '../../components/Contact'
import FeatureSection from '../../components/Feature'
import Footer from '../../components/Footer'
import Navbar from '../../components/Header'
import Herosection from '../../components/Herosection'
import ServiceHeroSection from '../../components/ServicesHerosection'
import StatsSection from '../../components/Stats'
import TeamSection from '../../components/TeamSection'
import TeamVideoSection from '../../components/TeamVideoSection'
import TestimonialsSection from '../../components/TestimolsSection'

const HomePage = () => {
  return (
    <>
      {/* herosection  */}
      <Herosection />
      {/* FeatureSection  */}
      <FeatureSection />
      {/* Services hero section  */}
      <ServiceHeroSection />
      {/* Team section  */}
      <TeamSection />
      {/* Stats section  */}
      <StatsSection />
      {/* Testimols section  */}
      <TestimonialsSection />
      {/* Team video section  */}
      <TeamVideoSection />
      {/* Contact section  */}
      <ContactUs />
    </>
  )
}

export default HomePage
