import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import './MonthPlan.css';

const MonthPlan = () => {
    const { user } = useContext(AuthContext);
    const [month, setMonth] = useState('');
    const [monthly_income, setMonthlyIncome] = useState('');
    const [all_category, setAllCategory] = useState('');
    const [food, setFood] = useState('');
    const [travel, setTravel] = useState('');
    const [health, setHealth] = useState('');
    const [entertainment, setEntertainment] = useState('');
    const [miscellaneous, setMiscellaneous] = useState('');
    const [accommodation, setAccommodation] = useState('');

    function monthHandler(e) {
        setMonth(e.target.value);
    }
    function incomeHandler(e) {
        setMonthlyIncome(e.target.value);
    }
    function allCategoryHandler(e) {
        setAllCategory(e.target.value);
    }
    function foodHandler(e) {
        setFood(e.target.value);
    }
    function travelHandler(e) {
        setTravel(e.target.value);
    }
    function healthHandler(e) {
        setHealth(e.target.value);
    }
    function entertainmentHandler(e) {
        setEntertainment(e.target.value);
    }
    function miscellaneousHandler(e) {
        setMiscellaneous(e.target.value);
    }
    function accommodationHandler(e) {
        setAccommodation(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        const monthPlan = {
            UserId: user?._id,
            year: new Date().getFullYear(),
            month: month,
            monthly_income: monthly_income,
            all_category: all_category,
            food: food,
            health: health,
            travel: travel,
            entertainment: entertainment,
            accommodation: accommodation,
            miscellaneous: miscellaneous,
        };

        fetch('http://localhost:2000/api/month-expense-plan', {
            method: 'POST',
            body: JSON.stringify(monthPlan),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));

        setAccommodation('');
        setAllCategory('');
        setEntertainment('');
        setFood('');
        setHealth('');
        setMiscellaneous('');
        setMonth('');
        setMonthlyIncome('');
        setTravel('');
    }

    return (
        <form action="" onSubmit={submitHandler}>
            <div id="set_plan_form_div" className="month_div">
                <div>
                    <div className="income_div">
                        <div>
                            <label htmlFor="">Month</label>
                            <br />
                            <input type="text" onChange={monthHandler} />
                        </div>
                    </div>
                    <div className="income_div">
                        <div>
                            <label htmlFor="">Monthly_Income</label>
                            <br />
                            <input type="number" onChange={incomeHandler} />
                        </div>
                    </div>
                </div>
                <div className="set_values_div">
                    <label htmlFor="">All Category</label>
                    <br />
                    <input type="number" onChange={allCategoryHandler} />
                </div>
                <div className="set_values_div">
                    <label htmlFor="">Food</label>
                    <br />
                    <input type="number" onChange={foodHandler} />
                </div>
                <div className="set_values_div">
                    <label htmlFor="">Health</label>
                    <br />
                    <input type="number" onChange={healthHandler} />
                </div>
                <div className="set_values_div">
                    <label htmlFor="">Travel</label>
                    <br />
                    <input type="number" onChange={travelHandler} />
                </div>
                <div className="set_values_div">
                    <label htmlFor="">Accommodation</label>
                    <br />
                    <input type="number" onChange={accommodationHandler} />
                </div>
                <div className="set_values_div">
                    <label htmlFor="">Entertainment</label>
                    <br />
                    <input type="number" onChange={entertainmentHandler} />
                </div>
                <div className="set_values_div">
                    <label htmlFor="">Miscellaneous</label>
                    <br />
                    <input type="number" onChange={miscellaneousHandler} />
                </div>
                <div className="set_values_div">
                    <input type="submit" value="Done" name="" id="set_plan_submit_btn" />
                </div>
            </div>
        </form>
    );
};

export default MonthPlan;
