"use client"
import React from "react"
import dynamic from "next/dynamic"
import styles from './dashboard.module.css'
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
            <div className = "mainBoardContainer">
                <div className = "mainBoard">
                    <div className = {styles.allTransactionsTitle}> All Transactions </div>
                    {/* Dashboard Content */}
                    <div className = {styles.dashBoardContent}> 
                        <div className = {styles.firstColumn}> 
                            <div className = {styles.statsContainer}> 
                                <LineGraph />
                            </div>
                            <div className = {styles.totalBtnGroup}> 
                                <div className = {styles.totalIncomeContainer}>
                                    <div className = {styles.totalIncomeTitle}> Total Income </div>
                                    <div className = {styles.totalIncome} style = {{color: "rgb(0, 184, 178)"}}> $ {getTotalIncome()} </div>
                                </div>

                                <div className = {styles.totalExpenseContainer}>
                                    <div className = {styles.totalExpenseTitle}> Total Expense </div>
                                    <div className = {styles.totalExpense} style = {{color: "red"}}> $ {getTotalExpense()} </div>
                                </div>
                            
                                <div className = {styles.balanceContainer}>
                                    <div className = {styles.balanceTitle}> Balance </div>
                                    <div className={styles.balance} style={{ color: getBalance() <= 0 ? 'red' : '#04DB80' }}>
                                        $ {getBalance()}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = {styles.secondColumn}>
                            <div className = {styles.recentTransactionsContainer}> 
                                <div className = {styles.recentTransactionsTitle}> Recent Transactions </div>
                                <div className = {styles.recentTransactions}>
                                    {getRecentTransactions().map((item, index) => (
                                        <div key={index} className = {styles.recentTransactionsItem} style = {{border: item.type === "income"? "1.5px solid #00B8B2" : "1.5px solid #e01b45"}}>
                                            <div style = {{color: item.type === "income"? "#00B8B2" : "#e01b45"}}> {item.title} </div>
                                            <div> $ {item.amount} </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/*  Recent budgets */}
                            <div className={styles.recentBudgetsContainer}>
                                <div className = {styles.recentBudgetsTitle}> Recent Budgets </div>
                                <div className = {styles.recentBudgets}>
                                    {getRecentBudgets().map((item, index) => (
                                        <div key={index} className = {styles.recentBudgetItem} style = {{border: "1.5px solid #00B8B2"}}>
                                            <div style = {{color: "rgb(0, 184, 178)"}}> {item.title} </div>
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

