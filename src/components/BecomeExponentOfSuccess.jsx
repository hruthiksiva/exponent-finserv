import { Link } from 'react-router-dom';


const BecomeExponentOfSuccess = () => {
  return (
    <div>
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5">
        
        <div className="row">
          <div className="col-md-6">
          <h1 className="display-5 fw-bold">Become Exponent of Success</h1>
          <p className="fs-4">Experience unparalleled financial services with Exponent Finserv — your trusted partner in delivering innovative solutions for secure and scalable growth. Let us empower your financial future.</p>
          <Link to="/contact">
          <button className="btn btn-lg contact-us" type="button">Contact Us</button>
          </Link>
          </div>
          <div className="col-6">
          <img src="src/assets/images/legacy-4.jpg" className="d-block mx-lg-auto img-fluid rounded-4 shadow" alt="Bootstrap Themes" width="600" loading="lazy" />
          </div>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default BecomeExponentOfSuccess;