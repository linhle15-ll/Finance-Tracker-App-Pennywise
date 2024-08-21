"use client"
import React from "react"
import Sideboard from "../../components/sideboard"
import TotalMainBoard from '../../components/totalMainBoard'
import { useTransactionStore } from "../../stores/transactionstore"

const IncomePage = () => {
    return (
        <div className = "main">
            {/* menu: left */}
            <Sideboard />

            {/* main board: right */}
            <TotalMainBoard /> 
            
        </div>
    )
}

export default IncomePage;