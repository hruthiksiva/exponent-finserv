import ServiceCard from "./ServiceCard"

const ServiceDetails = () => {
  return (
    <div>
      <div className="container-xl">
        <div className="row p-5">
          <div className="col-10">
          <h1 className="display-5 fw-bold lh-1 mb-3">Exponent Services</h1>
          <p className="fs-4">We make the loan process seamless and easy by aggregating you on the right banks, so that you can make your dreams a reality.</p>
          </div>
          <div className="col-2">
            <button className="btn btn-primary">All Services</button>
          </div>
        </div>
        
          <div className="row p-5">
            <div className="col-4">
            <ServiceCard />
            </div>
            <div className="col-4">
            <ServiceCard />
            </div>
            <div className="col-4">
            <ServiceCard />
            </div>
          
        </div>
      </div>
    </div>
    
  )
}

export default ServiceDetails;