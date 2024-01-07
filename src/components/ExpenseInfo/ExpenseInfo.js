import React, { useState, useEffect } from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = (props) => {
  const [balance, setBalance] = useState(0);
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [expenseAmount, setExpenseAmount] = useState(0);

  useEffect(() => {
    updateState();
  }, [props.expenses]);

  const updateState = () => {
    let totalExpense = 0;
    let totalIncome = 0;

    props.expenses.forEach((element) => {
      const numericAmount = Number(element.amount || 0);

      if (numericAmount < 0) {
        totalExpense += numericAmount;
      } else if (numericAmount > 0) {
        totalIncome += numericAmount;
      }
    });

    setBalance(totalIncome + totalExpense);
    setExpenseAmount(totalExpense);
    setIncomeAmount(totalIncome);
  };

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${balance}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${incomeAmount}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${expenseAmount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
