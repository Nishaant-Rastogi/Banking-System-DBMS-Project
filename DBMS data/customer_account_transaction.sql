create database IF NOT EXISTS DANKTHEBANK;
use DANKTHEBANK;
drop table if exists Customer_Account_Transaction;
CREATE TABLE Customer_Account_Transaction(
Customer_ID VARCHAR(100) NOT NULL,
Payment_ID VARCHAR(100) NOT NULL,
AccountNo VARCHAR(100) NOT NULL,
Amount DOUBLE,
Transaction_Type VARCHAR(100) NOT NULL DEFAULT('Customer to Bank'),
Recipient VARCHAR(100) NOT NULL DEFAULT('BANK'),
PRIMARY KEY(Customer_ID, Payment_ID, AccountNo)
);

INSERT INTO Customer_Account_Transaction(Customer_ID, Payment_ID, AccountNo, Amount) 
SELECT C.Customer_ID, T.Payment_ID, A.AccountNo, T.Amount 
from Customers C, Accounts A, Transactions T 
where A.Customer_ID = C.Customer_ID AND substring(T.Payment_ID,1,4) = substring(A.AccountNo,1,4) AND substring(A.AccountNo, 8, 1) = substring(T.Payment_ID, 17, 1) AND substring(A.AccountNo, 11, 2) = substring(T.Payment_ID, 9, 2) AND substring(A.AccountNo, 5, 1) = substring(T.Payment_ID, 5, 1);

UPDATE Customer_Account_Transaction
set Transaction_Type = 'Customer to Customer'
where substring(Payment_ID, 7, 2)= '01';

UPDATE Customer_Account_Transaction
set Transaction_Type = 'Loan Payment'
where substring(Payment_ID, 7, 2)= '02';

UPDATE Customer_Account_Transaction
set Transaction_Type = 'Deposit/Withdrawal'
where substring(Payment_ID, 7, 2)= '03';

UPDATE Customer_Account_Transaction
set Recipient = concat(concat(concat(concat('10', concat(substring(Payment_ID, 11, 2),'01')), '01'),'00'),substring(Payment_ID, 13, 2))
where substring(Payment_ID, 7, 2)= '01' AND substring(Payment_ID,18,1) = '1';

UPDATE Customer_Account_Transaction
set Recipient = concat(concat(concat(concat('10', concat(substring(Payment_ID, 11, 2),'01')), '00'),'00'),substring(Payment_ID, 13, 2))
where substring(Payment_ID, 7, 2)= '01' AND substring(Payment_ID,18,1) = '0';


UPDATE Customer_Account_Transaction
set Recipient = AccountNo
where Amount<0;

select * from Customer_Account_Transaction;
