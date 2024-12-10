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
      <div className="container px-4 py-4">
        <div className="row align-items-center g-5 py-5">

          {/* Form Section */}
          <div className="col-12 col-sm-8 col-md-6 mx-auto order-1 order-lg-2">
            <div id="hubspotForm"></div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-center text-center">
            <img 
              src="src/assets/images/tree-1.png" 
              className="img-fluid mb-3" 
              alt="Bootstrap Themes" 
              width="300" 
              loading="lazy" 
              style={{ maxWidth: "100%" }}
            />
            <h1 className="display-5 fw-bold lh-1 mb-3">Fast, Flexible Loans</h1>
            <h1 className="display-5 fw-bold lh-1 mb-3">Tailored Just For You</h1>
            <p className="fs-4">Creativity is intelligence having fun.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactForm;
