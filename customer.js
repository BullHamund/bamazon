// Initialize npm packages 
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: '3306',
    user: "root",
    password: ".!.KPdA",
    database: "bamazon"
  });

connection.connect(function(err) {
    if (err) throw err;
    console.log("you are connected!")
})

// make table function
