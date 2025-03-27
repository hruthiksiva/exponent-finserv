import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import trustImage from "../assets/images/resources/trust-1-1.png";

const TrustedCompany = () => {
  return (
    <section className="trusted-company py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="p-4 shadow-sm border-0 bg-white">
              <Row className="align-items-center">
                <Col lg={6}>
                  <div className="mb-4">
                    <h5 className="text-uppercase text-primary">Trusted Company</h5>
                    <h2 className="fw-bold">Service that is fast is what we trust</h2>
                  </div>
                  <div className="d-flex align-items-start gap-3">
                    <img src={trustImage} alt="Trust" height={148} width={171} className="img-fluid rounded" />
                    <p className="text-muted">
                      We make the loan process seamless and easy by aggregating you on the right banks, so that you can make your dreams a reality.
                      With just a few simple steps, you will be on your way to realizing your dream.
                    </p>
                  </div>
                  <Row className="mt-4">
                    <Col sm={6}>
                      <ListGroup variant="flush">
                        {["Credit Card", "Personal Loan", "Car / Auto Loan", "Home Loan"].map((item, index) => (
                          <ListGroup.Item key={index} className="d-flex align-items-center border-0 bg-transparent">
                            <FaCheckCircle className="text-success me-2" /> {item}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Col>
                    <Col sm={6}>
                      <ListGroup variant="flush">
                        {["Gold Loan", "Mortgage Loan", "Education / Student Loan", "Wedding Loan"].map((item, index) => (
                          <ListGroup.Item key={index} className="d-flex align-items-center border-0 bg-transparent">
                            <FaCheckCircle className="text-success me-2" /> {item}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Col>
                  </Row>
                </Col>
                <Col lg={6}>
                  <Row className="g-3">
                    {["A credit score of 750 and above", "Submit Required Documents for loan approval", "Check your eligibility", "Apply for loan calculating the EMI you could afford"].map((text, index) => (
                      <Col xs={12} key={index}>
                        <Card className="shadow-sm border-0 text-center p-3">
                          <h4 className="text-primary fw-bold">{index + 1}</h4>
                          <p className="text-muted">{text}</p>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TrustedCompany;