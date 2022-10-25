
import { ExpenseForm } from "../ExpenseForm/ExpenseForm"
import { ExpenseItem } from "../ExpenseItem/ExpenseItem"
import { ExpenseComponentProp } from "../Interfaces"


export const Expenses: React.FC<ExpenseComponentProp> = ({expenses}) => {
  return (
  <>
  <ExpenseForm/>
    {
     expenses.map((expense)=>(
            <ExpenseItem expense={expense} />
      ))

    }
  </>
  
  )
}
