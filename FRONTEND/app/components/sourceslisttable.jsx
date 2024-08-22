import React, { useState }from "react"
import { usePathname } from 'next/navigation'
import { useTransactionStore } from '../stores/transactionstore'
import { Delete, SearchIcon } from '../utils/icons'
import { dateFormat } from "../utils/dateFormat"

import { Salary, Freelance, Investment, Interest, Utilities, Travelexpenses, Entertainment, Education, Other } from '../utils/icons.jsx'
import ConfirmDeleteModal from './confirmDeleteModal'

const SourcesListTable = () => {
    const pathname = usePathname()
    const { incomesArr, expensesArr } = useTransactionStore();
    // For filter/ search feature
    const [search, setSearch] = useState("");
    // For open delete confirmation modal
    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null)

    const showModal = (id) => {
        setSelectedId(id);
        setOpen(true);
    };

    const resourcesArr = pathname === "/income" ? incomesArr : expensesArr;
    const isIncome = pathname === "/income";
    const isExpense = pathname === "/expense"

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'salary': return Salary
            case 'freelance': return Freelance
            case 'investment': return Investment
            case 'interest': return Interest
            case 'utilities': return Utilities
            case 'travel expenses': return Travelexpenses
            case 'entertainment': return Entertainment
            case 'education': return Education
            default:
                return Other;
        }
    }

    return (
        <div>
            <form className = "flex flex-row gap-4 items-center p-1-2 bg-white rounded-[10px] shadow-custom backdrop-blur-[6.5px] border-[1.8px] border-mintGreen mt-3 p-3 w-[35rem] cursor-pointer">
                <input className = "box-border bg-none w-[100%] border-none rounded-[15px]outline-none p-1 text-black focus:outline-none " placeholder={isIncome ? "Search Income Resource" : "Search Expense Resource"}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {SearchIcon}
            </form>
            <div className = "flex flex-col gap-3 overflow-y-scroll max-h-90 mt-8 ">
                {resourcesArr
                .filter((resource) => {
                    return search.toLowerCase() === "" 
                    ? resource 
                    : resource.title.toLowerCase().includes(search.toLowerCase()) 
                    || resource.description.toLowerCase().includes(search.toLowerCase()) 
                    || resource.category.toLowerCase().includes(search.toLowerCase())
                    || resource.amount.toString().includes(search.toLowerCase())
                    || new Date(resource.date).toString().includes(search.toLowerCase())
                    || dateFormat(resource.date).includes(search.toLowerCase())

                }).map((item, index) => (
                    <div key={index} className = 'flex items-center bg-white border-2 border-mintGreen rounded-[20px] px-5 py-4 mx-2.5 shadow-custom w-100 mr-2.5'>
                        
                        <div className = 'mr-3 border-2 border-grey p-3 rounded-[15px]'>
                            {getCategoryIcon(item.category)}
                        </div> 
                    
                        <div className = 'flex-1 mr-2.5'> 
                            <div className = 'font-700 text-mintGreen mb-2 text-h9 break-words' style = {{color: item.type === "income"? "#00B8B2" : "#e01b45"}} >{item.title}</div>
                            <div className = 'text-grey mb-2 break-words text-h10'>{item.description}</div>
                            <div className = 'text-grey text-h10'> {item.category}</div>
                            <div className = 'text-grey text-h10'> {dateFormat(item.date)}</div>
                        </div>
                        <div className = 'flex flex-col items-end'> 
                            <div className = 'font-700 text-mintGreen mb-2.5 text-h10'>
                                <span className = {item.type === "income"? "text-mintGreen text-h10" : "text-red text-h7"}> $ {item.amount} </span>
                            </div>
                            <button className = 'flex items-center bg-none border-none text-red cursor-pointer hover:font-h10' type = "button" onClick = {() => showModal(item._id)}> 
                                {Delete} <span className = "ml-2 cursor-pointer"> delete </span> 
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* Want to open 1 component at a time, so pass it out of the map function and use with a selectedId */}
            <ConfirmDeleteModal id={selectedId} open={open} setOpen={setOpen} isIncome={isIncome} isExpense={isExpense} isBudget={false} />
        </div>
    );
};

export default SourcesListTable;