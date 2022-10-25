import './expenseForm.css'

export const ExpenseForm:React.FC=()=>{

    return (
        <>
        <form action="">
            <div className="form-container">
                <div className="forms">
            <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" name='title' />
            </div>
             <div className="form-control">
            <label htmlFor="title">Amount</label>
            <input type="text" name='title' />
            </div>
             <div className="form-control" >
            <label htmlFor="title">Date</label>
            <input type="date" min='2022-10-20' name='title' />
            </div>
            <button>Submit</button> 
            </div>
            </div>
            
        </form>
        </>
    )
}