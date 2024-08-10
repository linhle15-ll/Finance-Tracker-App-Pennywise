const IncomeSchema = require('../model/incomeModel')

// Add income
exports.addIncome = async(req, res) => {
    const { type, title, description, amount, category, date } = req.body
    
    // add new income based on the IncomeSchema defined
    const income = IncomeSchema({
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

        await income.save()
        res.status(200).json({message: "Income added"})
    } catch (error) {
        res.status(500).json({message: "Server error"})
    }
    console.log(income)
} 

// Get income from database
exports.getIncomes = async (req, res) => {
    try {
        // find all the income in database and sort them in descending order of createdAt
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 })
        // createdAt is automatically created when we created a schema
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({ messsage: "Server error" })
    }
}

// Delete income based on the request id of item
exports.deleteIncome = async(req, res) => {
    const { id } = req.params; // or const id = req.params.id
    try {
        await IncomeSchema.findByIdAndDelete(id); // this method is asynchronous (ensure operation is completed before sending the response)
        res.status(200).json({ message: "Income deleted" })
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}