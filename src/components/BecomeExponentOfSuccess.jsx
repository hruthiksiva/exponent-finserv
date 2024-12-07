import { Link } from 'react-router-dom';


const BecomeExponentOfSuccess = () => {
  return (
    <div>
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5">
        
        <div className="row">
          <div className="col-md-6">
          <h1 className="display-5 fw-bold">Become Exponent of Success</h1>
          <p className="fs-4">Become the Exponent of Success! Unlock fast, seamless business loans tailored to your needs. With easy financing solutions, you'll transform your business and scale up like never before!</p>
          <Link to="/contact">
          <button className="btn btn-lg contact-us" type="button">Contact Us</button>
          </Link>
          </div>
          <div className="col-6">
          <img src="src/assets/images/hero-1.jpg" className="d-block mx-lg-auto img-fluid rounded-4 shadow" alt="Bootstrap Themes" width="600" loading="lazy" />
          </div>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default BecomeExponentOfSuccess;