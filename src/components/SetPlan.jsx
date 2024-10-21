import React from 'react';
import './SetPlan.css';

const SetPlan = () => {
    return (
        <form action="">
            <div id="set_plan_form_div">
                <div className="set_values_div">
                    <label htmlFor="">All Category</label>
                    <br />
                    <input type="number" />
                </div>
                <div className="set_values_div">
                    <label htmlFor="">Food</label>
                    <br />
                    <input type="number" />
                </div>
                <div className="set_values_div">
                    <label htmlFor="">Health</label>
                    <br />
                    <input type="number" />
                </div>
                <div className="set_values_div">
                    <label htmlFor="">Travel</label>
                    <br />
                    <input type="number" />
                </div>
                <div className="set_values_div">
                    <label htmlFor="">Accommodation</label>
                    <br />
                    <input type="number" />
                </div>
                <div className="set_values_div">
                    <label htmlFor="">Entertainment</label>
                    <br />
                    <input type="number" />
                </div>
                <div className="set_values_div">
                    <label htmlFor="">Miscellaneous</label>
                    <br />
                    <input type="number" />
                </div>
                <div className="set_values_div">
                    <input type="submit" value="Done" name="" id="set_plan_submit_btn" />
                </div>
            </div>
        </form>
    );
};

export default SetPlan;
