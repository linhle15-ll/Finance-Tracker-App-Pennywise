"use client"
import React, { useEffect } from "react"
import Sideboard from "../../components/sideboard"
import TotalMainBoard from '../../components/totalMainBoard'
import { useTransactionStore } from "../../stores/transactionstore.ts"

const ExpensePage = () => {

    return (
        <div className = "main">
            {/* menu: left */}
            <Sideboard />
            {/* main board: right */}
            <TotalMainBoard /> 
        </div>
    )
}

export default ExpensePage;