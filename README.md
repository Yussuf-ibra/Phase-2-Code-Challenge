markdown
Copy code
# Bank of Flatiron

Welcome to the Bank of Flatiron, where you can trust us with all your financial data! This project is a React application that displays a list of recent bank transactions and allows you to add and filter transactions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Core Features](#core-features)
- [Advanced Features](#advanced-features)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)
- JSON Server (for mock backend)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Yussuf-ibra/phase-2-code-challenge
   cd bank-of-flatiron
Install the dependencies:

bash
Copy code
npm install
Start the JSON server:

bash
Copy code
json-server --watch db.json --port 3001
Start the React application:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000.

Usage
Viewing Transactions
The application displays a table of transactions fetched from the backend API. You can view details such as the date, description, category, and amount for each transaction.

Adding a Transaction
Fill out the form at the top of the page to add a new transaction. After submission, the new transaction is posted to the backend and displayed in the transactions table.

Filtering Transactions
Use the search bar to filter transactions by description. The table updates in real-time to show only the transactions that match the search term.

Endpoints
GET /transactions
Fetches all transactions.

Example Response:

json
Copy code
[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  }
]
POST /transactions
Adds a new transaction.

Required Headers:

json
Copy code
{
  "Content-Type": "application/json"
}
Request Body:

json
Copy code
{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": number
}
Example Response:

json
Copy code
{
  "id": 3,
  "date": "2020-01-01",
  "description": "New Year's Party",
  "category": "Entertainment",
  "amount": -200
}
## Core Features
View Transactions: Displays a table of all transactions.
Add Transaction: Form to add a new transaction, which is then persisted to the backend.
Filter Transactions: Search bar to filter transactions by description.
## Advanced Features
These features are optional and can be implemented to enhance the application:

Sort Transactions: Sort transactions alphabetically by category or description.
Delete Transaction: Remove a transaction from the table and the backend.
DELETE /transactions/
Deletes a transaction by ID.

Example Response:

json
Copy code
{}


Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
## deploylink
https://phase-2-code-challenge-two.vercel.app/
## License
This project is licensed under the MIT License 
