import React from "react";
import styles from "./ExpenseList.module.css";

export default class ExpenseList extends React.Component {
  render() {
    const { expenseList } = this.props;
    return (
      <div className={styles.expenseListContainer}>
        <h3>Transactions</h3>
        <ul className={styles.transactionList}>
          {
            expenseList.map((element, i) => (
              <li key={i}>{element}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}
