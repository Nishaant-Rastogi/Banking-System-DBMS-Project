-- ALTER TABLE Customers DROP INDEX Customer_ID_idx;
-- ALTER TABLE Accounts DROP INDEX LoanStatus_idx;
-- ALTER TABLE Accounts DROP INDEX AccountNo_idx;
-- ALTER TABLE Employees DROP INDEX Employee_ID_idx;
-- ALTER TABLE Transactions DROP INDEX Payment_ID_idx;
-- ALTER TABLE Accounts DROP INDEX Customer_Account_idx;
-- ALTER TABLE Transactions DROP INDEX Status_idx;
-- ALTER TABLE Employees DROP INDEX Designation_idx;

CREATE INDEX Customer_ID_idx ON Customers (Customer_ID);
CREATE UNIQUE INDEX AccountNo_idx ON Accounts (AccountNo);
CREATE UNIQUE INDEX Employee_ID_idx ON Employees (Employee_ID);
CREATE UNIQUE INDEX Payment_ID_idx ON Transactions (Payment_ID);
CREATE INDEX Customer_Account_idx ON Accounts (Customer_ID, AccountNo);
CREATE INDEX Status_idx ON Transactions (Status);
CREATE INDEX Designation_idx ON Employees (Designation);