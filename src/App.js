// App.js
import React, { useState } from 'react';
import LoanApplication from './components/LoanApplication';
import PaymentReminder from './components/PaymentReminder';
import LoanStatement from './components/LoanStatement';
import RepaymentProgress from './components/RepaymentProgress';

const App = () => {
  const [loanDetails, setLoanDetails] = useState(null);
  const [payments, setPayments] = useState([]);

  const applyForLoan = (details) => {
    setLoanDetails(details);
  };

  const makePayment = (amount) => {
    const newPayments = [...payments, { date: new Date(), amount }];
    setPayments(newPayments);
  };

  return (
    <div>
      <h1>Student Loan Management System</h1>
      <LoanApplication applyForLoan={applyForLoan} />
      {loanDetails && (
        <>
          <PaymentReminder loanDetails={loanDetails} />
          <LoanStatement loanDetails={loanDetails} payments={payments} />
          <RepaymentProgress loanDetails={loanDetails} payments={payments} />
        </>
      )}
    </div>
  );
};

export default App;
