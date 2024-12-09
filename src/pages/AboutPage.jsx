import AboutUsHero from '../components/AboutUsHero';
import MetricsCard from '../components/MetricsCard';
import MetricsCards from '../components/MetricsCards';
import ServiceCard from '../components/ServiceCard';
import ContactCard from '../components/ContactCard'
import AboutMission from '../components/AboutMission';
import aboutImg from '../assets/images/stockImages/about.png'

const AboutPage = () => {
  return (
    <>
      <AboutUsHero />
      <MetricsCard/>
      <AboutMission/>
      <ContactCard/>
    </>
  )
}

export default AboutPage;