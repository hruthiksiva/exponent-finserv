
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#002147', color: 'white', padding: '20px 0' }}>
      <div className="container">
        <div className="row">
        <div className="col-md-6">
            <h2>Exponent Finserv</h2>
          </div>
          <div className="col-md-6 text-right">
          <div className="d-flex">
            <a className="btn contact-us" href="/contact">
              Contact Us
            </a>
          </div>
          </div>
          
        </div>
        <hr></hr>
        <div className="row">

          {/* Left Section: Newsletter Signup */}
          <div className="col-md-4">
            <h5>Newsletter</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="newsletterEmail" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="newsletterEmail"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button type="submit" className="btn contact-us">
                Subscribe
              </button>
            </form>
          </div>

          {/* Middle Section: Explore Links */}
          <div className="col-md-4">
            <h5>Explore</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
              </li>
              <li>
                <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
              </li>
              <li>
                <a href="/service" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
              </li>
              <li>
                <a href="/application" style={{ color: 'white', textDecoration: 'none' }}>Application</a>
              </li>
              <li>
                <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</a>
              </li>
              <li>
                <a href="/terms-of-use" style={{ color: 'white', textDecoration: 'none' }}>Terms of Use</a>
              </li>
              <li>
                <a href="/privacy-policy" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a>
              </li>
              <li>
                <a href="/trade-mark-policy" style={{ color: 'white', textDecoration: 'none' }}>Trademark Policy</a>
              </li>
            </ul>
          </div>

          {/* Right Section: Contact Details */}
          <div className="col-md-4">
            <h5>Contact Details</h5>
            <p>
              <strong>Address:</strong> 123 Main Street, Bangalore, India
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:contact@example.com" style={{ color: 'white', textDecoration: 'none' }}>contact@example.com</a>
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:+911234567890" style={{ color: 'white', textDecoration: 'none' }}>+91 123 456 7890</a>
            </p>
          </div>

          <div className="row">
            <div className="col-md-4">© Copyright 2022 by Exponent Finserv Private Limited

</div>
            <div className="col-md-4"></div>
            <div className="col-md-4">Social Media</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
