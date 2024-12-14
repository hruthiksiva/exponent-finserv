const ContactCard = () => {
  return (
    <div>
    <div className="container-fluid col-10 py-5 text-center">
      <div className="row mx-auto">
        <div
          className="d-flex align-items-center justify-content-center rounded-4"
          style={{
            backgroundImage: 'url(/public/custom_card.png)', // replace with your image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '350px',
          }}
        >
          <div className="lh-lg" style={{color: '#F4F0EE', width: '100%' }}>
            <h1 className="text-wrap">Ready To Transform Your Finances?</h1>
            <p className="col-6 mx-auto" style={{ opacity: '85%' }}>
              Are you ready to step up? Contact us now to see how Exponent can elevate your financial journey.
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
