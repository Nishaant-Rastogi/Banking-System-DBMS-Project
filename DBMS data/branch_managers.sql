create database IF NOT EXISTS DANKTHEBANK;
use DANKTHEBANK;
drop table if exists Branch_Manager;
CREATE TABLE Branch_Manager(
Employee_ID VARCHAR(100) NOT NULL,
Branch_ID bigint NOT NULL,
PRIMARY KEY (Employee_ID, Branch_ID),
Name VARCHAR(100) NOT NULL,
Designation VARCHAR(100) NOT NULL,
Term int NOT NULL DEFAULT(0),
Joining_Date DATE NOT NULL
);
INSERT INTO Branch_Manager(Employee_ID, Branch_ID, Name, Designation, Joining_Date) SELECT Employee_ID, Branch_ID, Name, Designation, Joining_Date from Employees, Branches where Designation like 'Branch Manager' AND (substring(Employee_ID, 4,1) = substring(Branch_ID,4,1));
UPDATE Branch_Manager set Term = IF(2022 - cast(YEAR(Joining_Date) as UNSIGNED)>10,2022 - cast(YEAR(Joining_Date) as UNSIGNED)-10, 2022 - cast(YEAR(Joining_Date) as UNSIGNED)) ;