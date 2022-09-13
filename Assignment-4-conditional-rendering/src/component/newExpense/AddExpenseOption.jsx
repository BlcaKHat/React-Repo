import React from 'react'
import './AddExpenseOption.css'

const AddExpenseOption = (props)=>{

    const callNewExpense =(event)=>{
        event.preventDefault();
        props.onAddClick()
    }
    return(
        <div className='new-expense'>
        <form onSubmit={callNewExpense}>
            <button>Add New Expense.</button>
        </form>
    </div>
    )

}

export default AddExpenseOption;