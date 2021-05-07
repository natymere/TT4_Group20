import React from "react";
import "../TransactionHistory.css";

export default function TransactionHistoryItem({ transaction }) {
  const dateTime = new Date(transaction.datetime * 1000).toLocaleString();
  const incoming = transaction.payeeID === 20;

  return (
    <span className="list-group-item">
      <ul className="list-group list-group-horizontal justify-content-center">
        <li className="list-group-item col-sm-3">
          <h2>{incoming ? transaction.custID : transaction.payeeID}</h2>
        </li>
        <li className="list-group-item col-md-4">
          <h2>{dateTime}</h2>
        </li>
        <li className="list-group-item col-sm-2">
          <h2>
            {(
              Math.round(transaction.amount * (incoming ? 100 : -100)) / 100
            ).toFixed(2)}
          </h2>
        </li>
      </ul>
      {/* <span className="customer-id">
        <h2>{incoming ? transaction.custID : transaction.payeeID}</h2>
      </span>
      <span className="date-time">
        <h2>{dateTime}</h2>
      </span>
      <span className="date-time">
        <h2>
          {(
            Math.round(transaction.amount * (incoming ? 100 : -100)) / 100
          ).toFixed(2)}
        </h2>
      </span> */}
    </span>
  );
}
