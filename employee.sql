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
  PRIMARY KEY(id)
);

-- Created the table "employee"
CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER(10) NOT NULL,
  manager_id INTEGER(10),
  PRIMARY KEY(id)
);

-- Add data into "department"
INSERT INTO department (name)
VALUES ("Accounting");

INSERT INTO department (name)
VALUES ("Design");

INSERT INTO department (name)
VALUES ("Engineering");

-- Add data into "role"
INSERT INTO role (title, salary, department_id)
VALUES ("CPA", 95000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Scientist", 85000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Senior Engineer", 95000, 3);

-- Add data into "employee"
INSERT INTO employee (first_name, last_name, role_id, manger_id)
VALUES ("Pepper", "Potts", 1, 1);

INSERT INTO employee (first_name, last_name, role_id, manger_id)
VALUES ("Tony", "Stark", 3, 1);

INSERT INTO employee (first_name, last_name, role_id, manger_id)
VALUES ("Pepper", "Pots", 1, 1);