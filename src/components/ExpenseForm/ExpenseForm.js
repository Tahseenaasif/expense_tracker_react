import React, { useEffect, useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ addExpense,formValues,updateExpense }) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  useEffect(()=>{
    expenseTextInput.current.value=formValues.text?formValues.text :"";
    expenseAmountInput.current.value=formValues.amount?formValues.amount:"";
  },[formValues])

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(!formValues){
      const expenseText = expenseTextInput.current.value;
      const expenseAmount = expenseAmountInput.current.value;
      if (parseInt(expenseAmount) === 0) {
        return;
      }
  
      const expense = {
        text: expenseText,
        amount: expenseAmount,
        id: new Date().getTime()
      };
      addExpense(expense);
      clearInput();
      return;
    }else{
      const data=formValues;
      data.id=formValues.id;
      data.text=expenseTextInput.current.value;
      data.amount= expenseAmountInput.current.value;
     // console.log("this data in submit form handeler",data);
      updateExpense(data);

    }
  };

  const clearInput = () => {
    expenseAmountInput.current.value = "";
    expenseTextInput.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      {/* Change text to Edit Transaction if an expense is to be updated */}
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
      
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        ref={expenseAmountInput}
        required
      />
      <button className={styles.submitBtn}>
        {/* Change text to Edit Transaction if an expense is to be updated */}
        {formValues? "Edit Transaction" :" Add Transaction"}
       
      </button>
    </form>
  );
};

export default ExpenseForm;
