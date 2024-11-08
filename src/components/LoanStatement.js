// components/LoanStatement.js
import React from 'react';

const LoanStatement = ({ loanDetails, payments }) => {
  const { amount, interestRate, duration } = loanDetails;
  const interest = (amount * interestRate * duration) / 100;

  return (
    <div>
      <h2>Loan Statement</h2>
      <p>Loan Amount: ${amount}</p>
      <p>Interest Rate: {interestRate}%</p>
      <p>Duration: {duration} months</p>
      <p>Total Interest: ${interest.toFixed(2)}</p>
      <h3>Payments Made</h3>
      <ul>
        {payments.map((payment, index) => (
          <li key={index}>{payment.date.toLocaleDateString()} - ${payment.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default LoanStatement;
