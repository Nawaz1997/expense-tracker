import React, { useContext, useState} from 'react';

const MonthPlannedData = () => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(new Date().toLocaleString('en-US', {month: 'long'}));

    const [month, setMonth] = useState(selectedMonth);
    const [monthlyIncome, setMonthlyIncome] = useState(0);
    const [monthAllCategory, setMonthAllCategory] = useState(0);
    const [monthFood, setMonthFood] = useState(0);
    const [monthTravel, setMonthTravel] = useState(0);
    const [monthHealth, setMonthHealth] = useState(0);
    const [monthEntertainment, setMonthEntertainment] = useState(0);
    const [monthAccommodation, setMonthAccommodation] = useState(0);
    const [monthMiscellaneous, setMonthMiscellaneous] = useState(0);

    function findMonth(monthPlan) {
        if(monthPlan.month == selectedMonth && monthPlan.year == selectedYear)
                return true;
        return false;
    }

    return (
        <div>
            <div><div>Month:</div><span>{month}</span></div>
            <div><div>Monthly Income:</div><span>Rs.{monthlyIncome}</span></div>
            <div><div>All Category:</div><span>Rs.{monthAllCategory}</span></div>
            <div><div>Food:</div><span>Rs.{monthFood}</span></div>
            <div><div>Health:</div><span>Rs.{monthHealth}</span></div>
            <div><div>Travel:</div><span>Rs.{monthTravel}</span></div>
            <div><div>Entertainment:</div><span>Rs.{monthEntertainment}</span></div>
            <div><div>Accommodation:</div><span>Rs.{monthAccommodation}</span></div>
            <div><div>Miscellaneous:</div><span>Rs.{monthMiscellaneous}</span></div>
        </div>
    );
}

export default MonthPlannedData;