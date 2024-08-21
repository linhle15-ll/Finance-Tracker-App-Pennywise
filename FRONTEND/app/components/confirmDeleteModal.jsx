import React from 'react';
import { Modal } from 'antd';

import { deleteIncome, deleteExpense, getIncomes, getExpenses } from '../stores/transactionstore.ts'
import { deleteBudget, getBudgets } from '../stores/budgetstore';

const ConfirmDeleteModal = ({ id, open, setOpen, isIncome, isExpense, isBudget}) => { // pass props in a { }
    const handleOk = async () => {
        if (isIncome) {
            await deleteIncome (id)
            await getIncomes();
            setOpen(false);
        }
        else if (isExpense) {
            await deleteExpense (id)
            await getExpenses();
            setOpen(false);
        }
        else if (isBudget) {
            await deleteBudget(id)
            await getBudgets()
            setOpen(false);
        }
    };

    return (
        <>
            <Modal
                title="Confirm Resource Deletion"
                open={open}
                onOk={handleOk}
                onCancel={() => setOpen(false)}
                okText="Delete"
                cancelText="Cancel"
            >
                <p> Do you want to delete this resource? </p>
            </Modal>
        </>
    );
};


export default ConfirmDeleteModal;