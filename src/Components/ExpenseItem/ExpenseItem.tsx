import { ExpenseDate } from "../ExpenseDate/ExpenseDate";
import { ExpenseItemProp } from "../Interfaces"
import './expenseItem.css'
export const ExpenseItem:React.FC<ExpenseItemProp>=({expense})=>{
    console.log(expense);
    
    return (
        <>
        <div className="expense">
            <ExpenseDate date={expense.expenseDate}/>
        <p>{expense.expenseDate.toDateString()}</p>
        <h1>{expense.expensesTitle}</h1>
        <p>{expense.expenseAmount}</p>
        </div>
        </>
    )
}