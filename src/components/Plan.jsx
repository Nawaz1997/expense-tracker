import React, { useState } from 'react';
import './Plan.css';
import Description from './Description';
import MonthPlan from './MonthPlan';
import YearPlan from './YearPlan';
import MonthPlannedData from './MonthPlannedData';

const Plan = () => {
    const [form, setForm] = useState("Month");
    const [btn, setBtn] = useState('Description');

    const formHandler = (value) => {
        setForm(value);
    }

    function btnHandler(value) {
        setBtn(value);
    }

    return (
        <div id="home_content_div">
            <div>
                <button onClick={() => {btnHandler('Description')}}>Description</button>
                <button onClick={() => {btnHandler('Plan')}}>Plan</button>
            </div>
            {btn === "Description" ? <Description/> : null}
            {btn === "Plan" ? <MonthPlannedData/> : null}
            <div id="middle_line_div"></div>
            <div id="month_year_set_values_div">
                <div id="month_year_div">
                    <div className='x'onClick={() => {formHandler("Month")}}>Month</div>
                    <div className='x'onClick={() => {formHandler("Year")}}>Year</div>
                </div>
                {form === "Month" ? <MonthPlan /> : null}
                {form === "Year" ? <YearPlan /> : null}
            </div>
        </div>
    );
};

export default Plan;
