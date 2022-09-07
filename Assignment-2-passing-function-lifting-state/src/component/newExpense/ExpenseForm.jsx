import React, { Component, useState } from 'react'
import './ExpenseForm.css';
import {ExpensesData} from '../../Data';
import uuid from 'react-uuid';

const ExpenseForm = () =>{
    const [enteredTitle, setTitle]= useState("");
    const [enteredAmount, setAmount]= useState('');
    const [enteredDate, setDate] = useState('20220-07-31');
    const [formData, setData] = useState({
        title: '',
        amount: '',
        date: '',
    })
    const handleForm = (event)=>{
        event.preventDefault();
        const expanseData ={
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate
        }
        console.log(expanseData);
        setTitle("");
        setAmount("");
        setDate("");
        
    }
    // const handleTitle = (event)=>{
    //     setData((prev)=>{
    //        return{...prev,title:event.target.value} 
    //     });
    //     console.log(formData);
    // };
    

    const handleTitle = (event)=>{
        setTitle(event.target.value);
        console.log(formData);
    };

    const handleAmount = (event)=>{
        setAmount(event.target.value);
        console.log(formData);
    }

    const handleDate = (event)=>{
        setDate(event.target.value);
        console.log(formData);
    }

    return <form onSubmit={handleForm}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label> Title.</label>
                <input 
                    value={enteredTitle} 
                    onChange={handleTitle} 
                    type='text' />
            </div>
            <div className='new-expense__control'>
                <label> Amount </label>
                <input 
                    value={enteredAmount}
                    onChange={handleAmount} 
                    type='text' 
                    min={0.1} step={0.01} />
            </div>
            <div className='new-expense__control'>
                <label> Date </label>
                <input 
                    value={enteredDate} 
                    onChange={handleDate} 
                    type='date' 
                    min={'2019-01-01'} max = {'2022-12-31'} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
        
    </form>
}

export default ExpenseForm;