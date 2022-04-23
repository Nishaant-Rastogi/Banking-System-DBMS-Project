-- advanced aggregate queries
-- calculating the credit score of a customer

-- number of transactions in a year, average amount and stddev
SELECT  EXTRACT(YEAR FROM Date) AS Year, 
        COUNT(amount) AS Number_Of_Transactions, SUM(Amount)/COUNT(Amount) as Average_Amount, STDDEV(Amount) as Deviation
FROM Transactions
GROUP BY EXTRACT(YEAR FROM Date)
ORDER BY EXTRACT(YEAR FROM Date) ASC;

-- ranking customers in the order of transactions they made 
SELECT C.Customer_ID, SUM(T.Amount) as Total_Amount_Spent, DENSE_RANK() OVER ( ORDER BY Amount DESC) as Customer_Ranks
from Customers C, Accounts A, Transactions T 
where A.Customer_ID = C.Customer_ID AND substring(T.Payment_ID,1,4) = substring(A.AccountNo,1,4) AND substring(A.AccountNo, 8, 1) = substring(T.Payment_ID, 17, 1) AND substring(A.AccountNo, 11, 2) = substring(T.Payment_ID, 9, 2) AND substring(A.AccountNo, 5, 1) = substring(T.Payment_ID, 5, 1)
GROUP BY C.Customer_ID;

-- ranking customers on the basis of their loan payments
SELECT C.Customer_ID, SUM(T.Amount) as Total_Amount_Spent, DENSE_RANK() OVER ( ORDER BY Amount DESC) as Customer_Ranks
from Customers C, Accounts A, Transactions T 
where A.Customer_ID = C.Customer_ID AND substring(T.Payment_ID,1,4) = substring(A.AccountNo,1,4) AND substring(A.AccountNo, 8, 1) = substring(T.Payment_ID, 17, 1) AND substring(A.AccountNo, 11, 2) = substring(T.Payment_ID, 9, 2) AND substring(A.AccountNo, 5, 1) = substring(T.Payment_ID, 5, 1) AND substring(T.Payment_ID,7, 2) = '02'
GROUP BY C.Customer_ID;
-- ranking branches on the basis of loans they gave out

SELECT B.Branch_ID, SUM(L.Term*L.Slab) as Total_Loan, DENSE_RANK() OVER ( ORDER BY Slab DESC) as Branch_Ranks
from Branches B, Loans L
where substring(B.Branch_ID, 1, 4) = substring(L.Loan_ID, 1, 4)
GROUP BY B.Branch_ID;

-- stddev and ranking on branches on the basis of payments made through them
SELECT B.Branch_ID, SUM(T.Amount) as Total_Amount, SUM(Amount)/COUNT(Amount) as Average_Amount, STDDEV(Amount) as Deviation, DENSE_RANK() OVER ( ORDER BY Amount DESC) as Branch_Ranks
from Branches B, Transactions T
where substring(B.Branch_ID, 1, 4) = substring(T.Payment_ID, 1, 4)
GROUP BY B.Branch_ID;

-- variance calculation of balance and laons issued by a bank branch, compared with its assets

SELECT B.Branch_ID, sqrt(VARIANCE(A.Balance)) as Variance_Balance, sqrt(VARIANCE(L.Slab)) as Variance_Slab, SUM(A.Balance) as Assets, L.Loan_ID, SUM(L.Slab*L.Term) as Total_Loan_Issued
from Accounts A, Loans L, Branches B
where substring(A.AccountNo, 1, 4) = substring(L.Loan_ID, 1, 4) AND substring(A.AccountNo, 7, 2) = substring(L.Loan_ID, 7, 2) AND substring(A.AccountNo, 11, 2) = substring(L.Loan_ID, 9, 2) AND substring(L.Loan_ID, 5, 1) = substring(A.AccountNo, 5, 1) AND substring(L.Loan_ID, 1, 4) = substring(B.Branch_ID,1, 4)
GROUP BY B.Branch_ID;