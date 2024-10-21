import React, { useState } from 'react';
import './NewExpense.css';

const NewExpense = (props) => {
    const [item, setItem] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');

    const itemHandler = (event) => {
        setItem(event.target.value);
    };

    const priceHandler = (event) => {
        setPrice(event.target.value);
    };

    const dateHandler = (event) => {
        setDate(event.target.value);
    };

    const locationHandler = (event) => {
        setLocation(event.target.value);
    };

    const categoryHandler = (event) => {
        setCategory(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const newExpense = {
            id: Math.random(),
            date: new Date(date),
            item: item,
            price: price,
            location: location,
            category: category,
        };

        props.updateExpenses(newExpense);

        setItem('');
        setDate('');
        setCategory('');
        setLocation('');
        setPrice('');
    };

    return (
        <div className="add_expense_div">
            <div className="expense_form_div">
                <form onSubmit={submitHandler}>
                    <div className="form_div">
                        <div className="input_fields">
                            <label htmlFor="">Expense Item</label>
                            <br />
                            <input type="text" onChange={itemHandler} />
                        </div>
                        <div className="input_fields">
                            <label htmlFor="">Cost</label>
                            <br />
                            <input type="number" onChange={priceHandler} />
                        </div>
                        <div className="input_fields">
                            <label htmlFor="">Date</label>
                            <br />
                            <input type="date" onChange={dateHandler} />
                        </div>
                        <div className="input_fields">
                            <label htmlFor="">Location</label>
                            <br />
                            <input type="text" onChange={locationHandler} />
                        </div>
                        <div className="input_fields">
                            <label htmlFor="">Category</label>
                            <br />
                            <input type="text" onChange={categoryHandler} />
                        </div>
                        <div id="submit_div">
                            <br />
                            <input id="submit_btn" type="submit" value="Add Expense" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewExpense;
