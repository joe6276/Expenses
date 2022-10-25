import { useState } from "react";
import { Expenses } from "./Components/Expenses/Expense";
import { ExpensesInterfaces, ExpensesInterfaces1 } from "./Components/Interfaces";


const expenses:ExpensesInterfaces[]=[
  {
    id:Math.floor(Math.random() * 1000),
    expensesTitle:'Books',
    expenseAmount:300,
    expenseDate: new Date('2021-10-19')
  },
   {
    id:Math.floor(Math.random() * 1000),
    expensesTitle:'Shopping',
    expenseAmount:400,
    expenseDate: new Date('2020-10-19')
  },
   {
    id:Math.floor(Math.random() * 1000),
    expensesTitle:'Food',
    expenseAmount:600,
    expenseDate: new Date('2020-10-19')
  },
   {
    id:Math.floor(Math.random() * 1000),
    expensesTitle:'Fuel',
    expenseAmount:500,
    expenseDate: new Date('2022-10-19')
  }
]
function App() {

  const [expense, setExpenses]= useState<ExpensesInterfaces[]>(expenses)
  const addExpense =(expense:ExpensesInterfaces1)=>{
    setExpenses((prev:ExpensesInterfaces[])=>([...prev ,{...expense, expenseDate:new Date(expense.expenseDate)}]))
  }

  return (
    <div className="App">
      <Expenses  expenses={expense} onSave={addExpense}/>
    </div>
  );
}

export default App;
