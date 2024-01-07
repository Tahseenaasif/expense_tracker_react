import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const expenseHandler = (type, amount) => {
    //console.log("this is expense type", type, "this is expense amount", amount);
    setExpenses([...expenses, { text: type, amount: amount }]);
  };

  const deleteHandler = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm expenseHandler={expenseHandler} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} deleteHandler={deleteHandler} />
        </div>
      </div>
    </>
  );
}

export default App;
