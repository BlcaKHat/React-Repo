import React, { useState } from 'react';
import {ExpensesData} from '../Data'
import ExpanseItem from './ExpanseItem';
import Total from './Total';
import './expances.css'
import ExpensesFilter from './newExpense/ExpensesFilter';


function Expanse(){
    // const [total, addTotal]=useState(0);
    const totalAmt =  ExpensesData.reduce((total, item)=> total + item.amount,0);
    const [filterYear, setYear] = useState("")

    const selectedYear =(year)=>{
        console.log(year)
        setYear(year);
    } 
    console.log("from expense");
    console.log(filterYear);

    return(
    <div className='expenses'>
        {ExpensesData.map((spent, index)=>{
        return( <div>
                    <div>
                    <ExpensesFilter onFilter={selectedYear}/>
                    </div>
                    <div>
                        <ExpanseItem spent={spent} key={index} />
                    </div>
                </div>
        ) 
        })}
        <Total total ={totalAmt} />
    </div>
    )
}

export default Expanse;