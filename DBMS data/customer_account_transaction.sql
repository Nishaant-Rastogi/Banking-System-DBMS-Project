drop table Customer_Account_Transaction;
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
SELECT C.Customer_ID, Payment_ID, A.AccountNo, T.Amount 
from Customers C, Accounts A, Transactions T 
where substring(A.AccountNo,5,2) = '01' AND substring(A.AccountNo,3,2) = substring(Payment_ID,11,2) AND substring(A.AccountNo,11,2) = substring(Payment_ID,9,2)AND A.Customer_ID = C.Customer_ID;

UPDATE Customer_Account_Transaction
set Transaction_Type = 'Customer to Customer'
where substring(Payment_ID, 7, 2)= '01';

UPDATE Customer_Account_Transaction
set Transaction_Type = 'Loan Payment'
where substring(Payment_ID, 7, 2)= '02';

UPDATE Customer_Account_Transaction
set Recipient = 
where substring(Payment_ID, 7, 2)= '01';
