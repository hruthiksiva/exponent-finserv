import ServiceCard from "./ServiceCard"

const ServiceDetails = () => {
  return (
    <div>
      <div className="container-xl py-5">
        <div className="row px-5">
          <div className="col-10">
          <h1 className="display-5 fw-bold lh-1 mb-3">Exponent Services</h1>
          <p className="fs-5 lightGrey">We make the loan process seamless and easy by aggregating you on the right banks, so that you can make your dreams a reality.</p>
          </div>
          <div className="col-2 d-flex align-items-center justify-content-end">
            <button className="btn custom_button">All Services</button>
          </div>
        </div>
        
          <div className="row px-5">
            <div className="col-4">
<<<<<<< HEAD
            <ServiceCard />
            
=======
            <ServiceCard title="Personal Loan" />
>>>>>>> 1a5b519cf607ff6b17917002d1a8c61f7124c296
            </div>
            <div className="col-4">
            <ServiceCard title="Bussiness Loan"/>
            </div>
            <div className="col-4">
            <ServiceCard title="Education Loan"/>
            </div>
          
        </div>
      </div>
    </div>
    
  )
}

export default ServiceDetails;