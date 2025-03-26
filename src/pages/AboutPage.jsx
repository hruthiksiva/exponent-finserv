import AboutUsHero from '../components/AboutUsHero';
import MetricsCard from '../components/MetricsCard';
import ContactCard from '../components/ContactCard'
import AboutMission from '../components/AboutMission';
import OurTeam from '../components/OurTeam';
import CertificationCard from '../components/CertificateCard';

const AboutPage = () => {
  return (
    <>
      <AboutUsHero />
      <br></br><br></br><br></br>
      <CertificationCard/>
      <MetricsCard/>
      <AboutMission/>
      <OurTeam />
      <ContactCard/>
    </>
  )
}

export default AboutPage;