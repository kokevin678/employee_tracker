// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "companyEmployeeDB"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
  console.log("connected as id " + connection.threadId);
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
function allEmployee() {
  var query =
    "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name FROM department INNER JOIN role ON role.department_id = department.id INNER JOIN employee ON employee.role_id = role.id";
  connection.query(query, function(err, results) {
    const table = cTable.getTable(results);
    console.log(table);
    if (err) throw err;
    runSearch();
  });
}

// Search Department
function byDepartment() {
  var query = "SELECT * FROM department";
  connection.query(query, function(err, results) {
    const table = cTable.getTable(results);
    console.log(table);
  });
}

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
