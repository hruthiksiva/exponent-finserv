import ContactCard from "../components/ContactCard"
import ContactForm from "../components/ContactForm"
import EMICalculator from "../components/EMICalculator"
import PersonalLoanCalculator from "../components/PersonalLoanCalculator"
import ServiceDetails from "../components/ServiceDetails"

const ServicesPage = () => {
  return (
    <div>
      <ServiceDetails buttonValue="Apply" button_type="contact-us" />
      <PersonalLoanCalculator />
      <EMICalculator />
      <ContactForm />
      <ContactCard />
    </div>
  )
}

export default ServicesPage