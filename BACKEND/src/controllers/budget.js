const BudgetSchema = require('../model/budgetModel')

// Add budget
exports.addBudget = async(req, res) => {
    const { type, emojiIcon, title, description, amount, distribution } = req.body
    
    // add new budget based on the budgetSchema defined
    const newBudget = BudgetSchema({
        type,
        emojiIcon,
        title,
        description,
        amount, 
        distribution,
    })

    try {
        // validation
        if (!title || !amount) {
            return res.status(400).json({message: "Title and Budget Target Amount fields must be filled."})
        }

        if (amount <= 0) {
            return res.status(400).json({message: "Amount must be a positive number"})
        }

        await newBudget.save()
        res.status(200).json({message: "Budget added"})
    } catch (error) {
        res.status(500).json({message: "Server error"})
    }
} 

// Get budget from database
exports.getBudgets = async (req, res) => {
    try {
        // find all the budget in database and sort them in descending order of createdAt
        const budgets = await BudgetSchema.find().sort({ createdAt: -1 })
        // createdAt is automatically created when we created a schema
        res.status(200).json(budgets) // res.data => budgets
    } catch (error) {
        res.status(500).json({ messsage: "Server error" })
    }
}

// Delete budget based on the request id of item
exports.deleteBudget = async(req, res) => {
    const { id } = req.params; // or const id = req.params.id
    try {
        await BudgetSchema.findByIdAndDelete(id); // this method is asynchronous (ensure operation is completed before sending the response)
        res.status(200).json({ message: "Budget deleted" })
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

exports.updateBudgetDistribution = async(req, res) => {
    const { id } = req.params;
    const { distribution } = req.body;

    try {
        const updatedBudget = await BudgetSchema.findByIdAndUpdate(id, 
            { distribution }, // distribution: distribution
            { new: true }
        );

        if (!updatedBudget) {
            return res.status(404).json({ message: "Budget not found" });

        } else if (updatedBudget.distribution <= 0) {
            return res.status(400).json({ message: "Distribution must be a positive number" });
        }

        // Return the updated distribution along with the success message
        res.status(200).json({
            message: "Budget updated",
            distribution: updatedBudget.distribution
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}