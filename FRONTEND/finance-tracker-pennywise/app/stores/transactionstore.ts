import { create } from 'zustand'
import { devtools, subscribeWithSelector, persist } from 'zustand/middleware'
import axios from 'axios'

const initialTransactionValues = {
    incomesArr: [],
    expensesArr: [],

    formData: {
        type: "",
        title: "",
        description: "",
        amount: 0,
        category: "",
        date: "",
    }
}

export const useTransactionStore = create<typeof initialTransactionValues>()(
    devtools(
        subscribeWithSelector(
            persist(() => initialTransactionValues, { name : "Transaction store" })
        ),
        { name : "Transaction store"}
    )
)

export const handleChange = (name: string, value: any) => {
    useTransactionStore.setState((state) => ({
        formData: {
            ...state.formData, 
            [name]: value 
        }
    }))
    if (typeof(value) === "string"  && value.length > 30) {
        alert ("Please enter a shorter title (limit = 30).")
    } else if (typeof(value) === "string"  && value.length > 40){
        alert ("Please enter a shorter description (limit = 40).")
    } if (typeof(value) === "number" && value > 1000000) {
        alert ("Please part up your budget due to limit (limit = 1000000).")
    }
}

// INCOME
export const addIncome = async(e:any) => {
    e.preventDefault();
    const { title, description, amount, category, date } = useTransactionStore.getState().formData;
    
    if (!title || !amount || !category || !date) {
        alert("Please fill in required fields.");
        return;
    }

    const newFormData = {
        type: "income",
        title: title,
        description: description,
        amount: amount,
        category: category,
        date: date,
    }

    try {
        const res = await axios.post('/api/add-income', newFormData , {
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.status === 200) {
            console.log("New resource is added!")
            await getIncomes();
            getTotalIncome();
        }
        console.error("Error while adding new income resource", res.data);

    } catch (error) {
        console.error("Error while adding new income resource, ", error);
    }
}

export const getIncomes = async() => {

    try {
        const res = await axios.get('/api/get-incomes');

        if (res.status === 200) {
            useTransactionStore.setState({ incomesArr: res.data });
        }

        console.error("Error while adding new income resource", res.data);

    } catch (error) {
        console.error("Error while adding new income resource, ", error);
    }
}

export const deleteIncome = async (id) => {
    try {
        const res = await axios.delete(`/api/delete-income/${id}`);

        if (res.status === 200) {
            console.log('Income is deleted.')
        }
        console.error("Error while deleting income resource.");

    } catch (error) {
        console.error("Error while deleting income resource.", error);
    }
}

// EXPENSE
export const addExpense = async (e) => {
    e.preventDefault();
    const { title, description, amount, category, date } = useTransactionStore.getState().formData;
    
    if (!title || !amount || !category || !date) {
        alert("Please fill in all required fields.");
        return;
    }

    const newFormData = {
        type: "expense",
        title: title,
        description: description,
        amount: amount,
        category: category,
        date: date,
    }

    try {
        const res = await axios.post('/api/add-expense', newFormData , {
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.status === 200) {
            console.log("New resource is added!")
            await getExpenses();
            getTotalExpense();
        }
        console.error("Error while adding new expense resource", res.data);

    } catch (error) {
        console.error("Error while adding new expense resource, ", error);
    }
}

export const getExpenses = async() => {
    try {
        const res = await axios.get('/api/get-expenses');

        if (res.status === 200) {
            useTransactionStore.setState({ expensesArr: res.data });
        }

        console.error("Error while adding new expense resource", res.data);

    } catch (error) {
        console.error("Error while adding new expense resource, ", error);
    }
}

export const deleteExpense = async(id) => {
    try {
        const res = await axios.delete(`/api/delete-expense/${id}`);

        if (res.status === 200) {
            console.log('Expense is deleted.')
        }
        console.error("Error while deleting expense resource.");

    } catch (error) {
        console.error("Error while deleting expense resource.", error);
    }
}

export const getTotalIncome = () => {
    const { incomesArr } = useTransactionStore.getState();
    const updatedTotalIncome = incomesArr.reduce((acc, curr) => acc + curr.amount, 0);
    // update state
    return updatedTotalIncome;

}

export const getTotalExpense = () => {
    const { expensesArr } = useTransactionStore.getState();
    const updatedTotalExpense = expensesArr.reduce((acc, curr) => acc + curr.amount, 0);
   
    return updatedTotalExpense;
}

export const getBalance = () => {
    const updatedBalance = getTotalIncome() - getTotalExpense();
    return updatedBalance;
} 

export const getRecentTransactions = () => {
    const {incomesArr, expensesArr} = useTransactionStore.getState();
    const latestTransactions = incomesArr.concat(expensesArr) // Only sort the latest 10 items in each arrays
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // sort the latest to the less latest from top 
    .slice(0,3) // get the latest 3 items by date (after sorted)

    return latestTransactions;
}
