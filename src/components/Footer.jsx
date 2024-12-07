
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#002147', color: 'white', padding: '20px 0' }}>
      <div className="container">
        <div className="row">
        <div className="col-md-6 -pl-3">
            <h2>Exponent Finserv</h2>
          </div>
          <div className="col-md-6">
          <div className="d-flex justify-content-end">
            <a className="btn contact-us" href="/contact">
              Contact Us
            </a>
          </div>
          </div>
          
        </div>
        <hr></hr>
        <div className="row p-3">

          {/* Left Section: Newsletter Signup */}
          <div className="col-md-4 pb-5">
            <h5 className="highlight-on-hover-yellow pb-3">Newsletter</h5>
            <div style={{ textAlign: 'justify' }}>
            <p>Subscribe to our newsletter for expert loan tips, exclusive offers, and financial insights to help you make informed decisions. sign up now!</p>
            </div>
            <form>
              <div className="mb-4">
                <label htmlFor="newsletterEmail" className="form-label pb-2">
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
              <div className="d-grid gap-2">
              <button type="submit" className="btn contact-us">
                Subscribe
              </button>
              </div>
              
            </form>
          </div>

          {/* Middle Section: Explore Links */}
          <div className="col-md-2 p-3">
            <h5 className="highlight-on-hover-yellow pb-2">INFORMATION</h5>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">
                <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
              </li>
              <li className="mb-2">
                <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
              </li>
              <li className="mb-2"> 
                <a href="/service" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
              </li>
              <li className="mb-2">
                <a href="/application" style={{ color: 'white', textDecoration: 'none' }}>Application</a>
              </li>
              <li className="mb-2">
                <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</a>
              </li>

            </ul>
          </div>

          <div className="col-md-2 p-3">
          <h5 className="highlight-on-hover-yellow pb-2">LEGAL</h5>
            <ul className="list-unstyled mb-4">
            <li className="mb-2">
                <a href="/terms-of-use" style={{ color: 'white', textDecoration: 'none' }}>Terms of Use</a>
              </li>
              <li className="mb-2">
                <a href="/privacy-policy" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="/trade-mark-policy" style={{ color: 'white', textDecoration: 'none' }}>Trademark Policy</a>
              </li>
              </ul>
          </div>

          {/* Right Section: Contact Details */}
          <div className="col-md-4 p-3">
            <h5 className="highlight-on-hover-yellow pb-2">Contact Details</h5>
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
          <div className=""></div>

          <hr></hr>

          <div className="row">
            <div className="col-md-4 p-2">© Copyright 2022 by Exponent Finserv Private Limited

</div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="d-flex justify-content-end">
              <div className="social-icons">
                  <a href="https://www.facebook.com/yourpage" target="_blank" className="social-icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="Facebook"  width="20" height="20"/>
                  </a>
                  <a href="https://twitter.com/yourprofile" target="_blank" className="social-icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733605.png" alt="Twitter"  width="20" height="20"/>
                  </a>
                  <a href="https://twitter.com/yourprofile" target="_blank" className="social-icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733614.png" alt="Twitter"  width="20" height="20"/>
                  </a>
                  <a href="https://www.instagram.com/yourprofile" target="_blank" className="social-icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733634.png" alt="Instagram"  width="20" height="20"/>
                  </a>
                  <a href="https://www.linkedin.com/in/yourprofile" target="_blank" className="social-icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733646.png" alt="LinkedIn" width="25" height="25"/>
                  </a>
                  <a href="https://www.youtube.com/yourchannel" target="_blank" className="social-icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733641.png" alt="YouTube" width="20" height="20"/>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
