// env
require('dotenv').config()
const PORT = process.env.PORT || 5001; // if there is no port, return port 5000

// create http module": ""
var http = require('http'); 

// create express app
const app = require('./app');

// create server instance
const server = http.createServer(app);

server.listen(PORT, console.log(`Server started on port ${PORT}.`))

