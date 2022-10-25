import { ExpenseDate } from "../ExpenseDate/ExpenseDate";
import { ExpenseItemProp } from "../Interfaces"
import './expenseItem.css'
export const ExpenseItem:React.FC<ExpenseItemProp>=({expense})=>{    
    return (
        <>
        <div className="expense" key={expense.id}>
        <ExpenseDate date={expense.expenseDate}/>
        <p>{expense.expenseDate.toDateString()}</p>
        <h1>{expense.expensesTitle}</h1>
        <p>{expense.expenseAmount}</p>
        </div>
        </>
    )
}