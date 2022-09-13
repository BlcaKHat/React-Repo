import React from 'react'

const AddForm = (props)=>{
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
    return <form >
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
                    min={'2019-01-01'} max = {'2022-12-12'} />
            </div>
        </div>
        <div className='new-expense__actions'>
            
            <button onClick={handleForm} name='addExpense' value={"addButton"} type='submit'>Add Expense.</button>
        </div>
    </form>
}