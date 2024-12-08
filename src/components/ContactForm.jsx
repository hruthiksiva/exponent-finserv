import { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js"; // HubSpot script source
    script.async = true;

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "48469515",
          formId: "fc413350-ef89-4a6a-9c78-be7a62ca8864",
          target: "#hubspotForm"
        });
      }
    };

    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <div className="container col-xxxxl-8 px-4 py-4">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
          {/* <form className="p-4 p-md-5 border rounded-3 bg-light">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Mobile Number</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="mb-3">
          <div className="dropdown">
            <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Type of Loan
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
          </div>
          <div className="mb-3">
          <div className="dropdown">
            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Quantity of Loan
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
          <hr className="my-4"/>
          <small className="text-muted">By clicking Submit, you agree to the terms of use.</small>
        </form> */}
        <div id="hubspotForm"></div>
          </div>
          <div className="col-lg-6">
          <img src="src/assets/images/tree-1.png" className="display-5 fw-bold lh-1 mb-3 img-fluid" alt="Bootstrap Themes" width="300" loading="lazy" />
            <h1 className="display-5 fw-bold lh-1 mb-3">Fast, Flexible Loans</h1>
            <h1 className="display-5 fw-bold lh-1 mb-3">Tailored Just For You</h1>
            <p className="fs-4">Creativity is intelligence having fun.</p>

          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default ContactForm;