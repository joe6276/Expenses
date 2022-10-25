import { useState } from 'react'
import { ExpensesInterfaces1 } from '../Interfaces'
import './expenseForm.css'
import { ExpenseFormProp } from '../Interfaces'
export const ExpenseForm:React.FC<ExpenseFormProp>=({onSave})=>{
const [error, setError]= useState(false)
const [expense , setExpense] =useState<ExpensesInterfaces1>({
    id:0,
    expensesTitle:'',
    expenseAmount:0,
    expenseDate:''
})

const changehandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setExpense((prev:ExpensesInterfaces1)=>({...prev, [e.target.name]:e.target.value, id:Math.floor(Math.random()* 1000)}))
}

const submitHandler =(e:React.FormEvent<HTMLFormElement> )=>{
     e.preventDefault()
   if(expense.id || expense.expenseAmount ||expense.expensesTitle || expense.expenseDate){
   
    onSave(expense)
   }
   else{
        setError(true)
   }
}

    return (
        <>
        <form action="" onSubmit={submitHandler}>
            <div className="form-container">
            <div className="forms">
            <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" name='expensesTitle'  value={expense.expensesTitle} onChange={changehandler}/>
            </div>
             <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="text" name='expenseAmount'  value={expense.expenseAmount} onChange={changehandler}/>
            </div>
             <div className="form-control" >
            <label htmlFor="date">Date</label>
            <input type="date" min='2022-10-20' name='expenseDate' value={expense.expenseDate}  onChange={changehandler} />
            </div>
                {error && <div className="form-control">
                    <p>Please Fill all Fields</p>
                </div>
                }
            <button>Submit</button> 
            </div>
            </div>
            
        </form>
        </>
    )
}