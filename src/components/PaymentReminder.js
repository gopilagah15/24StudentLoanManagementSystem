// components/PaymentReminder.js
import React, { useEffect } from 'react';

const PaymentReminder = ({ loanDetails }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      const dueDate = new Date(); // Assume due date for example purposes
      dueDate.setDate(dueDate.getDate() + 30);
      alert(`Reminder: Payment due in 30 days for loan amount $${loanDetails.amount}`);
    }, 30000);

    return () => clearInterval(interval);
  }, [loanDetails]);

  return <div><h3>Payment Reminder Set</h3></div>;
};

export default PaymentReminder;
