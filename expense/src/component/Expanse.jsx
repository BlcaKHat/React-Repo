import React from 'react';
import {ExpensesData} from '../Data'
import ExpanseItem from './ExpanseItem';
import './expances.css'

function Expanse(){
    console.log(ExpensesData);
    return(
        <div className='expenses'>
        {ExpensesData.map((spent, index)=>{
        return <ExpanseItem spent={spent} key={index} />
    }
    )
}       </div>
    )
}

export default Expanse;