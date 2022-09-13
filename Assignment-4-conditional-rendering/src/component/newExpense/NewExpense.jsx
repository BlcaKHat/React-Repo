import React, {useState} from 'react'
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'
import AddExpenseOption from './AddExpenseOption';

const NewExpense = (props) =>{
    const [FormToogle, toogle] = useState(false);

    const getFormData = (data)=>{
        console.log("from newExpense");
        console.log(data);
        props.onSubmit(data);
        toogle(false);
        console.log("formdata")
        console.log(FormToogle)
    }
    const AddAction= ()=>{
        toogle(true);
    }
    const getCancelAction=()=>{
        toogle(false)
        console.log("cancel")
    }
    let renderForm = FormToogle ?<ExpenseForm onCancel={getCancelAction} onFormSubmit={getFormData}/>
                     :<AddExpenseOption onAddClick={AddAction} /> 
    return <div className='new-expense'>
        {renderForm}
    </div>
}

export default NewExpense;