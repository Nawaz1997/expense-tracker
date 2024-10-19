import './App.css';
import ExpenseList from './components/expenses/ExpenseList';

let DUMMY_DATA = [
    {
        id: 1,
        date: new Date(2024, 0, 18),
        item: 'Pizza',
        price: 600,
        location: 'Noida, Delhi',
        type: 'Food'
    },
    {
        id: 2,
        date: new Date(2024, 3, 22),
        item: 'Hair Cutting',
        price: 70,
        location: 'Malviya Nagar, Delhi',
        type: 'Miscellaneous'
    },
    {
        id: 3,
        date: new Date(2024, 9, 19),
        item: 'Metro Travel',
        price: 95,
        location: 'Delhi',
        type: 'Travel'
    },
    {
        id: 4,
        date: new Date(2024, 11, 16),
        item: 'Electricity Bill',
        price: 2000,
        location: 'Delhi',
        type: 'Accommodation'
    },
    {
        id: 5,
        date: new Date(2024, 1, 13),
        item: 'Doctor Fees',
        price: 500,
        location: 'Mehrauli, Delhi',
        type: 'Health'
    },
    {
        id: 6,
        date: new Date(2024, 7, 26),
        item: 'Movie',
        price: 1000,
        location: 'Saket PVR, Delhi',
        type: 'Entertainment'
    },
];

function App() {
    return (
        <div className="app_div">
            <ExpenseList allExpenses={DUMMY_DATA} />
        </div>
    );
}

export default App;
