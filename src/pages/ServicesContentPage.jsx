import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';

const ServicesContentPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={12} lg={8} className="mx-auto">
          <Card className="shadow-sm">
            <Card.Header className="text-center bg-primary text-white">
              <h3>Personal Loan Details</h3>
            </Card.Header>
            <Card.Body>
              {/* Overview Section */}
              <h5 className="mb-3">What is a Personal Loan?</h5>
              <p>
                A personal loan is a type of unsecured loan that allows you to borrow funds from a bank or financial institution
                for personal expenses like medical emergencies, weddings, home renovations, or travel. No collateral is required
                for a personal loan, and the repayment is usually in monthly installments (EMIs).
              </p>

              {/* When to Consider a Personal Loan Section */}
              <h5 className="mb-3">When Should You Consider a Personal Loan?</h5>
              <ListGroup variant="flush">
                <ListGroup.Item>1. Emergency Expenses - To meet urgent medical or other unforeseen expenses.</ListGroup.Item>
                <ListGroup.Item>2. Debt Consolidation - To combine multiple high-interest debts into a single, manageable loan.</ListGroup.Item>
                <ListGroup.Item>3. Major Purchases or Events - Funding for weddings, home renovations, or large purchases.</ListGroup.Item>
                <ListGroup.Item>4. Educational or Travel Needs - Supporting higher education or a dream vacation.</ListGroup.Item>
              </ListGroup>

              <p className="mt-3">
                *Note: Personal loans should only be considered if you are confident in your ability to repay them.
              </p>

              {/* How to Apply for a Personal Loan Section */}
              <h5 className="mb-3">How to Apply for a Personal Loan in a Bank?</h5>
              <ListGroup variant="flush">
                <ListGroup.Item>1. Check Eligibility - Banks typically look at your age, income, credit score, and employment status.</ListGroup.Item>
                <ListGroup.Item>2. Gather Necessary Documents - Common documents include ID proof, income proof, and bank statements.</ListGroup.Item>
                <ListGroup.Item>3. Apply for the Loan - You can apply in person at the bank or through their website.</ListGroup.Item>
                <ListGroup.Item>4. Verification Process - The bank will verify your application and documents.</ListGroup.Item>
                <ListGroup.Item>5. Approval and Disbursement - Upon approval, the loan amount will be credited to your account.</ListGroup.Item>
              </ListGroup>

              {/* Difficulties in Applying Directly through Banks */}
              <h5 className="mb-3">Difficulties in Applying Directly Through Banks</h5>
              <ListGroup variant="flush">
                <ListGroup.Item>1. Lengthy Paperwork - The documentation process can be overwhelming and time-consuming.</ListGroup.Item>
                <ListGroup.Item>2. Strict Eligibility Criteria - Low credit score or income can lead to rejection.</ListGroup.Item>
                <ListGroup.Item>3. Long Processing Time - Approval and disbursement may take longer than expected.</ListGroup.Item>
                <ListGroup.Item>4. Hidden Charges - You may overlook fees like processing fees or prepayment penalties.</ListGroup.Item>
                <ListGroup.Item>5. Limited Loan Options - You may not be aware of all the available loan options with the best terms.</ListGroup.Item>
              </ListGroup>

              {/* How We Make the Process Smooth */}
              <h5 className="mb-3">How We Make the Process Smooth</h5>
              <p>We streamline the entire process by offering the following services:</p>
              <ListGroup variant="flush">
                <ListGroup.Item>1. Guidance on Eligibility - We assess your financial profile and recommend the best options.</ListGroup.Item>
                <ListGroup.Item>2. Document Assistance - We help you collect and organize the required documents.</ListGroup.Item>
                <ListGroup.Item>3. Faster Processing - We coordinate with banks to expedite approvals and disbursements.</ListGroup.Item>
                <ListGroup.Item>4. Offer Comparison - We compare multiple offers to get you the best rates.</ListGroup.Item>
                <ListGroup.Item>5. Transparency - We ensure you understand all charges and terms before proceeding.</ListGroup.Item>
              </ListGroup>

              {/* Risks Involved in Taking a Personal Loan */}
              <h5 className="mb-3">Risks Involved in Taking a Personal Loan</h5>
              <ListGroup variant="flush">
                <ListGroup.Item>1. High Interest Rates - Personal loans often carry higher rates compared to secured loans.</ListGroup.Item>
                <ListGroup.Item>2. Repayment Burden - Failing to make timely payments can hurt your credit score and incur penalties.</ListGroup.Item>
                <ListGroup.Item>3. Over-Borrowing - Borrowing more than you need can strain your finances.</ListGroup.Item>
                <ListGroup.Item>4. Prepayment Penalties - Some banks charge fees if you repay the loan earlier than agreed.</ListGroup.Item>
                <ListGroup.Item>5. Financial Instability - Poor financial planning could lead to difficulties in repaying the loan.</ListGroup.Item>
              </ListGroup>

              {/* Tips to Be Cautious About */}
              <h5 className="mb-3">Tips to Be Cautious About</h5>
              <ListGroup variant="flush">
                <ListGroup.Item>1. Borrow Only What You Need - Don’t overestimate your loan needs.</ListGroup.Item>
                <ListGroup.Item>2. Understand Loan Terms - Always read the loan agreement carefully before signing.</ListGroup.Item>
                <ListGroup.Item>3. Check Your Credit Score - A better score can help you get a loan with better terms.</ListGroup.Item>
                <ListGroup.Item>4. Plan Your Repayments - Ensure your EMI fits comfortably within your budget.</ListGroup.Item>
                <ListGroup.Item>5. Avoid Scams - Only work with trusted intermediaries and lenders.</ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button variant="primary" href="/apply-now">Apply for Personal Loan</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ServicesContentPage;
