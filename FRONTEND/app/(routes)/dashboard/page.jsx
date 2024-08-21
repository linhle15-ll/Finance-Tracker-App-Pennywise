"use client"
import React from "react"
import LineGraph from '../../components/transactionsGraph'
import Sideboard from "../../components/sideboard"
import { getRecentTransactions, getTotalIncome, getTotalExpense, getBalance } from "../../stores/transactionstore.ts"
import { getRecentBudgets } from '../../stores/budgetstore'

const Dashboard = () => {
    return (
        <div className = "main">
            {/* menu: left */}
            <Sideboard />

            {/* main board: right */}
            <div className = "font-poppins flex flex-col w-[100%] text-darkGreen">
                <div className="bg-white/30 rounded-lg shadow-lg backdrop-blur-[6.5px] border border-white p-[1.5%] px-[3%] flex flex-col gap-2.5 h-[670px] w-100">
                    <div className = "font-poppins font-900 text-h5 mb-3"> All Transactions </div>
                    {/* Dashboard Content */}
                    <div className =  "flex flex-row gap-5"> 
                        <div className = "flex flex-col gap-5 w-[60%]"> 
                            <div className = "bg-white rounded-[20px] w-full shadow-custom"> 
                                <LineGraph />
                            </div>
                            <div className = "flex flex-row gap-3 w-[100%]"> 
                                <div className = "bg-white rounded-[20px] w-[35%] p-3 pl-4 border-2 border-mintGreen shadow-custom transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
                                    <div className = "font-poppins font-700 text-h9 mb-2"> Total Income </div>
                                    <div className = "text-mintGreen text-h6 font-900 break-words"> $ {getTotalIncome()} </div>
                                </div>

                                <div className = "bg-white rounded-[20px] w-[35%] p-3 pl-4 border-2 border-red shadow-custom transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
                                    <div className = "font-700 text-h9 mb-2"> Total Expense </div>
                                    <div className="text-red text-h6 font-900 break-words"> $ {getTotalExpense()} </div>
                                </div>
                            
                                <div className = "bg-white rounded-[20px] w-[35%] p-3 pl-4 border-2 border-mintGreen shadow-custom transition-transform duration-300 ease-in-out hover:translate-y-[-5px]">
                                    <div className = "font-700 text-h9 mb-2"> Balance </div>
                                    <div className={`text-h6 font-900 break-words ${getBalance() > 0 ? 'text-mintGreen' : 'text-red'}`}>
                                        $ {getBalance()}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ranking stats container */}
                        <div className = "flex flex-col gap-5">
                            {/* Recent transactions */}
                            <div className = "flex flex-col gap-2 font-600 text-h9"> 
                                <div className = "font-poppins font-900 text-h8 mb-2"> Recent Transactions </div>
                                <div className = "flex flex-col gap-2">
                                    {getRecentTransactions().map((item, index) => (
                                        <div key={index} className = {`flex flex-row bg-white gap-10 rounded-[15px] px-3 py-5 justify-between w-[100%] shadow-custom transition-transform duration-300 ease-in-out border-2 hover:translate-y-[-5px] ${item.type == "income"? "text-mintGreen" : "text-red"}`}>
                                            <div className = {`${item.type == "income"? "text-mintGreen" : "text-red"}`}> {item.title} </div>
                                            <div> $ {item.amount} </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/*  Recent budgets */}
                            <div className="flex flex-col gap-2 font-600 text-h9">
                                <div className = "font-poppins font-900 text-h8 mb-2"> Recent Budgets </div>
                                <div className = "flex flex-col gap-2">
                                    {getRecentBudgets().map((item, index) => (
                                        <div key={index} className = "flex flex-row bg-white gap-30 rounded-[15px] px-3 py-5 justify-between w-[100%] shadow-custom transition-transform duration-300 ease-in-out border-2 border-mintGreen hover:translate-y-[-5px]">
                                            <div className = "text-mintGreen"> {item.title} </div>
                                            <div> $ {item.amount} </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dashboard;

