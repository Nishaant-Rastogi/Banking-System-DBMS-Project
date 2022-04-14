create database IF NOT EXISTS DANKTHEBANK;
use DANKTHEBANK;
drop table if exists Customer_Account;
CREATE TABLE Customer_Account(
Customer_ID VARCHAR(100) NOT NULL,
AccountNo VARCHAR(100) NOT NULL,
PRIMARY KEY(Customer_ID, AccountNo)
);

INSERT INTO Customer_Account(Customer_ID, AccountNo) SELECT A.Customer_ID, AccountNo from Customers C, Accounts A where C.Customer_ID = A.Customer_ID;