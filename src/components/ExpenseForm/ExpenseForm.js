import React from "react";
import styles from "./ExpenseForm.module.css";

export default class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      expenseList: []
    };
  }

  handleChange = (e, type) => {
    this.setState({
      [type]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onFormSubmit } = this.props;
    const { amount, text } = this.state;
    onFormSubmit(amount, text);
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <h3>Add new transaction</h3>
        <label htmlFor="expenseText">Text</label>
        <input
          id="expenseText"
          className={styles.input}
          type="text"
          placeholder="Enter text..."
          onChange={(e) => this.handleChange(e, "text")}
          required
        />
        <div>
          <label htmlFor="expenseAmount">Amount</label>
          <div>(negative - expense, positive - income)</div>
        </div>
        <input
          onChange={(e) => this.handleChange(e, "amount")}
          className={styles.input}
          id="expenseAmount"
          type="number"
          placeholder="Enter amount..."
          required
        />
        <button className={styles.submitBtn} type="submit">Add Transaction</button>
      </form>
    );
  }
}
