import React from "react";

import "../TransactionHistory.css";

export default function TransactionHistoryItem() {
  return (
    // <span className="transaction-item">
    //   <span className="customer-id">
    //     <h2>Payer/Payee ID</h2>
    //   </span>
    //   <span className="date-time">
    //     <h2>Date and Time</h2>
    //   </span>
    //   <span className="date-time">
    //     <h2>Amount</h2>
    //   </span>
    // </span>
    <span className="list-group-item">
      <ul className="list-group list-group-horizontal justify-content-center">
        <li className="list-group-item col-sm-3">
          <h2>Payer/Payee ID</h2>
        </li>
        <li className="list-group-item col-md-4">
          <h2>Date and Time</h2>
        </li>
        <li className="list-group-item col-sm-2">
          <h2>Amount</h2>
        </li>
      </ul>
    </span>
  );
}
