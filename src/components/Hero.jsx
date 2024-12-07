const Hero = () => {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="src/assets/images/hero-1.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="1000" height="600" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Expert Loaning Agent For Your Bussiness Success</h1>
        <p className="lead">One platform for all your problems.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contact Us</button>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Hero;