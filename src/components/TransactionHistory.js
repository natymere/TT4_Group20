import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { useState, useEffect } from "react";
import TransactionHistoryItem from "./TransactionHistoryItem";
import TransactionHistoryTitles from "./TransactionHistoryTitles";

export default function TransactionHistory(props) {
  const [transactions, setTransactions] = useState([]);
  const [monthView, setMonthView] = useState(0);

  useEffect(() => {
    const getTransactionHistory = async () => {
      const transactionHistoryFromServer = await fetchTransactions();
      transactionHistoryFromServer.sort((a, b) => b.datetime - a.datetime);
      setTransactions(transactionHistoryFromServer);
    };
    getTransactionHistory();
  }, []);

  const refreshTransactions = async () => {
    const transactionHistoryFromServer = await fetchTransactions();
    transactionHistoryFromServer.sort((a, b) => b.datetime - a.datetime);
    setTransactions(transactionHistoryFromServer);
  };

  const fetchTransactions = async () => {
    const res = await fetch(
      "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view",
      {
        method: "POST",
        headers: {
          "x-api-key": "jWw6Vw4WxKaVmy5YPAvz2fAEraoq9Ds6IiqRxXd5",
        },
        body: JSON.stringify({
          custID: 20,
          accountKey: "g173jb87-loda-ztz1-3xed-6r051kzozte",
        }),
      }
    );

    const data = await res.json();
    // console.log(data);
    return data;
  };

  const RefreshTransactionsButton = ({ onClick }) => {
    return (
      <button onClick={onClick} className="btn btn-primary m-2">
        Refresh transactions
      </button>
    );
  };

  const SelectMonth = () => {
    setMonthView();
  };

  const MonthSelectorButton = ({ onClick, month }) => {
    return (
      <button onClick={onClick} className="btn btn-primary">
        {month}
      </button>
    );
  };

  return (
    <div>
      <h1>Transaction History</h1>
      <RefreshTransactionsButton onClick={refreshTransactions} />

      {/* <ul className="pagination pagination-sm">
        <li className="page-item active" aria-current="page">
          <span className="page-link">May</span>
        </li>
        <li className="page-item">
          <span className="page-link">April</span>
        </li>
        <li className="page-item">
          <span className="page-link">March</span>
        </li>
        <li className="page-item">
          <span className="page-link">February and earlier</span>
        </li>
      </ul> */}

      <ul className="list-group">
        <TransactionHistoryTitles />
        {transactions.map((transaction, index) => (
          <TransactionHistoryItem key={index} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}
