import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItemDetails.css';

const ExpenseItemDetails = (props) => {
    const price = props.price;
    const item = props.item;
    const location = props.location;
    const category = props.category;

    return (
        <div className="expense_item_details_div">
            <ExpenseDate date={props.date} />
            <div className="item_price_div">
                <div className="item_div">
                    <div className="item_name_div">{item}</div>
                    <div className="location_div">{location}</div>
                    <div className="type_div">({category})</div>
                </div>
                <div className="price_div">Rs.{price}</div>
            </div>
            <div className='options_div'>C</div>
        </div>
    );
};

export default ExpenseItemDetails;
