import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });

    return (
        <div className="date_div">
            <div className="day">{day}</div>
            <div className='month_year_div'>
                <div className="month">{month}</div>
                <div className="year">{year}</div>
            </div>
        </div>
    );
};

export default ExpenseDate;
