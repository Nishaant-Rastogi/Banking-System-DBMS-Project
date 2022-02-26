-- SELECT C.Name, A.AccountNo, L.Loan_ID FROM Customers C, Accounts A, Loans L WHERE C.Customer_ID = A.Customer_ID AND SUBSTRING(A.AccountNo, 1, 4) like SUBSTRING(L.Loan_ID, 1, 4) AND SUBSTRING(A.AccountNo, 11, 2) like  SUBSTRING(L.Loan_ID,9,2) AND A.LoanStatus = "DEFAULTER";

-- SELECT AccountNo FROM Accounts WHERE AccountNo like "____E1______";

-- SELECT L.Loan_ID from Loans L, Customers C, Accounts A where A.Customer_ID = C.Customer_ID AND SUBSTRING(A.AccountNo, 1, 4) like SUBSTRING(L.Loan_ID, 1, 4) AND SUBSTRING(A.AccountNo, 11, 2) like  SUBSTRING(L.Loan_ID,9,2) AND A.LoanStatus = "PAID";

-- SELECT C.Name, L.Loan_ID, L.InterestRate from Customers C, Loans L, Accounts A where A.Customer_ID = C.Customer_ID AND SUBSTRING(A.AccountNo, 1, 4) like SUBSTRING(L.Loan_ID, 1, 4) AND SUBSTRING(A.AccountNo, 11, 2) like  SUBSTRING(L.Loan_ID,9,2) AND C.Age >= 60;

-- SELECT BM.Name as Manager, E.Employee_ID, E.Name as Employee_Name FROM Employees E,  Branch_Manager BM WHERE substring(E.Employee_ID,1,4) = cast(BM.Branch_ID as CHAR) AND BM.Employee_ID <> E.Employee_ID;

-- SELECT C.Name, P.Transaction_Type, T.Status from Transactions T, Customers C, customer_account_transaction P WHERE P.Customer_ID = C.Customer_ID AND P.Payment_ID = T.Payment_ID;  

-- SELECT T.Payment_ID, T.Status FROM Transactions T where T.Amount > 10000 OR T.Amount<-10000;

-- SELECT C.Name, C.Customer_ID, H.Branch_ID, L.Amount FROM Customers C, Branch_Account H, Loans L, Accounts A WHERE C.Customer_ID = A.Customer_ID AND SUBSTRING(A.AccountNo, 1, 4) like SUBSTRING(L.Loan_ID, 1, 4) AND SUBSTRING(A.AccountNo, 11, 2) like  SUBSTRING(L.Loan_ID,9,2) AND H.AccountNo = A.AccountNo;

-- SELECT C.Name, C.Customer_ID, SUM(A.Balance) as Net_Balance from Accounts A, Customers C where A.Customer_ID = C.Customer_ID GROUP BY C.Customer_ID;

-- SELECT C.Customer_ID, C.Name, (SELECT COUNT(P1.Payment_ID) FROM Customer_Account_Transaction P1 where P1.Amount<0 AND P1.Customer_ID = C.Customer_ID) as Withdrawl_Count, (SELECT COUNT(P2.Payment_ID) FROM Customer_Account_Transaction P2 where substring(P2.Payment_ID,7,2) = '03' AND P2.Amount > 0 AND P2.Customer_ID = C.Customer_ID) as Deposit_Count FROM Customers C;

-- SELECT C.Name, C.Customer_ID FROM Customers C, Customer_Account_Transaction P, Transactions T where P.Customer_ID = C.Customer_ID AND T.Payment_ID = P. Payment_ID AND T.Status like 'FAILED';

-- SELECT E.Name FROM Employees E WHERE E.Salary > 50000 AND YEAR(E.Joining_Date) < 2010 AND E.Designation like "Branch Manager";

-- SELECT COUNT(*) as Savings_Accounts, (SELECT COUNT(*) FROM Current_Accounts as Current_Accounts) as Current_Accounts FROM Savings_Accounts as Savings_Accounts;

-- SELECT A.AccountNo, C.Name, C.Customer_ID FROM Accounts A, Savings_Accounts S, Customers C where A.LoanStatus like 'PENDING' AND S.InterestRate >= 6 AND S.AccountNo = A.AccountNo AND C.Customer_ID = A.Customer_ID;

-- SELECT C.Name, C.Customer_ID FROM Accounts A, Accounts B, Customers C WHERE A.Customer_ID = C.Customer_ID AND A.Customer_ID = B.Customer_ID AND ((substring(A.AccountNo, 7, 2) = '00' AND substring(B.AccountNo, 7,2) = '01') OR (substring(A.AccountNo, 7, 2) = '01' AND substring(B.AccountNo, 7, 2) = '00')) GROUP BY C.Customer_ID;


