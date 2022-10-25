
import { ExpenseForm } from "../ExpenseForm/ExpenseForm"
import { ExpenseItem } from "../ExpenseItem/ExpenseItem"
import { ExpenseComponentProp, ExpensesInterfaces1 } from "../Interfaces"


export const Expenses: React.FC<ExpenseComponentProp> = ({expenses,onSave}) => {
    const handleExpense =(expense:ExpensesInterfaces1)=>{
      onSave(expense)
        
    }
  return (
  <>
  <ExpenseForm onSave={handleExpense}/>
    {
     expenses.map((expense)=>(
            <ExpenseItem expense={expense}  key={expense.id}/>
      ))

    }
  </>
  
  )
}
