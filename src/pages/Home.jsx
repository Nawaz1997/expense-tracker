import './Home.css';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import Leftbar from '../components/Leftbar';
import ExpenseList from '../components/expenses/ExpenseList';
import NewExpense from '../components/NewExpense';
import Compare from '../components/Compare';
import Plan from '../components/Plan';

const Home = () => {
    const { user } = useContext(AuthContext);
    const [comp, setComp] = useState('Home');
    const [expenses, setExpenses] = useState();
    const component = (value) => {
        setComp(value);
    };

    useEffect(() => {
        fetch(`http://localhost:2000/api/expenses/${user?._id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('SUCCESS', data);
                setExpenses(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const updateExpensesHandler = (newExpense) => {
        setExpenses([newExpense, ...expenses]);
    };

    const colorChanger = () => {
        if (comp === 'Home') {
            const home = document.getElementById('home');
            home.style.color = 'black';
        } else {
            const home = document.getElementById('home');
            home.style.color = 'wheat';
        }

        if (comp === 'Add Expense') {
            const add_expense = document.getElementById('add_expense');
            add_expense.style.color = 'black';
        } else {
            const add_expense = document.getElementById('add_expense');
            add_expense.style.color = 'wheat';
        }

        if (comp === 'Catalog') {
            const catalog = document.getElementById('catalog');
            catalog.style.color = 'black';
        } else {
            const catalog = document.getElementById('catalog');
            catalog.style.color = 'wheat';
        }

        if (comp === 'Compare') {
            const compare = document.getElementById('compare');
            compare.style.color = 'black';
        } else {
            const compare = document.getElementById('compare');
            compare.style.color = 'wheat';
        }
    };

    useEffect(() => {
        colorChanger();
    }, [comp]);

    return (
        <>
            <Navbar />
            <div className="content_div">
                <Leftbar component={component} />
                {comp === 'Home' ? <Plan /> : null}
                {comp === 'Catalog' ? <ExpenseList allExpenses={expenses} /> : null}
                {comp === 'Add Expense' ? (
                    <NewExpense updateExpenses={updateExpensesHandler} />
                ) : null}
                {comp === 'Compare' ? <Compare /> : null}
            </div>
        </>
    );
};

export default Home;
