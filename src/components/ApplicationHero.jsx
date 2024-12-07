import ContactForm from "./ContactForm";

const ApplicationHero = () => {
  return (
    <div>
      <div className="container col-xxxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
          <ContactForm />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Fast, Flexible Loans</h1>
            <h1 className="display-5 fw-bold lh-1 mb-3">Tailored Just For You</h1>
            <p className="lead">Creativity is intelligence having fun.</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationHero;