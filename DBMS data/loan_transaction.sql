create database IF NOT EXISTS DANKTHEBANK;
use DANKTHEBANK;
drop table if exists Loan_Transaction;
CREATE TABLE Loan_Transaction(
Loan_ID VARCHAR(100) NOT NULL,
Payment_ID VARCHAR(100) NOT NULL,
Amount DOUBLE,
PRIMARY KEY(Loan_ID, Payment_ID)
);

INSERT INTO Loan_Transaction(Loan_ID, Payment_ID, Amount) SELECT Loan_ID, Payment_ID, T.Amount from Transactions T, Loans L where substring(Payment_ID, 7, 2) = '02' AND  substring(Payment_ID, 11, 2) = substring(Loan_ID, 3, 2) AND substring(Payment_ID, 9, 2) = substring(Loan_ID, 9, 2) AND substring(Loan_ID, 13, 2) = substring(Payment_ID, 13, 2);
