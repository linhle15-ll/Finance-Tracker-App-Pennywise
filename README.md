
# PennyWise - Finance Tracker App

## Table of Contents 
<ol>
<li> Project Description: Overview and Purposes </li>
<li> Special Feature </li>
<li> Install and Run </li>
<li> Usage instruction </li>
<li> Learning resources </li>
<li> License </li>
</ol>

## Project Description

### What Tech Stacks are used? 

For this project, I use <strong>MERN Stack</strong>, which is a common tech stack for app development:

- <img src="https://img.icons8.com/color/48/000000/mongodb.png" width="20"/> <strong> MongoDB</strong> for database 
- <img src="https://img.icons8.com/fluency/48/000000/node-js.png" width="20"/> <strong> Express.js (Node.js)</strong> for Backend 
- <img src="https://img.icons8.com/plasticine/100/000000/react.png" width="20"/> <strong> React.js - Next.js </strong> for Frontend
- 🐻 <strong>Zustand</strong> (instead of Redux) </strong> for Statement management
- <strong> TailwindCSS </strong> for styling

### Where I got the inspiration form (Why the app is created? )
An inspiration for me to work on a project often stems from my own problem, and my perspective on the problem with other people. Personally speaking, I am not very good at financial management, but I tried to be better at this when I started my independent life as an international student in a completely foreign country and started my first job. I deeply understand how important it is for students like me to feel "safe and secure" about financial matters.

Thus, <strong> PennyWise </strong> is a solution that helps users to:
- <strong> smartly manage their money </strong>, or income and expense in particular
- <strong> keep up reasonable financial management habit</strong>: for what and how much money should be used 
- <strong> feel motivated</strong>: a <em> special algorithm </em> that aligns with user's intention to budget for future goals 

I hope that this app can do better than this with more promising improvements in the future. Possible technical implementations that are being considered are <strong> more attracting UI </strong>, <strong> minigames </strong> to improve interaction with users, and on top of all, <strong>AI/ML applications</strong> to predict user's habits and provide smart finanical suggestions. My expectations to better my prooduct motivates me to learn a lot everyday!

## Special Feature: An Algorithm! 
While making this app, I am thinking of my case. Sometimes, I wonder how much money I am having now for certain goals/ expenditure sections, such as a NYC trip this winter, or budgets to buy a Colombia Coat. Therefore, I <strong> create an algorithm </strong> for this app that works in a way that:

- Keep track of the balance </strong>, where current balance = current total income - current total expense
- Allowing users to actively set <strong> how much % of balance would be distributed for the target budget </strong>.
</br>For example, I would set 40% of balance for monthly book subscription and 20% for money saving up for NYC trip 
-  Therefore, users can clearly know how much money they are having for a certain target budget, and thus <strong> better determining when to spend the money </strong> without much worry about distributions for other targets (better financial plannings)

 
## Install and Run 

### Overview

This project is a MERN stack application for tracking finances. It includes a frontend and backend for managing transactions, income, expenses, and budgets.

## Prerequisites

- Node.jsv (BACKEND)
- Express.js (FRONTEND)
- npm or yarn 
- MongoDB Atlas: Set up a project on MongoDB Atlas and get the connection

The setup should look like this: 

![image](https://github.com/user-attachments/assets/7991bbfe-ce48-4b91-836c-60107f0d8dca)

- Dependencies:

| Package                    | Version   |
|----------------------------|-----------|
| `next`            | 14.2.5    |
| `react`           | ^18  |
| `react-dom`           | ^18  |
| `@clerk/nextjs`            | ^5.3.0    |
| `@emotion/react`           | ^11.13.0  |
| `@emotion/styled`          | ^11.13.0  |
| `@fortawesome/react-fontawesome` | ^0.2.2  |
| `@fortawesome/free-solid-svg-icons`| ^6.6.0  |
| `antd` | ^5.20.0  |
| `chart.js` | ^4.4.3  |
| `react-chartjs-2` | ^5.2.0  |
| `emoji-picker-react` | ^4.11.1  |
| `moment` | ^2.30.1  |
| `styled-components` | ^6.1.12  |
| `@mui/material`            | ^5.16.7   |
| `axios`                    | ^1.7.3    |
| `concurrently`             | ^8.2.2    |
| `cors`                     | ^2.8.5    |
| `dotenv`                   | ^16.4.5   |
| `express`                  | ^4.19.2   |
| `lucide-react`             | ^0.427.0  |
| `mongoose`                 | ^8.5.2    |
| `nodemon`                  | ^3.1.4    |
| `path`                     | ^0.12.7   |
| `zustand`                  | ^4.5.4    |
| `sharp`                  | ^0.33.4   |
 

## Getting Started

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone <repository-url>
# repo: https://github.com/linhle15-ll/finance-tracker-app-pennywise.git
```
- You can Split the terminal and run the BACKEND and FRONTEND separatedly by:
```bash
cd BACKEND
npm run dev
```
```bash
cd FRONTEND
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `FRONTEND/...` for FRONTEND and `BACKEND/...` for BACKEND. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Poppins, a custom Google Font.

**Note**
To try with http://localhost:3000, you are supposed to change "https://pennywise-backend-linhle.vercel.app" to "http://localhost:5000/api".

For example: 

``
const res = await axios.put(`https://pennywise-backend-linhle.vercel.app/update-budget-distribution/${id}`
``

to

``
const res = await axios.put(`http://localhost:5000/api/update-budget-distribution/${id}`
``
## Usage instruction
### Welcome Page and Sign-in Page
![Sign-in](https://github.com/user-attachments/assets/d8dc6c60-dce0-4d42-9d11-ca24fd26cf23)

### Sign-up Page
![Sign-up](https://github.com/user-attachments/assets/ade4c8ee-da88-4f2f-aaa3-af68b3efc64c)

### Dashboard Page
![dashboard](https://github.com/user-attachments/assets/6060890a-171c-45fc-8838-01ca0916512a)
- Transactions Line Graph
- Total Income, Total Expense, Balance
- Recent Transactions (sort Incomes and Expense Arrays by latest createdAt)

### Income Page
![income](https://github.com/user-attachments/assets/e4346ec0-f172-42c3-9ec4-be7b924ffbfd)

### Expense Page
![expense](https://github.com/user-attachments/assets/719e6b06-46f2-4a44-9abf-3ce5f7c5ea46)

### Budget Page
![budget1](https://github.com/user-attachments/assets/235ea893-f59b-422c-9aa4-44e67f5ff113)
![budget2](https://github.com/user-attachments/assets/82a56a30-c5fd-4241-a3be-9370c80c6411)

![budget](https://github.com/user-attachments/assets/b8893eb5-4173-454a-b77d-f778b0ac03c5)

## Learning Resources
You can learn more about MERN stack, Deployment on Vercel, and UI Libraries that I used for this app by referencing to this repo: 
**[MERN stack learning resouces](https://github.com/linhle15-ll/MERN-Stack-Learning-Resources)**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

© 2024 Ngoc Linh Le. All rights reserved.

## Ownership

This project was created and is maintained by Ngoc Linh Le. All contributions are welcome, and ownership remains with the original author.
