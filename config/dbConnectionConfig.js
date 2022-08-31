const mysql = require('mysql');
require('dotenv').config();

// Create connection
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME
});

// Connect to DB
connection.connect(error => {
  if (error) throw error;
  console.log('Connected successfully!');
});

module.exports = connection;