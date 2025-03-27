
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#002147', color: 'white', padding: '20px 0' }}>
      <div className="container-fluid px-5">
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
        <div className="row">

          {/* Left Section: Newsletter Signup */}
          <div className="col-md-3 col-lg-4 pb-5">
            <br></br>
            <div style={{ textAlign: 'justify' }}>
            <p>
            Exponent Finserv is dedicated to transforming financial aspirations into reality. With a strong commitment to innovation, reliability, and customer-centric solutions, we empower businesses and individuals with tailored financial services. Our vision is to create a future where financial freedom is accessible to all, supported by cutting-edge technology and expert guidance.              </p>
            </div>
            <button type="submit" className="btn contact-us">
                Contact Us
              </button>
          </div>

          {/* Middle Section: Explore Links */}
          <div className="col-md-3 col-lg-2 p-3">
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
            <h5 className="highlight-on-hover-yellow pb-2">CONTACT DETAILS</h5>
            <p>
              <strong>Main Address:</strong> #39, NGEF Lane, 2nd Floor, Suite No. 1467 Indiranagar Bangalore, Karnataka
            </p>
            <p>
              <strong>Our Offices:</strong> Chennai, Bangalore, Kochi, Hyderabad, Mumbai, Visakhapatnam
            </p>

            
            <p>
              <strong>Email:</strong> <a href="mailto:care@exponentfinserv.com" style={{ color: 'white', textDecoration: 'none' }}>care@exponentfinserv.com</a>
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:+918270586878" style={{ color: 'white', textDecoration: 'none' }}>+91 8270 58 68 78</a>
            </p>
            <p>
              <strong>CIN:</strong> U67100TN2021PTC146710
            </p>
          </div>
          <div className=""></div>

          <hr></hr>

          <div className="row">
            <div className="col-md-4 p-2">© Copyright 2025 by Exponent Finserv Private Limited

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
