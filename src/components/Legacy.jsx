const Legacy = () => {
  return (
    <div>
      <div className="container col-xxl-12 px-auto py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
          <h2 className="display-4 fw-bold lh-2 mb-3 text-justify">Our Legacy of Trust and Precision</h2>
        <p className="fs-4 mb-4 text-justify">For years, Exponent Finserv has been a beacon of excellence, consistently delivering accurate, reliable, and customer-centric financial solutions. Our legacy is built on trust, innovation, and results that matter.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-md px-4 py-2 me-md-2 custom-button"  style={{backgroundColor: '#002147', borderColor: '#001a33',color: '#F4F0EE'}}>
                About Us
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="src/assets/images/hero-1.jpg" className="d-block mx-lg-auto img-fluid rounded-4 shadow" alt="Bootstrap Themes" width="600"  loading="lazy"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Legacy;
