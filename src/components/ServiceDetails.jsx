import ServiceCard from "./ServiceCard"

const ServiceDetails = () => {
  return (
    <div>
      <div className="container-xl">
        <div className="row p-5">
          <div className="col-10">
          <h1>Customised Loaning Services</h1>
          <p>We provide customised lending options from trusted banks</p>
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