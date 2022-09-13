import React, { useState } from 'react';
import './expances.css';
import '../newExpense/ExpensesFilter.css'
import {uuid} from 'react-uuid';
import ExpensesList from './ExpensesList';
import ExpensesFilter from '../newExpense/ExpensesFilter';

function Expanse(props){
    const data= props.data;
    const [filterValue, setValue] = useState(data)

    // filter data based upon filtered year...
    const selectedYear =(year)=>{
        const filteredData = data.filter((obj)=> obj.date.slice(0,4) === year);
        setValue(filteredData);
        console.log(filterValue);
    } 
    return(
        <div className='expenses'>
            <ExpensesFilter key={uuid}  onFilter={selectedYear}/>
            <ExpensesList data ={filterValue} />
        </div>
    )

}

export default Expanse;