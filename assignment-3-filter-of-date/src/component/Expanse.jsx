import React, { useState } from 'react';
// import {ExpensesData} from '../Data'
import ExpanseItem from './ExpanseItem';
import Total from './Total';
import './expances.css'
import ExpensesFilter from './newExpense/ExpensesFilter';
import uuid from 'react-uuid';

function Expanse(props){
    const data= props.data;
    // const [total, addTotal]=useState(0);
    const totalAmt =  data.reduce((total, item)=> total + item.amount,0);
    const [filterValue, setValue] = useState(data)

    // filter data based upon filtered year...
    const selectedYear =(year)=>{
        const filteredData = data.filter((obj)=> obj.date.slice(0,4) === year);
        setValue(filteredData);
        console.log(filterValue);
    } 
    // console.log("from expense");
    // console.log(filterYear);

    return(
    <div className='expenses'>
        <div>
            <ExpensesFilter key={uuid}  onFilter={selectedYear}/>
        </div>
        {filterValue.map((spent)=>{
        return(
                    <div>
                        <ExpanseItem key={uuid} spent={spent} />
                    </div>
        ) 
        })}
        <Total total ={totalAmt} />
    </div>
    )
}

export default Expanse;