import React from 'react';
import './ExpenseCategory.css';

const ExpenseCategory = (props) => {
    const expenseCategoryHandler = (element) => {

        const expenseCategory = document.getElementById(element);
        if (expenseCategory.textContent === 'All') {
            props.updateExpenses(props.allExpenses);
        }
        if (expenseCategory.textContent === 'Food') {
            props.updateExpenses(props.allExpenses.filter((expense) => expense.category == 'Food'));
        }
        if (expenseCategory.textContent === 'Health') {
            props.updateExpenses(props.allExpenses.filter((expense) => expense.category == 'Health'));
        }
        if (expenseCategory.textContent === 'Travel') {
            props.updateExpenses(props.allExpenses.filter((expense) => expense.category == 'Travel'));
        }
        if (expenseCategory.textContent === 'Accommodation') {
            props.updateExpenses(props.allExpenses.filter((expense) => expense.category == 'Accommodation'));
        }
        if (expenseCategory.textContent === 'Entertainment') {
            props.updateExpenses(props.allExpenses.filter((expense) => expense.category == 'Entertainment'));
        }
        if (expenseCategory.textContent === 'Miscellaneous') {
            props.updateExpenses(props.allExpenses.filter((expense) => expense.category == 'Miscellaneous'));
        }
    };

    return (
        <div id="category_div">
            <div id="all" className="categories" onClick={() => {expenseCategoryHandler('all')}}>
                All
            </div>
            <div  id="food" className="categories" onClick={() => {expenseCategoryHandler('food')}}>
                Food
            </div>
            <div id="health" className="categories" onClick={() => {expenseCategoryHandler('health')}}>
                Health
            </div>
            <div id="travel" className="categories" onClick={() => {expenseCategoryHandler('travel')}}>
                Travel
            </div>
            <div id="accommodation" className="categories" onClick={() => {expenseCategoryHandler('accommodation')}}>
                Accommodation
            </div>
            <div id="entertainment" className="categories" onClick={() => {expenseCategoryHandler('entertainment')}}>
                Entertainment
            </div>
            <div id="miscellaneous" className="categories" onClick={() => {expenseCategoryHandler('miscellaneous')}}>
                Miscellaneous
            </div>
        </div>
    );
};

export default ExpenseCategory;
