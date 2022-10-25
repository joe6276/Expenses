import { Expenses } from "./Components/Expenses/Expense";
import { ExpensesInterfaces } from "./Components/Interfaces";


const expenses:ExpensesInterfaces[]=[
  {
    id:Math.floor(Math.random() * 1000),
    expensesTitle:'Books',
    expenseAmount:300,
    expenseDate: new Date('2022-10-19')
  },
   {
    id:Math.floor(Math.random() * 1000),
    expensesTitle:'Shopping',
    expenseAmount:400,
    expenseDate: new Date('2022-10-19')
  },
   {
    id:Math.floor(Math.random() * 1000),
    expensesTitle:'Food',
    expenseAmount:600,
    expenseDate: new Date('2022-10-19')
  },
   {
    id:Math.floor(Math.random() * 1000),
    expensesTitle:'Fuel',
    expenseAmount:500,
    expenseDate: new Date('2022-10-19')
  }
]
function App() {
  return (
    <div className="App">
      <Expenses  expenses={expenses}/>
    </div>
  );
}

export default App;
