"use client"
import React, { useState } from "react"
import { usePathname } from 'next/navigation'
import dynamic from "next/dynamic"

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
    const isBudget = pathname === "/budget";

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
            <div className = "font-poppins flex flex-col w-[100%] text-darkGreen">
                <div className="bg-white/30 rounded-lg shadow-lg backdrop-blur-[6.5px] border border-white p-[1.5%] px-[3%] flex flex-col gap-2.5 h-[670px] w-100">
                    <div className = "font-poppins font-900 text-h7"> My Budgets </div>
                    <div> Start 
                        <span className = "font-poppins font-900 text-mintGreen"> Budgeting </span> 
                        and 
                        <span className = "font-poppins font-900 text-mintGreen"> Smartly Reach Your Financial Goals </span> 
                        with ✨ <span className = "font-poppins font-bold">PennyWise</span> ✨!
                    </div> 
                    <div className = "flex flex-wrap gap-[2%] h-[78%] overflow-y-scroll pr-[10px] w-full">
                        <button className = "flex flex-col items-center justify-center bg-lightMintGreen rounded-[20px] border-dashed border-grey w-[32%] h-[35%] cursor-pointer hover:bg-mintGreen" type = "button" onClick = {showModal}>
                            <div className = "font-poppins font-600"> + </div>
                            <div className = "font-poppins font-600"> Create New Budget </div>
                        </button>

                        {/* Budget Items */}
                        {budgetsArr.map((item, index) => (
                            <div key = {index} className = "flex flex-col bg-white rounded-[20px] p-[2%] pt-[1.5%] w-[32%] h-[42%] shadow-custom">
                                <div className = "flex flex-row justify-between"> 
                                    <div className = "flex flex-row flex-wrap gap-2.5"> 
                                        <div className = "flex justify-center items-center bg-lightMintGreen p-2 rounded-full text-h7 h-12 w-12"> {item.emojiIcon} </div>

                                        <div className = "flex flex-col max-w-[10rem] break-words">
                                            <div className = "font-poppins font-600"> {item.title} </div>    
                                            <div className = "font-poppins leading-[1.2] text-h10 text-darkGreen"> {item.description} </div>
                                        </div>
                                    </div>
                                    <div className = "flex flex-col items-end">
                                        <div className = "font-poppins font-900 text-mintGreen text-h9 max-w-[4rem] break-words"> ${item.amount} </div>
                                    </div>
                                </div>

                                {/* progress bar */}
                                <div> 
                                    {/* above bar */}
                                    <div> 
                                        <button className = "flex items-center gap-2 h-[3.5rem]" type = "button" onClick = {() => showDisbutionModal(item._id)}> 
                                            {Plus} Balance Distribution
                                        </button> 
                                        
                                        <div> {setProgressPerc(item)}%</div> 
                                    </div>

                                    {/* bar */}
                                    <div>
                                        <div className="bg-lightMintGreen rounded-[20px] w-full h-2.5">
                                            <div
                                            style={{
                                                height: "10px",
                                                background: setProgressPerc(item) > 100 ? "red" : "#00B8B2",
                                                borderRadius: "20px",
                                                width: setProgressPerc(item) > 100 ? "100%" : `${setProgressPerc(item)}%`,
                                            }}
                                            >
                                            {/* Content here */}
                                            </div>
                                        </div>
                                    </div>

                                    {/* below bar */}
                                    <div className = "flex flex-row justify-between items-center"> 
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
                        <div className = "font-700 text-h9 text-darkGreen"> Your balance: <span style = {{color: "red"}}> ${getBalance()} </span> </div>
                        <div> 
                            <span className = "font-700 text-red"> {totalDistribution}% </span>  of Balance has been distributed to budgets entitled 
                            <span className = "font-700 text-darkGreen"> {budgetsArr
                                .filter((item) => item.distribution > 0)
                                .map((item) => item.title)
                                .join(", ")}
                            </span>.
                            
                        </div>
                        <div>
                            <span className = "font-700 text-red">{100 - totalDistribution}%</span> of Balance is left to be distributed.
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

