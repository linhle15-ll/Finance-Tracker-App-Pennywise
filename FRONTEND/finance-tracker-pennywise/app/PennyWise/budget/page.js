"use client"
import React, { useState } from "react"
import { usePathname } from 'next/navigation'
import dynamic from "next/dynamic"

import styles from './budget.module.css'
import NewBudgetForm from '../../components/newBudgetModal'
import Sideboard from "../../components/sideboard"
import DistributionModal from "../../components/distributionModal"
import { Plus } from '../../utils/icons'
import { useBudgetStore, setProgressPerc, setProgressAmount } from "../../stores/budgetstore"
import { getBalance } from "../../stores/transactionstore.ts"

import ConfirmModal from '../../components/confirmDeleteModal'
import { Delete } from '../../utils/icons'

const Budget = () => {
    const pathname = usePathname()
    const isBudget = pathname === "/PennyWise/budget";

    const { budgetsArr } = useBudgetStore.getState();
    const totalDistribution = budgetsArr.reduce((acc, curr) => acc + curr.distribution, 0);
    // Set selectedId (passed from original ID)
    const [selectedId, setSelectedId] = useState(null);

    // Open newBudgetmodal
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    // Open delete confirmationModal
    const [openConfirm, setOpenConfirm] = useState(false);
    const showConfirmModal = (id) => {
        setSelectedId(id);
        setOpenConfirm(true);
    };
    // Open distrbutionModal
    const [openDisbutionModal, setOpenDisbutionModal] = useState(false);
    const showDisbutionModal = (id) => {
        setSelectedId(id);
        setOpenDisbutionModal(true);
    };

    return (
        <div className = "main">
            {/* menu: left */}
            <Sideboard />

            {/* main board: right */}
            <div className = "mainBoardContainer" >
                <div className = "mainBoard">
                    <div className = {styles.myBudgetsTitle}> My Budgets </div>
                    <div> Start 
                        <span style = {{color: "rgb(0, 184, 178)", fontWeight: "bold"}}> Budgeting </span> 
                        and 
                        <span style = {{color: "rgb(0, 184, 178)", fontWeight: "bold"}}> Smartly Reach Your Financial Goals </span> 
                        with ✨ <span style = {{fontWeight: "bold"}}>PennyWise</span> ✨!
                    </div> 
                    <div className = {styles.myBudgetsContainer}>
                        <button className = {styles.createNewBudget} type = "button" onClick = {showModal}>
                            <div style = {{fontWeight: "600"}}> + </div>
                            <div style = {{fontWeight: "600"}}> Create New Budget </div>
                        </button>

                        {/* Budget Items */}
                        {budgetsArr.map((item, index) => (
                            <div key = {index} className = {styles.budgetContainer}>
                                <div className = {styles.top}> 
                                    <div className = {styles.topLeft}> 
                                        <div className = {styles.icon}> {item.emojiIcon} </div>

                                        <div className = {styles.titleDescription}>
                                            <div style = {{fontWeight: "600"}}> {item.title} </div>    
                                            <div style = {{lineHeight: "1.2", color: "#9E9E9E", fontSize: "16px"}}> {item.description} </div>
                                        </div>
                                    </div>
                                    <div className = {styles.amountDelete}>
                                        <div className = {styles.budgetAmount}> ${item.amount} </div>
                                    </div>
                                </div>

                                <div className = {styles.bottom}> 
                                    <div className = {styles.aboveBar}> 
                                        <button className = {styles.distribution} type = "button" onClick = {() => showDisbutionModal(item._id)}> 
                                            {Plus} Balance Distribution
                                        </button> 
                                        
                                        <div> {setProgressPerc(item)}%</div> 
                                    </div>

                                    <div className = {styles.progressBar}> 
                                        <div style = {{background: "#04a6a161", borderRadius: "20px", width: "100%", height: "10px"}}> 
                                            <div style = {{background: setProgressPerc(item) > 100? "red" : "#00B8B2", borderRadius: "20px", height: "10px", width: setProgressPerc(item) > 100 ? "100%"  : `${setProgressPerc(item)}%` }}> </div>
                                        </div>
                                    </div>

                                    <div className = {styles.belowBar}> 
                                        <div> 
                                            ${setProgressAmount(item)} 
                                            
                                        </div>
                                        <button className = 'delete' type = "button" onClick = {() => showConfirmModal(item._id)}> 
                                            {Delete}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    
                    </div>

                    <div>
                        <div style = {{fontWeight: "600", fontSize: "25px" }}> Your balance: <span style = {{color: "red"}}> ${getBalance()} </span> </div>
                        <div> 
                            <span style = {{fontWeight: "bold", color: "red"}}> {totalDistribution}% </span>  of Balance has been distributed to budgets entitled 
                            <span style = {{fontWeight: "bold"}}> {budgetsArr
                                .filter((item) => item.distribution > 0)
                                .map((item) => item.title)
                                .join(", ")}
                            </span>.
                            
                        </div>
                        <div>
                            <span style = {{fontWeight: "bold", color: "red"}}>{100 - totalDistribution}%</span> of Balance is left to be distributed.
                        </div>
                    </div>
                    <ConfirmModal id={selectedId} open={openConfirm} setOpen={setOpenConfirm} isIncome={false} isExpense={false} isBudget={isBudget}/>
                    <NewBudgetForm open={open} setOpen={setOpen} />
                    <DistributionModal id={selectedId} open={openDisbutionModal} setOpen={setOpenDisbutionModal} />

                </div>
            </div>
        </div>
    )
}


export default dynamic (() => Promise.resolve(Budget), {ssr: false})

