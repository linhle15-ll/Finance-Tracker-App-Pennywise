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
            <form className = "searchBar">
                <input placeholder={isIncome ? "Search Income Resource" : "Search Expense Resource"}
                onChange={(e) => setSearch(e.target.value)}
                />
                {SearchIcon}
            </form>
            <div className="resourcesGroup">
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
                    <div key={index} className = 'resourceContainer'>
                        
                        <div className = 'firstCol'>
                            {getCategoryIcon(item.category)}
                        </div> 
                    
                        <div className = 'secondCol'> 
                            <div className = 'resourceTitle' style = {{color: item.type === "income"? "#00B8B2" : "#e01b45"}} >{item.title}</div>
                            <div className = 'resourceDescription'>{item.description}</div>
                            <div className = 'resourceCategory'> {item.category}</div>
                            <div className = 'resourceDate'> {dateFormat(item.date)}</div>
                        </div>
                        <div className = 'thirdCol'> 
                            <div className = 'resourceAmount'>
                                <span style = {{color: item.type === "income"? "#00B8B2" : "#e01b45"}}> $ </span > <span style = {{color: item.type === "income"? "#00B8B2" : "#e01b45"}}> {item.amount} </span>
                            </div>
                            <button className = 'delete' type = "button" onClick = {() => showModal(item._id)}> 
                                {Delete} <span> delete </span> 
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