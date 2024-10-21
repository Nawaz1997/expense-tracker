import React from 'react';
import './Leftbar.css';

const Leftbar = (props) => {
    return (
        <div className="leftbar_div">
            <ul className="do_list">
                <li id='home' onClick={() => props.component("Home")}>Home</li>
                <li id='add_expense' onClick={() => props.component("Add Expense")}>Add Expense</li>
                <li id='catalog' onClick={() => props.component("Catalog")}>Catalog</li>
                <li id='compare' onClick={() => props.component("Compare")}>Compare</li>
            </ul>
        </div>
    );
};

export default Leftbar;
