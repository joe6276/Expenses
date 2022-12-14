 export interface ExpensesInterfaces{
  id:number,
  expensesTitle:string
  expenseAmount:number
  expenseDate:Date
}

export interface ExpenseComponentProp{
    expenses:ExpensesInterfaces[]
    onSave:(expense:ExpensesInterfaces1)=>void
}


export interface ExpenseChartProp{
    expenses:ExpensesInterfaces[]
}

export interface ExpenseItemProp{
    expense:ExpensesInterfaces
}


export interface ExpenseDateProp{
    date:Date
}


 export interface ExpensesInterfaces1{
  id:number,
  expensesTitle:string
  expenseAmount:number
  expenseDate:string
}


export interface ExpenseFormProp{
    onSave:(expense:ExpensesInterfaces1)=>void
}


export interface ExpennseFilterProp{
    onFilter:(c:string)=> void
    year:string
}

export  interface DataWay{
label:string
value:number
}
export interface ChartBarProp{
    maxValue:number
    value:number
    label:string

}