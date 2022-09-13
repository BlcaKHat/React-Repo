import React, { useState } from 'react';
import Expanse from './component/expense/Expanse';
import './component/expense/expances.css'
import NewExpense from './component/newExpense/NewExpense';

function App() {

const ExpensesData=[
  {
    title: 'Toilet Paper',
    amount: 94.12,
    date: "2022-09-02",
  },
  {
    title: 'New TV', 
    amount: 799.49, 
    date: "2022-08-02",
  },
  {
    title: '2021', 
    amount: 799.4, 
    date: "2021-08-02",
  },
  {
    title: '2021-2nd', 
    amount: 799.4, 
    date: "2021-01-02",
  }
]
const [expense, setExpense]= useState(ExpensesData);
const addData =(formData)=>{
    setExpense((prev)=>{
      return [...prev, formData];
    })
}
  return (
      <div>
          <NewExpense onSubmit={addData}/>
          <Expanse data={expense}/>
      </div> 
  );
}

export default App;
