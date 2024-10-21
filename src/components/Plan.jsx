import React from 'react';
import './Plan.css';
import Description from './Description';
import SetPlan from './SetPlan';

const Plan = () => {
    return (
        <div id="home_content_div">
            <Description />
            <div id="middle_line_div"></div>
            <div id="month_year_set_values_div">
                <div id="month_year_div">
                    <p>Month</p>
                    <p>Year</p>
                </div>
                <div id="month_div">
                    <div>
                        <div className="income_div">
                            <div>
                                <label htmlFor="">Month</label>
                                <br />
                                <input type="text" />
                            </div>
                        </div>
                        <div className="income_div">
                            <div>
                                <label htmlFor="">Income</label>
                                <br />
                                <input type="number" />
                            </div>
                        </div>
                    </div>
                    <SetPlan />
                </div>
                <div id="year_div">
                    <div>
                        <div className="income_div">
                            <div>
                                <label htmlFor="">Year</label>
                                <br />
                                <input type="number" />
                            </div>
                        </div>
                        <div className="income_div">
                            <div>
                                <label htmlFor="">Income</label>
                                <br />
                                <input type="number" />
                            </div>
                        </div>
                    </div>
                    <SetPlan />
                </div>
            </div>
        </div>
    );
};

export default Plan;
