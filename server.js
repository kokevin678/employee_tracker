// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "quotes_db"
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees By Department",
        "View All Employees By Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "Exit"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "View All Employees":
          allEmployee();
          break;

        case "View All Employees By Department":
          byDepartment();
          break;

        case "View All Employees By Manager":
          byManager();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Remove Employee":
          removeEmployee();
          break;

        case "Update Employee Role":
          updateRole();
          break;

        case "Update Employee Manager":
          updateManager();
          break;
      }
    });
}

// Search All Employee
function allEmployee() {}

// Search Department
function byDepartment() {}

// Search Manager
function byManager() {}

// Add Employee
function addEmployee() {}

// Remove Employee
function removeEmployee() {}

// Update Role
function updateRole() {}

//Update Manager
function updateManager() {}
