import React from 'react';
import './expanseDate.css';
function Date(props){
    const [year, month, day] = props.date.split('-')
    // const month= props.date.
    // const day= props.date.
    // const year= props.date.

    return(
        <div className='expense-date'>
            <div className='expense-date__month'> {month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    )
}

export default Date;