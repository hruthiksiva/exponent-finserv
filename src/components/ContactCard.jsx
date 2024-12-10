const ContactCard = () => {
  return (
    <div>
      <div className="container-xl py-5 text-center">
      <div className="row">
        <div className="col-md-12 d-flex align-text-center justify-content-center rounded-4" style={{backgroundColor: '#002147',width:'100%',height:'350px'}}>
            <div className="lh-lg" style={{paddingTop:'80px',color:'#F4F0EE'}}>
              <h1>Ready to transform your finances?</h1>
              <p className="py-3 px-5 mx-5" style={{opacity:'60%'}}>Ready to take the next step? Contact us today and discover how Exponent Finserv can elevate your financial journey.</p>
              <a href="#" className="btn contact-us ">Contact Us</a>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactCard;