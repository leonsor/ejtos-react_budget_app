import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    //const totalExpenses = expenses.reduce((total, item) => {
    //    return (total += (item.unitprice * item.quantity));
    //}, 0);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}  {budget}</span>
        </div>
    );
};

export default Budget;
