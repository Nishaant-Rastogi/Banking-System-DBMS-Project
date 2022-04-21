create database IF NOT EXISTS DANKTHEBANK;
use DANKTHEBANK;
drop table if exists Employees;
CREATE TABLE Employees(
Employee_ID VARCHAR(100) NOT NULL PRIMARY KEY,
Name VARCHAR(100) NOT NULL,
Salary int NOT NULL,
Designation VARCHAR(100) NOT NULL,
Joining_Date DATE NOT NULL,
PAN VARCHAR(30) NOT NULL,
Password VARCHAR(30) NOT NULL
);

INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1001000001', 'Ravish Chatterjee', 75000, 'Branch Manager', STR_TO_DATE("10-17-2000", "%m-%d-%Y"), 'A501E0101', 'aabbcc'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1002000002', 'Shaan Grover', 95000, 'Branch Manager', STR_TO_DATE("06-27-2004", "%m-%d-%Y"), 'A456E0102', 'aabcbc'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1003000003', 'Ravinder Singh', 75000, 'Branch Manager', STR_TO_DATE("02-04-2002", "%m-%d-%Y"), 'A645E0103', 'aaccbb'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1004000004', 'Amish Chaudhary', 75000, 'Branch Manager', STR_TO_DATE("01-04-2008", "%m-%d-%Y"), 'Q576E0104', 'aacbcb'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1005000005', 'Vivek Bansal', 75000, 'Branch Manager', STR_TO_DATE("04-16-2015", "%m-%d-%Y"), 'A789E0105', 'bbaacc'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1001000006', 'Rampal Yadav', 55000, 'Service Manager', STR_TO_DATE("02-17-2018", "%m-%d-%Y"), 'K981E0201', 'bbccaa'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1001000007', 'Ashish Jain', 55000, 'Service Manager', STR_TO_DATE("07-19-2016", "%m-%d-%Y"), 'A182E0202', 'bbcaca'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1001000008', 'Vinay Dubey', 45000, 'Customer Service', STR_TO_DATE("08-13-2018", "%m-%d-%Y"), 'A912E0203', 'bbacac'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1001000009', 'Yash Chauhan', 60000, 'Account Manager', STR_TO_DATE("03-19-2019", "%m-%d-%Y"), 'A681E0204', 'ccaabb'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1002000010', 'Ankur Kanauj', 50000, 'Service Manager', STR_TO_DATE("02-21-2021", "%m-%d-%Y"), 'A182E0202', 'ccbbaa'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1002000011', 'Shankar Rastogi', 55000, 'Service Manager', STR_TO_DATE("05-18-2017", "%m-%d-%Y"), 'A912E0203', 'ccbaba'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1002000012', 'Mohammad Farhan', 35000, 'Customer Service', STR_TO_DATE("01-04-2022", "%m-%d-%Y"), 'A681E0204', 'ccabab'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1002000013', 'Taheer Khan', 65000, 'Account Manager', STR_TO_DATE("10-17-2010", "%m-%d-%Y"), 'K820E0205', 'ddeeff'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1003000014', 'Johnny', 70000, 'Service Manager', STR_TO_DATE("12-18-2004", "%m-%d-%Y"), 'L911E0302', 'ddffee'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1003000015', 'Mitanshi Setia', 55000, 'Service Manager', STR_TO_DATE("01-23-2017", "%m-%d-%Y"), 'G718E0303', 'ddefef'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1003000016', 'Abdul Sheikh', 45000, 'Customer Service', STR_TO_DATE("11-09-2018", "%m-%d-%Y"), 'H516E0304', 'ddfefe'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1003000017', 'Jesus', 75000, 'Account Manager', STR_TO_DATE("12-25-2000", "%m-%d-%Y"), 'Y520E0305', 'eeddff'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1004000018', 'Ankit Garg', 60000, 'Service Manager', STR_TO_DATE("01-14-2012", "%m-%d-%Y"), 'M703E0401', 'eeffdd'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1004000019', 'Shalini Vashisht', 55000, 'Service Manager', STR_TO_DATE("06-12-2015", "%m-%d-%Y"), 'N810E0402', 'eedfdf'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1004000020', 'Lalit Gupta', 30000, 'Customer Service', STR_TO_DATE("12-31-2016", "%m-%d-%Y"), 'I517E0403', 'eefdfd'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1004000021', 'Anvesh Kumar', 50000, 'Account Manager', STR_TO_DATE("11-20-2020", "%m-%d-%Y"), 'K112E0404', 'ffeedd'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1005000022', 'Sachin Ranade', 60000, 'Service Manager', STR_TO_DATE("11-02-2014", "%m-%d-%Y"), 'C915E0501', 'ffddee'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1005000023', 'Harsimar Kaur', 60000, 'Service Manager', STR_TO_DATE("09-22-2013", "%m-%d-%Y"), 'J814E0502', 'ffeded'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1005000024', 'Vishnu Kumar', 40000, 'Customer Service', STR_TO_DATE("07-24-2018", "%m-%d-%Y"), 'R019E0503', 'ffdede'
);
INSERT INTO Employees(Employee_ID, Name, Salary, Designation, Joining_Date, PAN, Password)
VALUES
(
'1005000025', 'Irfan Pathan', 55000, 'Account Manager', STR_TO_DATE("03-29-2020", "%m-%d-%Y"), 'Q505E0504', 'fefedd'
);



