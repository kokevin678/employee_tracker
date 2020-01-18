-- Drops the companyEmployeeDB if it already exists --
DROP DATABASE IF EXISTS companyEmployeeDB;

-- Created the DB
CREATE DATABASE companyEmployeeDB;

-- Use the DB
USE companyEmployeeDB;

-- Created the table "department"
CREATE TABLE department (
  id INTEGER AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

-- Created the table "role"
CREATE TABLE role (
  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  department_id INTEGER(10),
  PRIMARY KEY(id),
  FOREIGN KEY(department_id) REFERENCES department(id)
);

-- Created the table "employee"
CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER(10) NOT NULL,
  manager_id INTEGER,
  PRIMARY KEY(id),
  FOREIGN KEY(role_id) REFERENCES role(id),
  FOREIGN KEY(manager_id) REFERENCES employee(id)
);

-- Add data into "department"
INSERT INTO department (name)
VALUES ("sales"),
("Engineering"),
("Finance"),
("Legal");

-- Add data into "role"
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
("Salesperson", 80000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 2),
("Accountant", 125000, 3),
("Legal Team Lead", 250000, 4),
("Lawyer", 190000, 4);

-- Add data into "employee"
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1),
("Mike", "Chan", 2),
("Ashley", "Rodriguez", 3),
("Kevin", "Tupik", 4),
("Malia", "Brown", 5),
("Sarah", "Lourd", 6);