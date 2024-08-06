
import React, { useState, useEffect } from "react";
import TransactionTable from "./components/TransactionTable";
import TransactionForm from "./components/TransactionForm";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App = () => {
  // State to store transactions and search term
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch transactions from the backend when the component mounts
  useEffect(() => {
    fetch("https://bank-offlatron-barkend.vercel.app/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  // Function to add a new transaction
  const handleAddTransaction = (newTransaction) => {
    fetch("https://bank-offlatron-barkend.vercel.app/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((data) => setTransactions([...transactions, data]));
  };

  // Filter transactions based on the search term
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Bank of Flatiron</h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
