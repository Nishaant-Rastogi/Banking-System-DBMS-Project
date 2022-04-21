
UPDATE Accounts set Balance = 10 where AccountNo = '100101000002';
select Balance from Accounts where AccountNo = '100101000002';
select Balance from Savings_Accounts where Savings_Accounts.AccountNo = '100101000002';
select * from Savings_Accounts;