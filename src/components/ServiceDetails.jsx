import PropTypes from 'prop-types'; // Import PropTypes
import ServiceCard from './ServiceCard';
import loanData from '../assets/files/loan.json'; // Import the new combined loan.json

const ServiceDetails = ({ isHome = false, buttonValue = 'All Services', button_type = 'custom_button' }) => {
  // Convert the loanData object into an array of loan objects
  const services = Object.values(loanData);
  
  // If isHome is true, show only the first 3 services; otherwise, show all
  const displayedServices = isHome ? services.slice(0, 3) : services;

  return (
    <div>
      <div className="container-xl py-5">
        <div className="row px-5">
          {/* Text Section */}
          <div className="col-12 col-md-10">
            <h1 className="display-5 fw-bold lh-1 mb-3">Exponent Services</h1>
            <p className="fs-5 lightGrey">
              At Exponent Finserv, we excel in providing business loans tailored to fuel your enterprise's growth. Beyond business financing, we offer a diverse range of loan solutions, including personal, home, and vehicle loans, to meet all your financial needs under one roof. Let us help you achieve your ambitions with ease and flexibility.
            </p>
          </div>

          {/* Button Section for Large Screens */}
          <div className="col-md-2 d-none d-md-flex align-items-center justify-content-end">
            <a className={`btn ${button_type} fw-bold py-2 px-4`} href="/service">
              {buttonValue}
            </a>
          </div>
        </div>

        {/* Button Section for Small Screens */}
        <div className="row px-5 d-md-none">
          <div className="col-12 d-flex justify-content-center mt-3">
            <a className={`btn ${button_type} fw-bold py-2 px-4`} href="/service">
              {buttonValue}
            </a>
          </div>
        </div>

        {/* Cards Section */}
        <div className="row px-5 pt-4 pb-5">
          {displayedServices.map((service) => (
            <div 
              key={`${service.title}-${service.src}`} 
              className="col-12 col-md-6 col-lg-4 mb-4"
            >
              <ServiceCard 
                title={service.title} 
                link={service.link} 
                src={service.src} // Pass the image source to ServiceCard
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation
ServiceDetails.propTypes = {
  isHome: PropTypes.bool, // 'isHome' is expected to be a boolean
  buttonValue: PropTypes.string, // 'buttonValue' is expected to be a string
  button_type: PropTypes.string, // 'button_type' is expected to be a string
};

export default ServiceDetails;