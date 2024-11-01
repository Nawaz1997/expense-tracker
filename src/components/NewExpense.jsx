import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import './NewExpense.css';

const NewExpense = (props) => {
    const { user } = useContext(AuthContext);
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

    const newExpense = {
        UserId: user?._id,
        date: new Date(date),
        item: item,
        price: price,
        location: location,
        category: category,
    };

    const submitHandler = (event) => {
        event.preventDefault();

        fetch('http://localhost:2000/api/expenses', {
            method: 'POST',
            body: JSON.stringify(newExpense),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });

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
