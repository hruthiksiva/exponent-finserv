import { useState } from "react";
import { Form, Card } from "react-bootstrap";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(10);
  const [loanTenure, setLoanTenure] = useState(12);

  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const emi =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) /
      (Math.pow(1 + monthlyRate, loanTenure) - 1);
    return emi.toFixed(2);
  };

  return (
    <div className="container-xl py-5">
    <Card className="p-4 shadow-lg border-0 ">
    <div className="row px-5">
    <h3 className="text-center">EMI Calculator</h3>
    </div>

      <Form>
        <Form.Group>
          <Form.Label>Loan Amount (₹)</Form.Label>
          <Form.Range
            min={10000}
            max={1000000}
            step={5000}
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
          />
          <p>₹ {loanAmount}</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>Interest Rate (%)</Form.Label>
          <Form.Range
            min={5}
            max={20}
            step={0.1}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
          <p>{interestRate} %</p>
        </Form.Group>

        <Form.Group>
          <Form.Label>Loan Tenure (Months)</Form.Label>
          <Form.Range
            min={6}
            max={60}
            step={1}
            value={loanTenure}
            onChange={(e) => setLoanTenure(Number(e.target.value))}
          />
          <p>{loanTenure} months</p>
        </Form.Group>
      </Form>
      <h4 className="text-center mt-3">EMI: ₹ {calculateEMI()}</h4>
    </Card>
    </div>

  );
};
export default EMICalculator;