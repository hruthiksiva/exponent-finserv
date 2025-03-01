import legacyimg from "../assets/images/legacy-6.jpg"
const Legacy = () => {
  return (
    <div>
      <div className="container-fluid col-11 px-5 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          {/* Image Section */}
          <div className="col-lg-6 order-1 order-lg-2">
            <img
              src={legacyimg}
              className="d-block mx-lg-auto img-fluid rounded-4 shadow"
              alt="Bootstrap Themes"
              width="600"
              loading="lazy"
            />
          </div>

          {/* Text Section */}
          <div className="col-10 col-sm-12 col-lg-6 order-2 order-lg-1">
            <h2 className="display-4 fw-bold lh-2 mb-3 text-justify">
              Our Legacy Of Trust And Precision
            </h2>
            <p className="fs-4 mb-4 text-justify">
              For years, Exponent Finserv has been a beacon of excellence, consistently delivering accurate, reliable,
              and customer-centric financial solutions. Our legacy is built on trust, innovation, and results that
              matter.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a className="btn btn-md px-4 py-2 me-md-2 custom_button" href="/about">
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legacy;
