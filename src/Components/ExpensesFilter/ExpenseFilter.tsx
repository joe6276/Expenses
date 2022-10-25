import React from 'react'
import { ExpennseFilterProp } from '../Interfaces'
import './expenseFilter.css'
export const ExpenseFilter: React.FC<ExpennseFilterProp> = ({
  onFilter,
  year,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilter(e.target.value)
  }
  return (
    <div className="filtered">
      <div>
        <div>
          <label>Filter by year</label>
          <select onChange={handleChange} value={year}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
    </div>
  )
}
