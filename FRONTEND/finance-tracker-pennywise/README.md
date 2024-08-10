
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

### Where I got the inspiration form (Why the app is created? )
An inspiration for me to work on a project often stems from my own problem, and my perspective on the problem with other people. Personally speaking, I am not very good at financial management, but I tried to better at this when I started an independent life as an international student in a completely foreign country I started my first job. I deeply understand how important it is for students like me to feel "safe and secure" about financial matters.

Thus, <strong> PennyWise </strong> is a solution that helps users to:
- <strong> smartly manage their money </strong>, or income and expense in particular
- <strong> keep up reasonable financial management habit</strong>: for what and how much money should be used 
- <strong> feel motivated</strong>: a <em> special algorithm </em> that aligns with user's intention to budget for future goals 

I hope that this app can do better than this with more promising improvements in the future. Possible technical implementations that are being considered are <strong> more attracting UI </strong>, <strong> minigames </strong> to improve interaction with users, and on top of all, <strong>AI/ML applications</strong> to predict user's habits and provide smart finanical suggestions.

## Special Feature: An Algorithm! 
While making this app, I am thinking of my case. Sometimes, I wonder how much money I am having now for certain goals/ expenditure sections, such as a NYC trip this winter, or budgets to buy a Colombia Coat. Therefore, I <strong> create an algorithm </strong> for this app that works in a way that:

- Keep track of the balance </strong>, where current balance = current total income - current total expense
- Allowing users to actively set <strong> how much % of balance would be distributed for the target budget </strong>.
</br>For example, I would set 40% of balance for monthly book subscription and 20% for money saving up for NYC trip 
-  Users can clearly know how much money they are having for a certain target budget, and thus <strong> better determining when to spend the money </strong> without much worry about distributions for other targets

 
## Install and Run 

### Overview

This project is a MERN stack application for tracking finances. It includes a frontend and backend for managing transactions, income, expenses, and budgets.

## Prerequisites

- Node.jsv (BACKEND)
- Express.js (FRONTEND)
- npm or yarn 
- MongoDB Atlas
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
cd finance-tracker-app
npm run dev
```
- Or you can concurrently run both BACKEND and FRONTEND at project root directory:
```bash
npm run dev
# I set concurrently in package.json/scripts
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `FRONTEND/finance-tracker-app/...` for FRONTEND and `BACKEND/src/...` for BACKEND. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Poppins, a custom Google Font.

## Usage instruction
### Welcome Page and Sign-in Page

### Sign-up Page

### Dashboard Page
- Transactions Line Graph
- Total Income, Total Expense, Balance
- Recent Transactions (sort Incomes and Expense Arrays by latest createdAt)

### Income Page

### Expense Page

### Budget Page

## Learning Resources
### Next.js
- **[Next.js Documentation](https://nextjs.org/docs)**
  - learn about Next.js features and API.
- **[Learn Next.js](https://nextjs.org/learn)**
  - an interactive Next.js tutorial.
- **[the Next.js GitHub repository](https://github.com/vercel/next.js/)**
  - Next.js Github repository.
### Node.js
- **[Node.js Official Documentation](https://nodejs.org/en/docs/)**
  - Comprehensive and official resource for learning Node.js.
- **[MDN Web Docs - Node.js](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)**
  - Provides an introduction and tutorials on using Node.js with Express.
- **[Node.js Tutorial for Beginners by W3Schools](https://www.w3schools.com/nodejs/)**
  - Beginner-friendly guide to Node.js concepts and basics.
- **[The Node.js Guide by Rising Ode](https://risingode.com/the-node-js-guide/)**
  - Practical advice and examples on Node.js development.

### Express
- **[Express Official Documentation](https://expressjs.com/)**
  - The definitive source for learning about Express.js features and APIs.
- **[MDN Web Docs - Express.js](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)**
  - Tutorials and examples for using Express.js.
- **[Express.js Guide by DigitalOcean](https://www.digitalocean.com/community/tutorial_series/the-ultimate-guide-to-express-js)**
  - A series of tutorials covering Express.js basics to advanced topics.
- **[Academind Express.js Course on YouTube](https://www.youtube.com/playlist?list=PL55RiY5tL51ok7faoH8U2o6twuhOX79kO)**
  - Free video tutorials covering Express.js concepts and practices.

### MongoDB
- **[MongoDB Official Documentation](https://docs.mongodb.com/)**
  - The authoritative resource for learning about MongoDB features and APIs.
- **[MongoDB University](https://university.mongodb.com/)**
  - Free courses on MongoDB, ranging from beginner to advanced levels.
- **[The Net Ninja MongoDB Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9h7WbYf6tZB-XI8-m2MAzlm)**
  - A well-structured YouTube playlist for learning MongoDB from scratch.
- **[MongoDB Basics by FreeCodeCamp](https://www.youtube.com/watch?v=E7Voso411p8)**
  - A comprehensive tutorial on MongoDB basics, available on YouTube.


### How to deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
