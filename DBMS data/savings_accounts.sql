drop table Savings_Accounts;
CREATE TABLE Savings_Accounts(
AccountNo VARCHAR(100) NOT NULL PRIMARY KEY,
Balance DOUBLE,
InterestRate int DEFAULT '6',
FOREIGN KEY (AccountNo) REFERENCES Accounts(AccountNo)
);

INSERT INTO Savings_Accounts(AccountNo, Balance) SELECT AccountNo, Balance from Accounts where AccountNo like '______00____';