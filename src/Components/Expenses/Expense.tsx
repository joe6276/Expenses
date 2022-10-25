
import { useState } from "react"
import {  ExpenseChart } from "../ExpenseChart/ExpenseChart"
import { ExpenseForm } from "../ExpenseForm/ExpenseForm"
import { ExpenseItem } from "../ExpenseItem/ExpenseItem"
import { ExpenseFilter } from "../ExpensesFilter/ExpenseFilter"
import { ExpenseComponentProp, ExpensesInterfaces1 } from "../Interfaces"


export const Expenses: React.FC<ExpenseComponentProp> = ({expenses,onSave}) => {
    const [year, setYear] = useState('2022')
    const handleExpense =(expense:ExpensesInterfaces1)=>{
      onSave(expense)
        
    }
    const handleFilter=(filter:string)=>{
        setYear(filter)
    }

 
const filteredExpenses= expenses.filter(expenses=>{
   return  expenses.expenseDate.getFullYear().toString()===year
})
    console.log(year);
    
  return (
  <>
  <ExpenseForm onSave={handleExpense}/>
 <ExpenseChart expenses={filteredExpenses}/>
  <ExpenseFilter  onFilter={handleFilter} year={year}/>
    {
     filteredExpenses.map((expense)=>(
            <ExpenseItem expense={expense}  key={expense.id}/>
      ))

    }
  </>
  
  )
}
