// components/RepaymentProgress.js
import React from 'react';

const RepaymentProgress = ({ loanDetails, payments }) => {
  const totalPaid = payments.reduce((sum, payment) => sum + payment.amount, 0);
  const totalDue = loanDetails.amount + (loanDetails.amount * loanDetails.interestRate * loanDetails.duration) / 100;
  const remainingBalance = totalDue - totalPaid;
  const progress = ((totalPaid / totalDue) * 100).toFixed(2);

  return (
    <div>
      <h2>Repayment Progress</h2>
      <p>Total Paid: ${totalPaid.toFixed(2)}</p>
      <p>Remaining Balance: ${remainingBalance.toFixed(2)}</p>
      <p>Repayment Progress: {progress}%</p>
    </div>
  );
};

export default RepaymentProgress;
