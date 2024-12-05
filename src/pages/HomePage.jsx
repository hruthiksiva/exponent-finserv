import BankPartnership from '../components/BankPartnership'
import ContactCard from '../components/ContactCard'
import Hero from '../components/Hero'
import Legacy from '../components/Legacy'
import MetricsCard from '../components/MetricsCard'
import ServiceCard from '../components/ServiceCard'



const HomePage = () => {
  return (
    <>
      <Hero />
      <Legacy />
      <MetricsCard />
      <ServiceCard />
      <BankPartnership />
      <ContactCard />
    </>
  )
}

export default HomePage;