import React from 'react';
import { Modal } from 'antd';
import styles from '../PennyWise/budget/budget.module.css'
import { useBudgetStore, handleDistributionChange, updateBudgetDistribution, resetBudgetDistribution, getBudgets } from '../stores/budgetstore'
import { getBalance } from '../stores/transactionstore.ts';

const DistributionModal = ({ id, open, setOpen }) => {

    const handleOk = async () => {
        await updateBudgetDistribution(id);
        await getBudgets();
        resetBudgetDistribution();
        setOpen(false);
    };

    return (
        <>
            <Modal
                title="Set Balance Distribution for your Budget"
                open={open}
                onOk={handleOk}
                onCancel={() => setOpen(false)}
                okText="Confirm Distribution"
                cancelText="Cancel"

            >
                <form className = {styles.form}>
                    <div> 
                        <div> Your balance is now <span style = {{fontWeight: "600"}}> $ {getBalance()}. </span> </div>
                        <span style = {{color: "#00B8B2", fontWeight: "600", fontStyle: "italic"}}> How much % of balance is to be distributed to your budget? </span> 
                    </div> 
                    <input className = {styles.inputField} required
                        type = "number" 
                        onChange={(e) => handleDistributionChange("distribution", e.target.value)} 
                        placeholder = "Distribution Percentage" 
                        max={100}
                    /> 
                </form>
            </Modal>
        </>
    );
};

export default DistributionModal;