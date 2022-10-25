import { ExpenseDateProp } from "../Interfaces"
import './expenseDate.css'
export const ExpenseDate:React.FC<ExpenseDateProp>=({date})=>{


    const month = date.toLocaleString('en-US', {month:'long'})
    const day = date.toLocaleString('en-US', {day:'2-digit'})
    const year= date.getFullYear().toString()

    return(
        <>
        <div className="date">
            <p className="expense-date__month"> {month}</p>
            <p className="expense-date__day">{day}</p>
            <p className="expense-date__year">{year}</p>
        </div>
        </>
    )
}