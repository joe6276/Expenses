 export interface ExpensesInterfaces{
  id:number,
  expensesTitle:string
  expenseAmount:number
  expenseDate:Date
}

export interface ExpenseComponentProp{
    expenses:ExpensesInterfaces[]
}


export interface ExpenseItemProp{
    expense:ExpensesInterfaces
}


export interface ExpenseDateProp{
    date:Date
}