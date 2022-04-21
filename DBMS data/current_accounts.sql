create database IF NOT EXISTS DANKTHEBANK;
use DANKTHEBANK;
drop table if exists Current_Accounts;
CREATE TABLE Current_Accounts(
AccountNo VARCHAR(100) NOT NULL PRIMARY KEY,
Balance DOUBLE,
OverdraftLimit bigint NOT NULL DEFAULT(0),
FOREIGN KEY (AccountNo) REFERENCES Accounts(AccountNo) ON DELETE CASCADE
);

DELIMITER $$

CREATE TRIGGER young7 BEFORE UPDATE ON Current_Accounts
    FOR EACH ROW BEGIN
      IF (New.Balance < 3000) THEN
            SET NEW.OverdraftLimit = 0;
      END IF;
    END$$

DELIMITER ;

DELIMITER $$

CREATE TRIGGER young8 BEFORE INSERT ON Current_Accounts
    FOR EACH ROW BEGIN
      IF (New.Balance < 3000) THEN
            SET NEW.OverdraftLimit = 0;
      END IF;
    END$$

DELIMITER ;

INSERT INTO Current_Accounts(AccountNo, Balance) SELECT AccountNo, Balance from Accounts where AccountNo like '______01____';
UPDATE Current_Accounts set OverdraftLimit = IF(Balance <= 60000, Balance, 100000); 
