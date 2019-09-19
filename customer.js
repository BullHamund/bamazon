// Initialize npm packages 
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: '3306',
    user: "root",
    password: "",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    //console.log("you are connected!")
    displayItems();
})

// a function to display a table of the available items
// and accompanying data
var displayItems = function () {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " || " + res[i].product_name + " || " + res[i].department_name +
                " || " + res[i].price + " || " + res[i].stock_quantity + "\n");
        }
        promptCustomer();
    })
}

// a method to promt the user to make a purchase
// 
function promptCustomer() {
    inquirer.prompt([{
            name: "ID",
            type: "input",
            message: "Please enter Item ID you like to purhcase.",
            filter: Number
        },
        {
            name: "Quantity",
            type: "input",
            message: "How many copies would you like?",
            filter: Number
        },
    ]).then(function (answers) {
        var quantityNeeded = answers.Quantity;
        var IDrequested = answers.ID;
        purchaseOrder(IDrequested, quantityNeeded);
    });
};

// a method to track the purchase choice and associated quanitities

function purchaseOrder(ID, quantity) {
    connection.query('Select * FROM products WHERE item_id = ' + ID, function (err, res) {
        if (err) {
            console.log(err)
        };
        if (quantity <= res[0].stock_quantity) {
            var totalCost = res[0].price * quantity;
            console.log("Still available!");
            console.log("Your total cost for " + quantity + " " + res[0].product_name + " is " + totalCost + " Thank you!");

            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + quantity + "    WHERE item_id = " + ID);
        } else {
            console.log("Sorry, we do not have that many " + res[0].product_name + " to complete your order.");
        };
        displayItems();
    });
};