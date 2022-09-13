import React from 'react';
import './total.css';

function Total(props){
    return(
        <div className='total'>
            <h2 >Total expendeture is :<p className='amount'>{props.total}</p> </h2>
        </div>
        
    )
}
export default Total;