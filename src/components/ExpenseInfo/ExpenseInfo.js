import React from "react";
import styles from "./ExpenseInfo.module.css";

export default class ExpenseInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      incomeAmount: 0,
      expenseAmount: 0
    };
  }

  componentDidMount() {
    this.updateState();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.amount !== this.props.amount || prevProps.expenseType !== this.props.expenseType) {
      this.updateState();
    }
  }

  updateState() {
    const { amount } = this.props;
    const numericAmount = Number(amount); 

    if (numericAmount < 0) {
      
      this.setState((prevState) => ({
        balance: Number(prevState.balance) + numericAmount,
        expenseAmount: prevState.expenseAmount +(- numericAmount)
      }));
    } else if (numericAmount > 0) {
      this.setState((prevState) => ({
        balance: prevState.balance + numericAmount,
        incomeAmount: prevState.incomeAmount + numericAmount
      }));
    }
  }

  render() {
    return (
      <div className={styles.expenseInfoContainer}>
        <div className={styles.balance}>
          <h4>YOUR BALANCE</h4>
          <h1>${this.state.balance}</h1>
        </div>
        <div className={styles.incomeExpenseContainer}>
          <div>
            <h4>Income</h4>
            <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
              +${this.state.incomeAmount}
            </p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
              -${this.state.expenseAmount}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
