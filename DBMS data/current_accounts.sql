drop table Current_Accounts;
CREATE TABLE Current_Accounts(
AccountNo VARCHAR(100) NOT NULL PRIMARY KEY,
Balance DOUBLE,
OverdraftLimit bigint NOT NULL DEFAULT(0),
FOREIGN KEY (AccountNo) REFERENCES Accounts(AccountNo)
);

INSERT INTO Current_Accounts(AccountNo, Balance) SELECT AccountNo, Balance from Accounts where AccountNo like '______01____';
UPDATE Current_Accounts set OverdraftLimit = IF(Balance <= 60000, Balance, 100000); 
