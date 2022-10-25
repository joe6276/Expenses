import React, { useState } from "react"



export const ExpenseFilter:React.FC=()=>{
const [year, setYear]=useState()
    const handleChange=()=>{
        
    }
    return (
        <>

        <form action="">
            <select onChange={handleChange} value={year}>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </form>
        </>
    )
}