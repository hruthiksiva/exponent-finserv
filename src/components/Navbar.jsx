

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Left: Logo */}
        <a className="navbar-brand" href="/">
          <img
            src="/path-to-your-logo.png"
            alt="Exponent Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2"
          />
          Exponent
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
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/service">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/application">Application</a>
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