import { useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
   // console.log("this is expenseTextInput ",expenseTextInput.current.value,"expenseAmountInput",expenseAmountInput.current.value)
    props.expenseHandler(expenseTextInput.current.value,expenseAmountInput.current.value)
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        ref={expenseTextInput}
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense,positive-income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        ref={expenseAmountInput}
        type="number"
        placeholder="Enter amount..."
        required
      />
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
};

export default ExpenseForm;
