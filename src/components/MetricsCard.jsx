import MetricsCards from "./MetricsCards";

const MetricsCard = () => {
  return (
    <div>
      <div className="text-center p-3">
        <h1 className="mb-3 display-1">We Have Impactful Numbers</h1> 
        <p>Every milestone we achieve reflects our dedication to transforming financial solutions and exceeding expectations.</p>
      </div>
      <div className="container-xl p-5">
        <div className="row">
          <div className="col">
            <MetricsCards title='1000+' describe='Happy Clients'/>
          </div>
          <div className="col-sm-6 col-md-3">
            <MetricsCards title='20+' describe='Years of Service'/>
          </div>
          <div className="col-sm-6 col-md-3">
            <MetricsCards title='98%' describe='Customer Satisfaction'/>
          </div>
          <div className="col-sm-6 col-md-3">
            <MetricsCards title='100%' describe='Compliance Rate'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetricsCard;
