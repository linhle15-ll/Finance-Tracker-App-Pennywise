const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema ({
    type : {
        type: String,
        default: "budget"
    },
    emojiIcon: {
        type: String,
        required: false,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 40,
    },
    description: {
        type: String,
        required: false,
        trim: true,
        maxLength: 40
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
        max: 9999
    },
    distribution: {
        type: Number,
        trim: true,
        max: 3
    }
}, {timestamps: true}
)

module.exports = mongoose.model('Budget', BudgetSchema)