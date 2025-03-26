import { useState } from "react";
import { Form, Card } from "react-bootstrap";

const PersonalLoanCalculator = () => {
  const [salary, setSalary] = useState(50000);
  const [existingEMI, setExistingEMI] = useState(0);
  const maxLoanEligibility = (salary - existingEMI) * 12;

  return (
    <div className="container-xl py-5">
    <Card className="p-4 shadow-lg border-0">
      <h3 className="text-center">Personal Loan Eligibility</h3>
      <Form>
        <Form.Group>
          <Form.Label>Monthly Salary (₹)</Form.Label>
          <Form.Range
            min={15000}
            max={200000}
            step={1000}
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
          />
          <p>₹ {salary}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>Existing EMI (₹)</Form.Label>
          <Form.Range
            min={0}
            max={salary / 2}
            step={500}
            value={existingEMI}
            onChange={(e) => setExistingEMI(Number(e.target.value))}
          />
          <p>₹ {existingEMI}</p>
        </Form.Group>
      </Form>
      <h4 className="text-center mt-3">Max Loan Eligibility: ₹ {maxLoanEligibility}</h4>
    </Card>
    </div>

  );
};

  export default PersonalLoanCalculator;