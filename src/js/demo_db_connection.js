var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "epicodus",
  database: "mydb"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', function(req, resp) {
  connection.query("SELECT * FROM aboutUser", function(error, rows, fields) {
    if(!!error) {
      console.log('error query');
      console.log(error); 
    } else {
      console.log('success query');
    }
  });
})

app.listen(8080);

