drop table Branch_Loan_Account;
CREATE TABLE Branch_Loan_Account(
Branch_ID bigint NOT NULL,
Loan_ID VARCHAR(100) NOT NULL,
AccountNo VARCHAR(100) NOT NULL,
PRIMARY KEY(Branch_ID,Loan_ID,AccountNo)
);

INSERT INTO Branch_Loan_Account(Branch_ID, Loan_ID, AccountNo) SELECT Branch_ID, Loan_ID, AccountNo from Branches, Loans, Account A where substring(Loan_ID,1,4) = substring(Branch_ID, 1,4) AND substring(Loan_ID,9,2) = substring(AccountNo,9,2);