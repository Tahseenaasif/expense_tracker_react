import "./App.css";
import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [expenseList, setExpenseList] = useState([]);

  const onFormSubmit = (amount, type) => {
    setAmount(amount); 
    setExpenseList((prevExpenseList) => [...prevExpenseList, type]);
  };

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm onFormSubmit={onFormSubmit} />
        <div className="expenseContainer">
          <ExpenseInfo amount={amount} />
          <ExpenseList expenseList={expenseList} />
        </div>
      </div>
    </>
  );
}


// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       amount: 0,
//       expenseList: [] 
//     };
//   }

  // onFormSubmit = (amount, type) => {
   
  //   this.setState((prevState) => ({
  //     amount: amount,
  //     expenseList: prevState.expenseList.concat(type)
  //   }));
  // };

  // render() {
  //   return (
  //     <>
  //       <h2 className="mainHeading">Expense Tracker</h2>
  //       <div className="App">
  //         <ExpenseForm onFormSubmit={this.onFormSubmit} />
  //         <div className="expenseContainer">
  //           <ExpenseInfo  amount={this.state.amount} />
  //           <ExpenseList expenseList={this.state.expenseList} />
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
//}
