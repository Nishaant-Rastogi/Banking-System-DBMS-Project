drop table Branch_Manager;
CREATE TABLE Branch_Manager(
Employee_ID VARCHAR(100) NOT NULL,
Branch_ID bigint NOT NULL,
PRIMARY KEY (Employee_ID, Branch_ID),
Name VARCHAR(100) NOT NULL,
Designation VARCHAR(100) NOT NULL
);
INSERT INTO Branch_Manager(Employee_ID, Branch_ID, Name, Designation) SELECT Employee_ID, Branch_ID, Name, Designation from Employees, Branches where Designation like 'Branch Manager' AND (substring(Employee_ID, 4,1) = substring(Branch_ID,4,1));