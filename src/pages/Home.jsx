import './Home.css';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Leftbar from '../components/Leftbar';
import ExpenseList from '../components/expenses/ExpenseList';
import RightUpperbar from '../components/RightUpperbar';
import RightLowerbar from '../components/RightLowerbar';
import NewExpense from '../components/NewExpense';
import Compare from '../components/Compare';
import Plan from '../components/Plan';

let DUMMY_DATA = [
    {
        id: 1,
        date: new Date(2024, 0, 18),
        item: 'Pizza',
        price: 600,
        location: 'Noida, Delhi',
        category: 'Food',
    },
    {
        id: 2,
        date: new Date(2024, 3, 22),
        item: 'Hair Cutting',
        price: 70,
        location: 'Malviya Nagar, Delhi',
        category: 'Miscellaneous',
    },
    {
        id: 3,
        date: new Date(2024, 9, 19),
        item: 'Metro Travel',
        price: 95,
        location: 'Delhi',
        category: 'Travel',
    },
    {
        id: 4,
        date: new Date(2024, 11, 16),
        item: 'Electricity Bill',
        price: 2000,
        location: 'Delhi',
        category: 'Accommodation',
    },
    {
        id: 5,
        date: new Date(2024, 1, 13),
        item: 'Doctor Fees',
        price: 500,
        location: 'Mehrauli, Delhi',
        category: 'Health',
    },
    {
        id: 6,
        date: new Date(2024, 7, 26),
        item: 'Movie',
        price: 1000,
        location: 'Saket PVR, Delhi',
        category: 'Entertainment',
    },
];

const Home = () => {
    const [comp, setComp] = useState('Home');
    const component = (value) => {
        setComp(value);
    };

    const [expenses, setExpenses] = useState(DUMMY_DATA);
    const updateExpensesHandler = (newExpense) => {
        DUMMY_DATA = [newExpense, ...expenses];
        setExpenses(DUMMY_DATA);
    };

    const colorChanger = () => {
        if(comp === "Home"){
            const home = document.getElementById('home');
            home.style.color = "black";
        }else{
            const home = document.getElementById('home');
            home.style.color = "wheat";
        }

        if(comp === "Add Expense"){
            const add_expense = document.getElementById('add_expense');
            add_expense.style.color = "black";
        }else{
            const add_expense = document.getElementById('add_expense');
            add_expense.style.color = "wheat";
        }

        if(comp === "Catalog"){
            const catalog = document.getElementById('catalog');
            catalog.style.color = "black";
        }else{
            const catalog = document.getElementById('catalog');
            catalog.style.color = "wheat";
        }

        if(comp === "Compare"){
            const compare = document.getElementById('compare');
            compare.style.color = "black";
        }else{
            const compare = document.getElementById('compare');
            compare.style.color = "wheat";
        }
    };

    useEffect(() => {
        colorChanger();
    }, [comp])


    return (
        <>
            <Navbar />
            <div className="content_div">
                <Leftbar component={component} />
                {comp === 'Home' ? <Plan /> : null}
                {comp === 'Catalog' ? <ExpenseList allExpenses={expenses} /> : null}
                {comp === 'Add Expense' ? <NewExpense updateExpenses={updateExpensesHandler} /> : null}
                {comp === 'Compare' ? <Compare /> : null}
                {/* <div className="right_bar_div">
                    <RightUpperbar />
                    <RightLowerbar />
                </div> */}
            </div>
        </>
    );
};

export default Home;
