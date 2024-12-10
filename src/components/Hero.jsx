const Hero = () => {
  return (
    <div>
      <div className="container col-xxl-12 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6" >
           <img src="src/assets/images/hero-1.jpg" className="d-block mx-lg-auto img-fluid rounded-4 shadow" alt="Bootstrap Themes" width="600" loading="lazy" />
          {/* <div style={{position:'absolute',right:'0px', width:'300px', height:'300px'}} className="rounded-circle bg-dark">‎</div> */}
      </div>
      <div className="col-lg-6">
         {/* <p className=" fw-normal rounded-2">Every client growing 5X</p> */}
         <div className="badge fw-normal bg-hero py-2 px-3 rounded-pill mb-2" style={{backgroundColor: '#c8dcf4', color: '#002147'}}>
              Every client growing 5X&nbsp;<span>↗</span>
        </div>
        <h2 className="display-4 fw-bold lh-2 mb-3 text-justify">Transforming Financial Possibilities with Exponent Finserv</h2>
        <p className="fs-4 mb-4 text-justify">Become the Exponent of Success! Unlock fast, seamless business loans tailored to your needs. With easy financing solutions, you&apos;ll transform your business and scale up like never before!</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button"  className="btn btn-md px-4 py-2 me-md-2 contact-us">
            Contact Us
        </button>

        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Hero;