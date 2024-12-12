import ContactCard from "../components/ContactCard"
import ContactForm from "../components/ContactForm"
import ServiceDetails from "../components/ServiceDetails"

const ServicesPage = () => {
  return (
    <div>
      <ServiceDetails buttonValue="Apply" button_type="contact-us" />
      <ContactForm />
      <ContactCard />
    </div>
  )
}

export default ServicesPage