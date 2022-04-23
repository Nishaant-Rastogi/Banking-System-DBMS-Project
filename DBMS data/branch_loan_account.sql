create database IF NOT EXISTS DANKTHEBANK;
use DANKTHEBANK;
drop table if exists Branch_Loan_Account;
CREATE TABLE Branch_Loan_Account(
Branch_ID bigint NOT NULL,
Loan_ID VARCHAR(100) NOT NULL,
AccountNo VARCHAR(100) NOT NULL,
PRIMARY KEY(Branch_ID,Loan_ID,AccountNo)
);

INSERT INTO Branch_Loan_Account(Branch_ID, Loan_ID, AccountNo) 
SELECT Branch_ID, Loan_ID, AccountNo 
from Branches B, Loans L, Accounts A 
where substring(Loan_ID,1,4) = substring(Branch_ID, 1,4) AND substring(A.AccountNo, 1, 4) = substring(L.Loan_ID, 1, 4) AND substring(A.AccountNo, 7, 2) = substring(L.Loan_ID, 7, 2) AND substring(A.AccountNo, 11, 2) = substring(L.Loan_ID, 9, 2) AND substring(L.Loan_ID, 5, 1) = substring(A.AccountNo, 5, 1);
