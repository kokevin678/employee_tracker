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
  var query =
    "SELECT * FROM department INNER JOIN role ON role.department_id = department.id INNER JOIN employee ON employee.role_id = role.id ";
  connection.query(query, function(err, results) {
    const table = cTable.getTable(results);
    console.log(table);
    if (err) throw err;
    runSearch();
  });
}

// Search Manager
function byManager() {}

// Add Employee
function addEmployee() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is the employee's first name?"
      },
      {
        name: "last_name",
        type: "input",
        message: "What is the employee's last name?"
      },
      {
        name: "role_id",
        type: "rawlist",
        choices: [
          { name: "Sales Lead", value: 1 },
          { name: "Salesperson", value: 2 },
          { name: "Lead Engineer", value: 3 },
          { name: "Software Engineer", value: 4 },
          { name: "Accountant", value: 5 },
          { name: "Legal Team Lead", value: 6 },
          { name: "Lawyer", value: 7 }
        ]
      }
    ])
    .then(function(answer) {
      var firstName = answer.first_name;
      var lastName = answer.last_name;
      var role = answer.role_id;
      var query =
        "INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?); ";
      connection.query(query, [firstName, lastName, role], function(
        err,
        results
      ) {
        console.log(
          firstName + " " + lastName + " is added to the employee list"
        );
        runSearch();
      });
    });
}

// Remove Employee
function removeEmployee() {
  inquirer
    .prompt([
      {
        name: "employee_id",
        type: "input",
        message: "Which employee do you want to remove?"
      }
    ])
    .then(function(answer) {
      var employeeId = answer.employee_id;
      var query = "DELETE FROM employee WHERE id =?";
      connection.query(query, employeeId, function(err, results) {
        console.log("Employee removed");
      });
      runSearch();
    });
}

// Update Role
function updateRole() {}

//Update Manager
function updateManager() {}
