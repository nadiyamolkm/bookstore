const mysql = require("mysql2")

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Blockchain6@",
    database: "bookstore",
  });

  module.exports = connection;