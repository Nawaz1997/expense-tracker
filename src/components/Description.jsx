import React from 'react';
import './Description.css';

const Description = () => {
    return (
            <div className="description_div">
                <p>Hi User</p>
                <p>
                    This is the plateform where you can record your daily basis and occasional
                    expenses.
                </p>
                <p>
                    You are also provided with the facility to delete and update a particular
                    expense.
                </p>
                <p>Expenses are divided into 6 categories:</p>
                <p>FOOD: Expenses related to food and eatings.</p>
                <p>HEALTH: Expenses related health and medicines.</p>
                <p>TRAVEL: Expenses done on traveling.</p>
                <p>
                    ACCOMMODATION: Expenses done on Accommodation like electricity bill, house rent,
                    etc.
                </p>
                <p>ENTERTAINMENT: Expenses related to entertainment.</p>
                <p>
                    MISCELLANEOUS: Expenses which you find difficult to put in any of the above
                    categories.
                </p>
                <p>
                    Below you can set your income along with the expected or desired overall
                    expenses for each category and for all categories as whole on yearly and monthly
                    basis.
                </p>
            </div>
    );
};

export default Description;
