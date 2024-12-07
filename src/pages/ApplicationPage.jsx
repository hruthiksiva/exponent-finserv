import ApplicationHero from "../components/ApplicationHero"
import MetricsCard from "../components/MetricsCard"
import BankSlider from "../components/BankSlider"
import ScaleupWithEaseText from "../components/ScaleupWithEaseText"
import BecomeExponentOfSuccess from "../components/BecomeExponentOfSuccess"
import ServiceDetails from "../components/ServiceDetails"
import JumbotronMetrics from "../components/JumbotronMetrics"
import ContactCard from "../components/ContactCard"

const ApplicationPage = () => {
  return (
    <div>
      <ApplicationHero />
      <MetricsCard />
      <ScaleupWithEaseText />
      <ServiceDetails />
      <JumbotronMetrics />
      <BankSlider />
      <BecomeExponentOfSuccess />

      <ContactCard />
    </div>
    

  )
}

export default ApplicationPage;