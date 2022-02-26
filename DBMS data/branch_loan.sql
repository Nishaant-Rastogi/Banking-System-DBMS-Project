drop table Branch_Loan_Account;
CREATE TABLE Branch_Loan_Account(
Branch_ID bigint NOT NULL,
Loan_ID VARCHAR(100) NOT NULL,
AccountNo VARCHAR(100) NOT NULL,
PRIMARY KEY(Branch_ID,Loan_ID,AccountNo)
);

INSERT INTO Branch_Loan_Account(Branch_ID, Loan_ID, AccountNo) SELECT Branch_ID, Loan_ID, A.AccountNo from Branches, Loans, Accounts A where substring(Loan_ID,1,4) = substring(Branch_ID, 1,4) AND substring(Loan_ID,9,2) = substring(A.AccountNo,11,2) AND (A.LoanStatus <> 'NULL') AND substring(A.AccountNo,1,4) = substring(Branch_ID, 1, 4) AND substring(A.AccountNo, 5, 2) = '01';