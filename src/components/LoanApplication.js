// components/LoanApplication.js
import React, { useState } from 'react';

const LoanApplication = ({ applyForLoan }) => {
  const [amount, setAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    applyForLoan({ amount: parseFloat(amount), interestRate: parseFloat(interestRate), duration: parseInt(duration) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Apply for Loan</h2>
      <input type="number" placeholder="Loan Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <input type="number" placeholder="Interest Rate (%)" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} required />
      <input type="number" placeholder="Duration (months)" value={duration} onChange={(e) => setDuration(e.target.value)} required />
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default LoanApplication;
