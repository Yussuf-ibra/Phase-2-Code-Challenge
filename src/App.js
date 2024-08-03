// src/App.js
import React, { useState, useEffect } from "react";
import TransactionTable from "./components/TransactionTable.js";
import TransactionForm from "./components/TransactionForm.js";
import SearchBar from "./components/SearchBar.js";
import'./App.css'


const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  const handleAddTransaction = (newTransaction) => {
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((data) => setTransactions([...transactions, data]));
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
console.log("Search Term: searchTerm")
console.log("Filtered Transactions:filteredTransactions")
  return (
    <div>
      <h1>Bank of Flatiron</h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
