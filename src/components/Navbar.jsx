import React from 'react';
import './Navbar.css';

const Navbar = () => {    
    function clickHandler() {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <div className="navbar_div">
            <div className="name_div">Expense_Tracker</div>
            <div className="list_div">
                    <li>Account</li>
                    <li onClick={clickHandler}>Logout</li>
            </div>
        </div>
    );
};

export default Navbar;
