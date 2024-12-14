import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import loanDetails from '../assets/files/loan-details.json';

const ServiceDetails = ({ loanType }) => {
  const [loanData, setLoanData] = useState(null);
  useEffect(() => {
    // Dynamically load data based on loanType prop (personalLoan or businessLoan)
    setLoanData(loanDetails[loanType]);
  }, [loanType]);

  if (!loanData) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="" style={{paddingLeft:'10%', paddingRight:'10%'}}>
      <Row>
        <Col xl={12} md={12} lg={12} sm={12} xs={12} className="">
          <Col className="shadow-none ">
          <Col>
            <img src={`/public/services/${loanType}.png`} className='shadow-lg img-fluid mt-5 rounded-4 ' style={{width:'100%'}} />
            <Col className='contact-us mt-5' style={{width:'5%', height:"5px" }}> </Col>
            <Col className='pt-4 pb-5'>
            <h1>{loanData.title}</h1>
            </Col>
              {loanData.sections.map((section, index) => (
                <div className='mb-5' key={index}>
                  <h5 className="mb-3">{section.heading}</h5>
                  {Array.isArray(section.content) ? (
                    <ListGroup variant="flush">
                      {section.content.map((item, idx) => (
                        <ListGroup.Item className='border-0'  style={{backgroundColor:'#F4F0EE'}} key={idx}>{item}</ListGroup.Item>
                      ))}
                    </ListGroup>
                  ) : (
                    <p>{section.content}</p>
                  )}
                </div>
              ))}
            </Col>
            <Col className="my-5 d-flex justify-content-lg-start justify-content-center">
                <Button className="contact-us border-0 rounded-3 px-4 py-2" href="/application">
                  Apply
                </Button>
              </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceDetails;
