// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "epicodus",
//   database: "mydb"
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   // var sql = "CREATE TABLE quiz_three (response_one VARCHAR(255), response_two VARCHAR(255), response_three VARCHAR(255), response_four VARCHAR(255), response_five VARCHAR(255))";
//   // var sql = "CREATE TABLE aboutUser (gender VARCHAR(255), age VARCHAR(255), kids VARCHAR(255), education VARCHAR(255), work VARCHAR(255))";
//   // con.query(sql, function (err, result) {
//   //   if (err) throw err;
//   //   console.log("Table created");
//   // });
// });

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "epicodus",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});