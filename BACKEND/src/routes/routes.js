const express = require('express');
const router = express.Router();

const { addIncome, getIncomes, deleteIncome } = require('../controllers/income')
const { addExpense, getExpenses, deleteExpense } = require('../controllers/expense')
const { addBudget, getBudgets, deleteBudget, updateBudgetDistribution } = require('../controllers/budget')

router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)

    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpenses)
    .delete('/delete-expense/:id', deleteExpense)

    .post('/add-budget', addBudget )
    .get('/get-budgets', getBudgets)
    .delete('/delete-budget/:id', deleteBudget)
    .put('/update-budget-distribution/:id', updateBudgetDistribution)

module.exports = router;