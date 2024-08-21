import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

import { useTransactionStore } from '../stores/transactionstore.ts';
import { dateFormat } from '../utils/dateFormat.jsx';
import styled from 'styled-components';

const LineGraph = () => {
    const { incomesArr, expensesArr } = useTransactionStore();

    // Combine and sort incomes and expenses by date
    const combinedArr = [...incomesArr, ...expensesArr].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // descending order
    const dates = combinedArr.map(item => dateFormat(item.date));
    const incomeData = combinedArr.map(item => (item.type === 'income' ? item.amount : 0));
    const expenseData = combinedArr.map(item => (item.type === 'expense' ? item.amount : 0));

    const data = {
        labels: dates,
        datasets: [
            {
                label: "Income",
                data: incomeData,
                borderColor: '#00B8B2',
                backgroundColor: 'rgba(0, 184, 178, 0.2)',
                tension: 0.2,
                fill: true
            },
            {
                label: "Expenses",
                data: expenseData,
                borderColor: '#e01b45',
                backgroundColor: 'rgba(224, 27, 69, 0.2)',
                tension: 0.2,
                fill: true
            }
        ]
    };

    return (
        <ChartStyled>
            <Line data={data} />
        </ChartStyled>
    );
};

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 400px;
`;

export default LineGraph;
