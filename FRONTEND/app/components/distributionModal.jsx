import React from 'react';
import { Modal } from 'antd';
import { handleDistributionChange, updateBudgetDistribution, resetBudgetDistribution, getBudgets } from '../stores/budgetstore'
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
                <form className = "flex flex-col gap-3.5 max-h-[450px] overflow-y-scroll">
                    <div> 
                        <div> Your balance is now <span style = {{fontWeight: "600"}}> $ {getBalance()}. </span> </div>
                        <span className = "text-darkGreen font-600 font-italic"> How much % of balance is to be distributed to your budget? </span> 
                    </div> 
                    <input className = "border border-gray-400 p-2 rounded-[10px] mr-2 focus:outline-none focus:border-mintGreen" required
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