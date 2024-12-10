import AboutUsHero from '../components/AboutUsHero';
import MetricsCard from '../components/MetricsCard';
import ContactCard from '../components/ContactCard'
import AboutMission from '../components/AboutMission';

const AboutPage = () => {
  return (
    <>
      <AboutUsHero />
      <br></br><br></br><br></br>
      <MetricsCard/>
      <AboutMission/>
      <ContactCard/>
    </>
  )
}

export default AboutPage;