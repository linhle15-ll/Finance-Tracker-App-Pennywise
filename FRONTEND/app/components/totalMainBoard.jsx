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
                <div className = "flex justify-center bg-white border-2 border-mintGreen rounded-[20px] p-1"> 
                    <span className = "font-700 text-h8 py-3"> { isIncome ? "Total Income: " : "Total Expense: "}
                        <span className={isIncome ? "text-mintGreen" : "text-red"}> $ 
                            { isIncome ? getTotalIncome() : getTotalExpense() }
                        </span>
                    </span> 
                </div>
                 {/* total body */}
                <div className = "inline-flex flex-row gap-50 mt-5">
                    <form className = "flex flex-col gap-2.5 w-[25%]" onSubmit = {isIncome ? addIncome : addExpense}>
                        <div className = "font-700 text-h7"> { isIncome ? "Add Income" : "Add Expense"} </div>
                        <input className = "bg-white/50 border-grey rounded-[10px] shadow-custom backdrop-blur-[6.5px] border-[1.8px] p-[5%] w-[150%] cursor-pointer focus:outline-none focus:bg-white focus:border-mintGreen" required 
                            type = "text" 
                            onChange={(e) => handleChange("title", e.target.value)} 
                            placeholder = "Title*"
                            maxLength={30}
                        /> 
                        <input className = "bg-white/50  border-grey rounded-[10px] shadow-custom backdrop-blur-[6.5px] border-[1.8px] p-[5%] w-[150%] cursor-pointer focus:outline-none focus:bg-white focus:border-mintGreen" 
                            type = "text"  
                            onChange={(e) => handleChange("description", e.target.value)} 
                            placeholder = "Description" 
                            maxLength={40}/> 

                        <input className = "bg-white/50  border-grey rounded-[10px] shadow-custom backdrop-blur-[6.5px] border-[1.8px] p-[5%] w-[150%] cursor-pointer focus:outline-none focus:bg-white focus:border-mintGreen" required 
                            type = "number"  
                            onChange={(e) => handleChange("amount" , e.target.value)} 
                            placeholder = "Amount*" 
                            max={1000000}
                        />
                        <div className = "font-700 text-h9"> Category </div>
                        <FormControl className = "bg-white/50  border-grey rounded-[10px] shadow-custom backdrop-blur-[6.5px] border-[1.8px]" required
                            sx={{ m: 1, minWidth: 150 }} 
                            >
                            
                            <Select
                            onChange={(e) => handleChange("category", e.target.value)}
                            displayEmpty
                            >
                                {categories.map((category, index) => {return (
                                    <MenuItem className = "bg-white/50  border-grey rounded-[10px] shadow-custom backdrop-blur-[6.5px] border-[1.8px] p-[5%] w-[150%] cursor-pointer focus:outline-none focus:bg-white focus:border-mintGreen" key={index} value={category.value}>
                                        {category.label}
                                    </MenuItem>
                                )})}
                            </Select>
                        </FormControl>

                        {/* SET Different menu items for income and expense */}
                        <input className = "bg-white/50 border-grey rounded-[10px] shadow-custom backdrop-blur-[6.5px] border-[1.8px] p-[5%] w-[120%] cursor-pointer focus:outline-none focus:bg-white focus:border-mintGreen" required
                            type = "date"
                            onChange={(e) => handleChange("date", e.target.value)} 
                            placeholder = "Date" 
                        />

                        <button className = "cursor-pointer bg-mintGreen mt-[6%] rounded-[15px] font-700 w-30 py-3 px-1 border-2 border-white p-4-3 hover:bg-darkMintGreen active:bg-darkMintGreen" type = "submit"> { isIncome ? "Add Income" : "Add Expense" } </button>
                        
                    </form>
                    
                    <SourcesListTable />
                </div>
                
            </div>
        </div>
    )
};

export default dynamic (() => Promise.resolve(TotalMainBoard), {ssr: false})