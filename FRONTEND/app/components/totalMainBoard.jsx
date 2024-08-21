import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation'
import dynamic from "next/dynamic"; // Avoid Hydration Error
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {  addIncome, addExpense, handleChange, getTotalExpense, getTotalIncome } from "../stores/transactionstore.ts"
import SourcesListTable from './sourceslisttable'; 

const TotalMainBoard = () => {
    const pathname = usePathname();
    const isIncome = pathname === "/income";

    const incomeCategories = [
        { value: 'salary', label: 'Salary' },
        { value: 'freelance', label: 'Freelance' },
        { value: 'investment', label: 'Investment' },
        { value: 'interest', label: 'Interest' },
        { value: 'other', label: 'Other' },
    ];
    
    const expenseCategories = [
        { value: 'utilities', label: 'Utilities' },
        { value: 'travel expenses', label: 'Travel Expenses' },
        { value: 'insurance', label: 'Insurance' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'education', label: 'Education' },
        { value: 'other', label: 'Other' }
    ];

    const categories = pathname === "/income" ? incomeCategories : expenseCategories

    return(
        <div className = "font-poppins flex flex-col w-[100%] text-darkGreen">
            <div className="bg-white/30 rounded-lg shadow-lg backdrop-blur-[6.5px] border border-white p-[1.5%] px-[3%] flex flex-col gap-2.5 h-[670px] w-100">
                <div className = "totalTitle" > { isIncome ? "Total Income" : "Total Expense" } </div>
                <div className = "totalHeader"> 
                    <span className = "font-900 text-h8"> { isIncome ? "Total Income: " : "Total Expense: "}
                        <span className={isIncome ? "text-income" : "text-expense"}> $ 
                            { isIncome ? getTotalIncome() : getTotalExpense() }
                        </span> 
                    </span> 
                </div>
                 
                <div className = "totalBody">
                    <form className = "inputFields" onSubmit = {isIncome ? addIncome : addExpense}>
                        <div className = "addTitle"> { isIncome ? "Add Income" : "Add Expense"} </div>
                        <input className = "inputField" required 
                            type = "text" 
                            onChange={(e) => handleChange("title", e.target.value)} 
                            placeholder = "Title*"
                            maxLength={30}
                        /> 
                        <input className = "inputField" 
                            type = "text"  
                            onChange={(e) => handleChange("description", e.target.value)} 
                            placeholder = "Description" 
                            maxLength={40}/> 

                        <input className = "inputField" required 
                            type = "number"  
                            onChange={(e) => handleChange("amount" , e.target.value)} 
                            placeholder = "Amount*" 
                            max={1000000}
                        />
                        <div style = {{fontfont: "600"}}> Category </div>
                        <FormControl className = "inputField" required
                            sx={{ m: 1, minWidth: 150 }} 
                            // label = "Category*"
                            >
                            
                            <Select
                            onChange={(e) => handleChange("category", e.target.value)}
                            displayEmpty
                            >
                                {categories.map((category, index) => {return (
                                    <MenuItem className = "selectField" key={index} value={category.value}>
                                        {category.label}
                                    </MenuItem>
                                )})}
                            </Select>
                        </FormControl>

                        {/* SET Different menu items for income and expense */}
                        <input className = "inputField" required
                            type = "date"
                            onChange={(e) => handleChange("date", e.target.value)} 
                            placeholder = "Date" 
                        />

                        <button className = "addbtn" type = "submit"> { isIncome ? "Add Income" : "Add Expense" } </button>
                        
                    </form>
                    
                    <SourcesListTable />
                </div>
                
            </div>
        </div>
    )
};

export default dynamic (() => Promise.resolve(TotalMainBoard), {ssr: false})