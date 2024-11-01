import React, {useState} from 'react';
import ExpenseItemDetails from './ExpenseItemDetails';
import './ExpenseList.css';
import ExpenseCategory from './ExpenseCategory';

const ExpenseList = (props) => {
    const [categoryExpenses, setCategoryExpenses] = useState(props.allExpenses);
    const updateExpenses = (updatedExpenses) => {
        setCategoryExpenses(updatedExpenses);
    }
    console.log(categoryExpenses);
    
    return (
        <div className="expense_list">
            <ExpenseCategory allExpenses={props.allExpenses} updateExpenses={updateExpenses}/>
            {categoryExpenses.map((expense) => (
                <ExpenseItemDetails
                    key={expense.id}
                    date={expense.date}
                    item={expense.item}
                    price={expense.price}
                    location = {expense.location}
                    category = {expense.category}
                />
            ))}
        </div>
    );
};

export default ExpenseList;
