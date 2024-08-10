const mongoose = require('mongoose')

const IncomeSchema = new mongoose.Schema({
    type : {
        type: String,
        default: "income"
    },
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

module.exports = mongoose.model('Income', IncomeSchema)