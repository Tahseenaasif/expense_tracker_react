import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction.js";

const ExpenseList = (props) => {
  const deleteHandler = (index) => {
    props.deleteHandler(index);
    //console.log("Deleting transaction at index:", index);
  };

  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {props.expenses.map((element, i) => (
          <Transaction expense={element} key={i} index={i} deleteHandler={deleteHandler} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
