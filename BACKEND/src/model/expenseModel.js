const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        trim: true,
        maxLength: 30,
    },
    description : {
        type: String,
        required: false,
        trim: true,
        maxLength: 40,
    },
    amount : {
        type: Number,
        required: true,
        trim: true,
        max: 1000000
    },
    type : {
        type: String,
        default: "income"
    },
    category : {
        type: String,
        required: true,
        trim: true,
    },
    date : {
        type: Date,
        required: true,
        trim: true,
    },
}, {timestamps: true}
)

module.exports = mongoose.model('Expense', ExpenseSchema)