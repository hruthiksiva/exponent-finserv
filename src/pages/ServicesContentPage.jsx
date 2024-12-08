import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import loanDetails from '../assets/files/loan-details.json';

const ServiceDetails = ({ loanType = 'personalLoan' }) => {
  const [loanData, setLoanData] = useState(null);

  useEffect(() => {
    // Dynamically load data based on loanType prop (personalLoan or businessLoan)
    setLoanData(loanDetails[loanType]);
  }, [loanType]);

  if (!loanData) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={12} lg={8} className="mx-auto">
          <Card className="shadow-sm">
            <Card.Header className="text-center bg-primary text-white">
              <h3>{loanData.title}</h3>
            </Card.Header>
            <Card.Body>
              {loanData.sections.map((section, index) => (
                <div key={index}>
                  <h5 className="mb-3">{section.heading}</h5>
                  {Array.isArray(section.content) ? (
                    <ListGroup variant="flush">
                      {section.content.map((item, idx) => (
                        <ListGroup.Item key={idx}>{item}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  ) : (
                    <p>{section.content}</p>
                  )}
                </div>
              ))}
            </Card.Body>
            <Card.Footer className="text-center">
              <Button variant="primary" href="/apply-now">Apply for {loanData.title}</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceDetails;
