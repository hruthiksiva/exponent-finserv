import ContactCard from '../components/ContactCard'
import Hero from '../components/Hero'
import Legacy from '../components/Legacy'
import MetricsCard from '../components/MetricsCard'
import ServiceDetails from '../components/ServiceDetails'
import BankPartners from '../components/BankPartnership'
import JumbotronMetrics from '../components/JumbotronMetrics'


const HomePage = () => {
  return (
    <>
      <Hero />
      <Legacy />
      <MetricsCard />
      <br></br>
      <ServiceDetails isHome={true} />
      <JumbotronMetrics/>
      <BankPartners/>
      {/* <PartnerBanks /> */}
      <div className='container xl p-5'>
      <ContactCard />
      </div>
      
    </>
  )
}

export default HomePage;