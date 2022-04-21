create database IF NOT EXISTS DANKTHEBANK; -- balance interest lafda
use DANKTHEBANK;
drop table if exists Savings_Accounts;
CREATE TABLE Savings_Accounts(
AccountNo VARCHAR(100) NOT NULL PRIMARY KEY,
Balance DOUBLE,
TransactionLimit Double DEFAULT 10000,
InterestRate int DEFAULT '6',
FOREIGN KEY (AccountNo) REFERENCES Accounts(AccountNo) ON DELETE CASCADE
);

DELIMITER $$

CREATE TRIGGER young2 BEFORE UPDATE ON Savings_Accounts
    FOR EACH ROW BEGIN
      IF (New.Balance < 3000) THEN
            SET NEW.InterestRate = 0;
      END IF;
    END$$

DELIMITER ;

DELIMITER $$

CREATE TRIGGER young5 BEFORE INSERT ON Savings_Accounts
    FOR EACH ROW BEGIN
      IF (New.Balance < 3000) THEN
            SET NEW.InterestRate = 0;
      END IF;
    END$$

DELIMITER ;

INSERT INTO Savings_Accounts(AccountNo, Balance) SELECT AccountNo, Balance from Accounts where AccountNo like '______00____';
UPDATE Savings_Accounts set TransactionLimit = IF(Balance <= 10000, Balance, 10000); 