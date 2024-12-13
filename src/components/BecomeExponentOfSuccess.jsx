import { Link } from 'react-router-dom';

const BecomeExponentOfSuccess = () => {
  return (
    <div>
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <div className="row">
            {/* Image section: Moves above text on small screens */}
            <div className="col-12 col-md-6 mb-4 order-1 order-md-2">
              <img
                src="src/assets/images/legacy-4.jpg"
                className="d-block mx-lg-auto img-fluid rounded-4 shadow"
                alt="Bootstrap Themes"
                width="100%"
                loading="lazy"
              />
            </div>

            {/* Text section: Moves below image on small screens */}
            <div className="col-12 col-md-6 order-2 order-md-1">
              <h1 className="display-5 fw-bold">Become Exponent of Success</h1>
              <p className="fs-4">
                Experience unparalleled financial services with Exponent Finserv — your trusted partner in delivering innovative solutions for secure and scalable growth. Let us empower your financial future.
              </p>
              <Link to="/contact">
                <button className="col-sm-12 col-lg-2 mb-4 btn contact-us">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeExponentOfSuccess;
