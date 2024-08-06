import React, { useState } from "react";

const TransactionForm = ({onAddTransaction})=>{
  const [formData,setFormData]=useState({
    date:'',
    description:'',
    category:'',
    amount:''
  });
  //form input handle
  const handlechange =(event)=>{
    setFormData({
      ...formData,
      [event.target.name]:event.target.value
    });
  };
  
}