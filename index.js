const express = require('express')
const bodyParser = require('body-parser');
const app = express()

// Parse JSON and url-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = require('./dbConnection')
const route= require('./Routes/router')


// applying routes, when a request comes, it will go to router.js
app.use(route)

// before running server, we have to connect with mysql, below is a simple query to check DB connection is success
connection.query("SELECT 1", (error, results) => {
    if (error) {
        console.error("Error connecting to MySQL:", error);
    } else {
        console.log("Connected to MySQL successfully!");
    }
});

const PORT = 3000;
// running server
app.listen(PORT, () => {
    console.log(`server is up and running in port ${PORT}`)
})