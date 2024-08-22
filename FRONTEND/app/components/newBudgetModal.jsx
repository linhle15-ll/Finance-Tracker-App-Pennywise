import React, { useState } from 'react';
import { Modal } from 'antd';
import EmojiPicker from 'emoji-picker-react';
import { addNewBudget, handleChange, useBudgetStore, getBudgets,handleReset } from '../stores/budgetstore'

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
                <form className = "flex flex-col gap-3.5 max-h-[450px] overflow-y-scroll">
                    <div> 
                        <span className = "text-mintGreen"> Smart Budgets,  </span> 
                        <span className = "text-mintGreen"> Happy Life  </span> 
                    </div> 
                    <div>
                        <button className = "p-1 text-h8 border-2 border-lightGrey rounded-[10px] hover:bg-transparent" 
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

                    <input className = "border border-gray-400 p-2 rounded-[10px] mr-2 focus:outline-none focus:border-mintGreen" required
                        type = "text"  
                        onChange={(e) => handleChange("title", e.target.value)} 
                        placeholder = "Budget Title*" 
                        maxLength={40}
                    /> 

                    <input className = "border border-gray-400 p-2 rounded-[10px] mr-2 focus:outline-none focus:border-mintGreen" 
                        type = "text" 
                        onChange={(e) => handleChange("description", e.target.value)} 
                        placeholder = "Budget Description" 
                        maxLength={40}
                    /> 

                    <input className = "border border-gray-400 p-2 rounded-[10px] mr-2 focus:outline-none focus:border-mintGreen" required 
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