const ContactCard = () => {
  return (
    <div>
      <div className="container-fluid col-11 px-5 py-5 text-center my-5">
        <div className="row">
          <div
            className="col-12 d-flex align-items-center justify-content-center rounded-4 "
            style={{ backgroundColor: '#002147', width: '100%', height: '350px' }}
          >
            <div className="lh-lg" style={{ paddingTop: '40px', color: '#F4F0EE', width: '90%' }}>
              <h1 className="text-wrap">Ready to transform your finances?</h1>
              <p className="py-3 px-4 mx-2" style={{ opacity: '60%' }}>
                Are you ready to step-up? Contact us now to see how Exponent can elevate your financial journey.
              </p>
              <a href="#" className="btn contact-us">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
