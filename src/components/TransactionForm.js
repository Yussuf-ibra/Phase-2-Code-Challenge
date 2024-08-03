import React,{useState} from 'react';

const TransactionForm =({onAddTransaction})=>{
    const [date,setDate]= useState('')
    const [description,setDescription]= useState('')
    const [category,setCategory]=useState('')
    const [amount ,setAmount]= useState('')


const handleSubmit = (e)=>{
    e.preventDefault()
    const newTransaction ={date,description,category,amount :parseFloat(amount)}
    onAddTransaction(newTransaction)
}
return (
  <form onSubmit={handleSubmit}>
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      required
    ></input>
    <input
      type="text"
      placeholder="Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      required
    ></input>
    <input
      type="text"
      placeholder="Category"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    required
    ></input>
    <input
   type='number'
   placeholder='Amount'
   value={amount}
   onChange={(e)=>setAmount(e.target.value)}
   required 
   ></input>
   <button type='submit'>Add transaction</button>
  </form>
);
}

export default TransactionForm