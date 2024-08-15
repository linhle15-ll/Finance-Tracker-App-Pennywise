import { create } from 'zustand'
import { devtools, subscribeWithSelector, persist } from 'zustand/middleware'
import axios from 'axios'
import { getBalance } from './transactionstore'

const initialBudgetValues = {
    budgetsArr: [],
    distribution: 0,
    formData: {
        type: 'budget',
        emojiIcon: "🙂",
        title: "",
        description: "",
        amount: 0,
    },
    handleDistributionChangeWarningMessage: "",
}

export const useBudgetStore = create<typeof initialBudgetValues>()(
    devtools(
        subscribeWithSelector(
            persist(() => initialBudgetValues, { name : "Budget store" })
        ),
        { name : "Budget store"}
    )
)

export const handleChange = (name: string, value: any) => {
    useBudgetStore.setState((state) => ({
        formData: {
            ...state.formData, 
            [name]: value 
        }
    }))
}

export const handleDistributionChange = (name: string, value: any) => {
    useBudgetStore.setState((state) => ({ 
        [name]: value
    }));

    if (value > 100) {
        alert("The balance distribution for budget should be under 100%.")
    } 
}


export const handleReset = () => {
    useBudgetStore.setState((state) => ({
        formData: {
            type: 'budget',
            emojiIcon: "🙂",
            title: "",
            description: "",
            amount: 0,
        }
    }))

}

export const addNewBudget = async () => {
    const { type, emojiIcon, title, description, amount } = useBudgetStore.getState().formData;
    const { distribution } = useBudgetStore.getState();
    if (!title || !amount) {
        alert("Please fill in all required fields.");
        return;
    }

    const newFormData = {
        type: type,
        emojiIcon: emojiIcon,
        title: title,
        description: description,
        amount: amount,
        distribution: distribution,
    }

    try {
        const res = await axios.post('/api/add-budget', newFormData , {
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.status === 200) {
            console.log("New budget is added!")
            handleReset();
            getBudgets();
            
        }
        console.error("Error while adding new budget", res.status);

    } catch (error) {
        console.error("Error while adding new budget, ", error);
    }
}

export const getBudgets = async () => {
    try {
        const res = await axios.get('/api/get-budgets');
        if (res.status === 200) {
            useBudgetStore.setState({ budgetsArr: res.data })
        }
        console.error("Error while adding new budget", res.status);
    } catch (error) {
        console.error("Error while adding new budget, ", error);
    }
}

export const deleteBudget = async (id) => {
    try {
        const res = await axios.delete(`/api/delete-budget/${id}`);

        if (res.status === 200) {
            console.log('Budget is deleted.')
            await getBudgets();
        }
        console.error("Error while deleting budget.", res.status);
    } catch (error) {
        
    }
}

export const getRecentBudgets = () => {
    const { budgetsArr } = useBudgetStore.getState();
    const recentBudgets = budgetsArr // Only sort the latest 10 items in each arrays
    .slice(0,3) // get the latest 3 items by date (after sorted)

    return recentBudgets;
}

export const updateBudgetDistribution = async(id) => {
    try {
        const res = await axios.put(`/api/update-budget-distribution/${id}`, {
            distribution: useBudgetStore.getState().distribution
        });
        if (res.status === 200) {
            await useBudgetStore.setState({ distribution: res.data.distribution })
            resetBudgetDistribution();

        } else {
            console.error("Error updating budget distribution", res.status);
        }
    } catch {
        console.error("Error while updating budget distribution.");
    }
} 

export const resetBudgetDistribution = () => {
    useBudgetStore.setState({ distribution: 0 })
}

export const setProgressPerc = (item) => {
    const targetBudget = item.amount
    const balanceDistribution = item.distribution;

    const progressPerc = ((getBalance()/100 * balanceDistribution )/targetBudget) * 100; 
    if (Number(progressPerc) < 0) {
        return 0;
    }
    return Number(progressPerc.toFixed(2));
}

export const setProgressAmount = (item) => { ///
    const progressPerc = setProgressPerc(item);
    const targetBudget = item.amount;

    const progressAmount = (targetBudget * progressPerc) / 100;

    return Number(progressAmount.toFixed(2));
    
}

export const remainingBalanceDistribution = () => {
    const { budgetsArr } = useBudgetStore.getState();
    const totalDistribution = budgetsArr.reduce((acc, curr) => acc + curr.distribution, 0);
    useBudgetStore.setState({distribution: totalDistribution})
}