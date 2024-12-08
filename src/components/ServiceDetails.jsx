import ServiceCard from "./ServiceCard";
import servicesJ from '../serviceJson.json';

const ServiceDetails = ({isHome=false}) => {
   const services = isHome?servicesJ.slice(0,3):servicesJ;
  return (
    <div>
      <div className="container-xl py-5">
        <div className="row px-5">
          <div className="col-10">
          <h1 className="display-5 fw-bold lh-1 mb-3">Exponent Services</h1>
          <p className="fs-5 lightGrey">We make the loan process seamless and easy by aggregating you on the right banks, so that you can make your dreams a reality.</p>
          </div>
          <div className="col-2 d-flex align-items-center justify-content-end">
            <button className="btn custom_button fw-bold py-2 px-3">All Services</button>
          </div>
        </div>
        <div className="row px-5 pt-4 pb-5">
        {services.map((service)=> (
            <div className="col-4">
            <ServiceCard title={service.title}/>
            </div>
            ))}
            </div>
      </div>
    </div>
    
  )
}

export default ServiceDetails;