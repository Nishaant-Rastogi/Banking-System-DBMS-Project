create database IF NOT EXISTS DANKTHEBANK;
use DANKTHEBANK;
drop table if exists Savings_Accounts;
CREATE TABLE Savings_Accounts(
AccountNo VARCHAR(100) NOT NULL PRIMARY KEY,
Balance DOUBLE,
TransactionLimit Double DEFAULT 10000,
InterestRate int DEFAULT '6',
FOREIGN KEY (AccountNo) REFERENCES Accounts(AccountNo)
);

INSERT INTO Savings_Accounts(AccountNo, Balance) SELECT AccountNo, Balance from Accounts where AccountNo like '______00____';
UPDATE Savings_Accounts set TransactionLimit = IF(Balance <= 10000, Balance, 10000); 