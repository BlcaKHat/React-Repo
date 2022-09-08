import React, { Component } from 'react'
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) =>{
    const getFormData = (data)=>{
        console.log("from newExpense");
        console.log(data);
        props.onSubmit(data);
    }
    return <div className='new-expense'>
        <ExpenseForm onFormSubmit={getFormData}/>
    </div>
}

export default NewExpense;