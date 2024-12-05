

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Left: Logo */}
        <a className="navbar-brand" href="/">
          <img
            src="src/assets/images/logo-dark-1.png"
            alt="Exponent Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top me-2"
          />
          Exponent Finserv
        </a>

        {/* Hamburger Menu for Smaller Screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Middle: Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
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


          {/* Right: Contact Us */}
          <div className="d-flex">
            <a className="btn contact-us" href="/contact">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;