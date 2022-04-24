-- queries for final eval

-- For every customer check total transaction and grant him gold, silver, platinum accounts
create database IF NOT EXISTS DANKTHEBANK;
use DANKTHEBANK;

SET SQL_SAFE_UPDATES=0;
drop table if exists Customer_Privelege;
CREATE TABLE Customer_Privelege(
Customer_ID VARCHAR(100) NOT NULL PRIMARY KEY,
Privelege VARCHAR(30),
Customer_Name VARCHAR(50) NOT NULL,
Amount DOUBLE,
C_Rank int NOT NULL
);
INSERT INTO Customer_Privelege(Customer_ID, Customer_Name, Amount, C_Rank) 
SELECT C.Customer_ID, C.Name, SUM(ABS(T.Amount)), DENSE_RANK() OVER ( ORDER BY SUM(ABS(T.Amount)) DESC) as Customer_Ranks
from Customers C, Accounts A, Transactions T 
where A.Customer_ID = C.Customer_ID AND substring(T.Payment_ID,1,4) = substring(A.AccountNo,1,4) AND substring(A.AccountNo, 8, 1) = substring(T.Payment_ID, 17, 1)
AND substring(A.AccountNo, 11, 2) = substring(T.Payment_ID, 9, 2) AND substring(A.AccountNo, 5, 1) = substring(T.Payment_ID, 5, 1) AND T.Status != 'FAILED'
GROUP BY C.Customer_ID;
UPDATE Customer_Privelege set Privelege = 'Platinum' where Amount >= 100000;
UPDATE Customer_Privelege set Privelege = 'Gold' where 100000 > Amount And Amount >= 20000;
UPDATE Customer_Privelege set Privelege = 'Silver' where 20000 > Amount and  Amount >= 3000;
select * from Customer_Privelege ORDER BY C_Rank;

-- List all the loan defaulters of a branch, and the total amount defaulted, group by branch.
select Sum(L.Amount), B.Branch_ID, A.AccountNo from Loans L, Branches B, Accounts A
where substring(Loan_ID,1,4) = substring(Branch_ID, 1,4) AND substring(A.AccountNo, 1, 4) = substring(L.Loan_ID, 1, 4) AND substring(A.AccountNo, 7, 2) = substring(L.Loan_ID, 7, 2) AND substring(A.AccountNo, 11, 2) = substring(L.Loan_ID, 9, 2) AND substring(L.Loan_ID, 5, 1) = substring(A.AccountNo, 5, 1) AND A.LoanStatus = 'DEFAULTER'
GROUP BY A.AccountNo;

-- Give the loyal customers (>10 years of service with the bank) a one-time gift of Rs. 500 in one of their accounts.
UPDATE Accounts AS A
JOIN (
   SELECT DISTINCT Customer_ID
   FROM Accounts 
   GROUP BY Customer_ID 
) AS C
ON C.Customer_ID = A.Customer_ID and EXTRACT(YEAR FROM A.OpeningDate)<2012 and A.LoanStatus != 'DEFAULTER'
SET A.Balance = A.Balance + 500;
 
 -- List the average salary of all the employees at each branch, and compare it with the salary of the branch manager. Sort the result by average salary at each branch.
select B.Branch_ID, Avg(E1.Salary) as Average_Branch_Salary, STDDEV(E1.Salary) as Salary_STDDEV, (E2.Salary - Avg(E1.Salary)) as COMPARED_WRT_MANAGER, DENSE_RANK() OVER ( ORDER BY Avg(E1.Salary) DESC) as PayRankings
from Employees E1, Employees E2, Branches B
where E1.Designation != 'Branch Manager' AND E2.Designation = 'Branch Manager' AND substring(E1.Employee_ID,1,4) = substring(E2.Employee_ID,1,4) AND substring(E2.Employee_ID,1,4) = substring(B.Branch_ID, 1, 4)
GROUP BY B.Branch_ID;

-- List the average, maximum and minimum transaction done by a customer 
SELECT C.Customer_ID, MIN(T.Amount) as Minimum_Transaction, MAX(T.Amount) as Maximum_Transaction, AVG(T.Amount) as Average_Transaction
from Customers C, Accounts A, Transactions T 
where A.Customer_ID = C.Customer_ID AND substring(T.Payment_ID,1,4) = substring(A.AccountNo,1,4) AND substring(A.AccountNo, 8, 1) = substring(T.Payment_ID, 17, 1) 
AND substring(A.AccountNo, 11, 2) = substring(T.Payment_ID, 9, 2) AND substring(A.AccountNo, 5, 1) = substring(T.Payment_ID, 5, 1) AND T.Status != 'FAILED'
GROUP BY C.Customer_ID;

-- Save the current DB state, and then delete all the customers not having PAN as per the RBI rules
START transaction;
Select * from customers;
Savepoint beforePANdeletion;
DELETE FROM customers
WHERE PAN is null;

-- Accidentally, customers less than 18 years old were also deleted which should not have happened. 
-- Revert to the previous state and make the correction. Save the final changes.
Rollback to beforePANdeletion;
DELETE FROM customers
WHERE Age>18 AND PAN is null;
commit;

-- calculating the credit score of a customer                              
SELECT A.Customer_ID, 
CASE
	WHEN A.LoanStatus='DEFAULTER' THEN 0
	WHEN A.LoanStatus='NULL' THEN null
    WHEN A.LoanStatus='PAID' THEN 900
    WHEN A.LoanStatus='PENDING' THEN ((SELECT sum(L.Amount) 
										FROM loans L,branch_loan_account b
                                        WHERE A.AccountNo=b.AccountNo AND b.Loan_ID=l.Loan_ID
                                        group by A.Customer_ID
                                        )/SUM(A.Balance))*1000
	ELSE null
END AS CreditScore
FROM Customers C, accounts A
group by A.Customer_ID;

SET SQL_SAFE_UPDATES=1;