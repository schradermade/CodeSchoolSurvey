// Necessary Imports
var express = require('express');
var mysql = require('mysql');
var app = express();

// Connection Config
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "epicodus",
  database: "mydb"
});

// Connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// Get From Database
app.get('/', function(req, resp) {
  connection.query("SELECT * FROM aboutuser", function(error, rows, fields) {
    if(!!error) {
      console.log('error get query');
      console.log(error); 
    } else {
      console.log('success get query');
    }
  });
})

// Send To Database
// Select...send ${gender} .......send that to mydb.quiz_one
var sql = "INSERT INTO aboutuser (gender) VALUES ?";
var values = [
  ['Male', "21", "no", "highschool", "full-time"],
  ['Male', "58", "yes", "college", "part-time"],
  ['Male'],
  ['Female'],
  ['Female'],
  ['Female'],
  ['Female'],
  ['Female'],
  ['Female'],
  ['Female'],
  ['Female'],
  ['Female'],
  ['Female'],
  ['Female']
];
connection.query(sql, [values], function (err, result) {
  if (err) throw err;
  console.log("Number of records inserted: " + result.affectedRows);
});

app.listen(8080);