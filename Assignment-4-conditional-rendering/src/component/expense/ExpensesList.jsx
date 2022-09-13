import React from 'react';
import ExpanseItem from './ExpanseItem';
import './ExpensesList.css';
import Total from '../helper/Total';
import {uuid} from 'react-uuid';

const ExpensesList = (props)=>{

    if(props.data.length === 0){
     return   <h2> There is No data to display!!...</h2>
    }
    return(<div>
                 <div className='expenses'>
                {props.data.map((spent)=>{
                    return <ExpanseItem 
                    key={uuid} 
                    spent={spent} />
                })}
             </div>
            {/* <Total total={total} /> */}
        </div>
    )
}

export default ExpensesList;