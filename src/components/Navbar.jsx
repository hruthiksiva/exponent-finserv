import logodark from "../assets/images/logo-dark-1.png"
const Navbar = () => {
  return (
    <div style={{ position: 'sticky', top: '0' , zIndex:'1000'}}>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: '#F4F0EE',
          boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div className="container-fluid mx-lg-5 px-lg-5">
          {/* Logo and Hamburger Menu */}
          <div className="d-flex justify-content-start align-items-center w-sm-100 px-4 px-lg-0">
            {/* Hamburger Menu for Small Screens */}
            <button
              className="navbar-toggler d-lg-none me-4"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Logo */}
            <a className="navbar-brand fs-4" href="/">
              <img
                src={logodark}
                alt="Exponent Logo"
                width="40"
                height="40"
                className="d-inline-block align-text-top img-fluid m-1 me-3"
              />
              Exponent Finserv
            </a>
          </div>

          {/* Navigation Links and Contact Button */}
          <div className="collapse navbar-collapse px-4 px-lg-0" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item me-4">
                <a className="nav-link highlight-on-hover-blue" href="/">Home</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link highlight-on-hover-blue" href="/about">About</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link highlight-on-hover-blue" href="/service">Services</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link highlight-on-hover-blue" href="/application">Application</a>
              </li>
            </ul>
            <br></br>

            {/* Contact Us Button */}
            <div className="d-grid">

              <a
                className="btn custom_button px-4 py-2"
                href="/contact"
                style={{ whiteSpace: 'nowrap' }}
              >
                Become Partner
              </a>
            </div>
            <br></br>
            <div className="d-grid px-1">

              <a
                className="btn contact-us px-4 py-2"
                href="/contact"
                style={{ whiteSpace: 'nowrap' }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Sticky Line Below Navbar */}
      <div
        style={{
          height: '1px',
          backgroundColor: '#000',
          opacity: '0.1',
        }}
      ></div>
    </div>
  );
};

export default Navbar;
