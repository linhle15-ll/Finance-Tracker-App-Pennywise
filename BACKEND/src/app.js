const express = require('express');
const cors = require('cors');
const { readdirSync } = require('fs');
const path = require('path');

const app = express();

// Middlewares
app.use(express.json()); // Middleware to parse incoming JSON request body in Express
app.use(cors()); // Middleware to connect frontend and backend 

// Connect to MongoDB
const db = require('../src/db/db.js');
db();

// Routes - Read all the routes in directory routes
readdirSync(path.join(__dirname, '../src/routes')).map((route) => {
    app.use('/api', require(path.join(__dirname, '../src/routes', route)));
});

// Basic Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;
