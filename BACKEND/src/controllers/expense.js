const ExpenseSchema = require('../model/expenseModel')

// Add expense
exports.addExpense = async(req, res) => {
    const { type, title, description, amount, category, date } = req.body
    
    // add new expense based on the ExpenseSchema defined
    const expense = ExpenseSchema({
        type,
        title,
        description,
        amount, 
        category,
        date
    })

    try {
        // validation
        if (!title || !amount || !category || !date) {
            return res.status(400).json({message: "Title, Amount, Category and Date fields must be filled."})
        }

        if (amount <= 0) {
            return res.status(400).json({message: "Amount must be a positive number"})
        }

        await expense.save()
        res.status(200).json({message: "Expense added"})
    } catch (error) {
        res.status(500).json({message: "Server error"})
    }
} 

// Get expense from database
exports.getExpenses = async (req, res) => {
    try {
        // find all the expense in database and sort them in descending order of createdAt
        const expenses = await ExpenseSchema.find().sort({ createdAt: -1 })
        // createdAt is automatically created when we created a schema
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({ messsage: "Server error" })
    }
}

// Delete expense based on the request id of item
exports.deleteExpense = async(req, res) => {
    const { id } = req.params; // or const id = req.params.id
    try {
        await ExpenseSchema.findByIdAndDelete(id); // this method is asynchronous (ensure operation is completed before sending the response)
        res.status(200).json({ message: "Expense deleted" })
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}