import { useState } from 'react';
import React from 'react';
import './ExpenseForm.css';

const ExpesnseForm = () => {

  const [eneteredTitle, setEnteredTitile] = useState('');
  const [eneteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const titleChangeHandler = (event) => {
    setEnteredTitile(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: eneteredTitle,
      amount: eneteredAmount,
      date: new Date(enteredDate)
    }

    console.log(expenseData);
    setEnteredTitile('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return <form onSubmit={submitHandler}>
    <div className='new-expense_controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' value={eneteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01' value={eneteredAmount} onChange={amountChangeHandler} />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' min='2019-01-01' max='2023-12-31' value={enteredDate} onChange={dateChangeHandler} />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='submit'>Submit</button>
    </div>
  </form>
}

export default ExpesnseForm;