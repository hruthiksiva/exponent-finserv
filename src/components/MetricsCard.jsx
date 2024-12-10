import MetricsCards from "./MetricsCards";

const MetricsCard = () => {
  return (
    <div>
      <div className="text-center p-3">
        <h1 className="mb-3 display-1">We have impactful numbers</h1> 
        <p>Every milestone we achieve reflects our dedication to transforming financial solutions and exceeding expectations.</p>
      </div>
      <div className="container-xl p-5">
        <div className="row">
          <div className="col">
            <MetricsCards title='15K' describe='Happy clients'/>
          </div>
          <div className="col-sm-6 col-md-3">
            <MetricsCards title='100+' describe='Team members'/>
          </div>
          <div className="col-sm-6 col-md-3">
            <MetricsCards title='98%' describe='Customer satisfaction'/>
          </div>
          <div className="col-sm-6 col-md-3">
            <MetricsCards title='100%' describe='Compliance rate'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetricsCard;
