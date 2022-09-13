import React from 'react';
import '../expense/expanseDate.css';
function Date(props){
    const [year, month, day] = props.date.split('-')
    
    return(
        <div className='expense-date'>
            <div className='expense-date__month'> {month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    )
}

export default Date;