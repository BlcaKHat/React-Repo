import React from 'react';
import Date from '../helper/Date'
import Card from '../helper/Card'
import './expancesItem.css'
function ExpanseItem(props){
    return(
        <div>
        <Card>
            <div className='expense-item'>
                <Date date = {props.spent.date} />
                <div className='expense-item__description'>
                <h2>title: {props.spent.title}</h2>
                <p className='expense-item__price'>amount: {props.spent.amount}</p>
                </div>
            </div>
        </Card>
        </div>

            
            

        
    )
}
export default ExpanseItem;