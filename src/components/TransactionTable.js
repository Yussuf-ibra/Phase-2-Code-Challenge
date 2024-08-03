import React from 'react';

const TransactionTable =({transactions})=>{
    return(
        <table>
            <thread>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thread>
            <tbody>
                {transactions.map(transactions=>(
                    <tr key={transactions.id}>
                        <td>{transactions.date}</td>
                        <td>{transactions.description}</td>
                        <td>{transactions.category}</td>
                        <td>{transactions.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionTable