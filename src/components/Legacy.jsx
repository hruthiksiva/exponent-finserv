const Legacy = () => {
  return (
    <div>
      <div className="container col-xxl-12 px-auto py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <h1 className="display-6 fw-bold lh-2 mb-3">Our Legacy of trust and precision</h1>
            <p className="fw-normal mb-4">
              Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-md px-4 py-2 me-md-2 custom-button"  style={{backgroundColor: '#002147', borderColor: '#001a33',color: '#F4F0EE'}}>
                Primary
              </button>
              <button type="button" className="btn btn-md px-4 py-2 me-md-2 custom-button"style={{backgroundColor: '#002147', borderColor: '#001a33',color: '#F4F0EE'}}>
                Default
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
