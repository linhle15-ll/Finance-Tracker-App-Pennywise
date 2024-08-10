import React, { useState } from 'react';
import { Modal } from 'antd';
import EmojiPicker from 'emoji-picker-react';
import { addNewBudget, handleChange, useBudgetStore, getBudgets,handleReset } from '../stores/budgetstore'
import styles from '../PennyWise/budget/budget.module.css'

const NewBudgetForm = ({ open, setOpen }) => {
    const [ openEmojiPicker, setOpenEmojiPicker ] = useState(false);
    const { emojiIcon } = useBudgetStore.getState().formData;

    const handleOk = async () => {
        await addNewBudget();
        await getBudgets();
        handleReset();
        setOpen(false);
    };

    return (
        <>
            <Modal
                title="Add New Budget"
                open={open}
                onOk={handleOk}
                onCancel={() => setOpen(false)}
                okText="Add New Budget"
                cancelText="Cancel"

            >
                <form className = {styles.form}>
                    <div> 
                        <span style = {{color: "#3D3BCF"}}> Smart Budgets,  </span> 
                        <span style = {{color: "#00B8B2"}}> Happy Life  </span> 
                    </div> 
                    <div>
                        <button className = {styles.emojiBtn} 
                            type = "button" 
                            onClick = {() => setOpenEmojiPicker(!openEmojiPicker)}
                        >
                            {emojiIcon}
                        </button>

                        <div> 
                            <EmojiPicker 
                            open={openEmojiPicker}
                            onEmojiClick={(e) => {
                                handleChange("emojiIcon", e.emoji)
                                setOpenEmojiPicker(false)
                            }}
                            />
                        </div>
                    </div>

                    <input className = {styles.inputField} required
                        type = "text"  
                        onChange={(e) => handleChange("title", e.target.value)} 
                        placeholder = "Budget Title*" 
                        maxLength={40}
                    /> 

                    <input className = {styles.inputField} 
                        type = "text" 
                        onChange={(e) => handleChange("description", e.target.value)} 
                        placeholder = "Budget Description" 
                        maxLength={40}
                    /> 

                    <input className = {styles.inputField} required 
                        type = "number"  
                        onChange={(e) => handleChange("amount" , e.target.value)} 
                        placeholder = "Budget Target Amount*" 
                        max={9999}
                        maxLength={4}
                    />
                </form>
            </Modal>
        </>
    );
};

export default NewBudgetForm;