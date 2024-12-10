import ApplicationHero from "../components/ApplicationHero"
import MetricsCard from "../components/MetricsCard"
import ScaleupWithEaseText from "../components/ScaleupWithEaseText"
import BecomeExponentOfSuccess from "../components/BecomeExponentOfSuccess"
import ServiceDetails from "../components/ServiceDetails"
import JumbotronMetrics from "../components/JumbotronMetrics"
import ContactCard from "../components/ContactCard"
import BankPartnership from "../components/BankPartnership"

const ApplicationPage = () => {
  return (
    <div>
      <ApplicationHero />
      <MetricsCard />
      <ScaleupWithEaseText />
      <ServiceDetails />
      <JumbotronMetrics />
      <BankPartnership/>
      <BecomeExponentOfSuccess />
      <ContactCard />
    </div>
    

  )
}

export default ApplicationPage;