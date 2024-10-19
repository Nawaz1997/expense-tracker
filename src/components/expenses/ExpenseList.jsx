import React from 'react';
import ExpenseItemDetails from './ExpenseItemDetails';
import './ExpenseList.css';

const ExpenseList = (props) => {
    return (
        <div className="expense_list">
            {props.allExpenses.map((expense) => (
                <ExpenseItemDetails
                    key={expense.id}
                    date={expense.date}
                    item={expense.item}
                    price={expense.price}
                    location = {expense.location}
                    type = {expense.type}
                />
            ))}
        </div>
    );
};

export default ExpenseList;
