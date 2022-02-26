SELECT C.Name, A.AccountNo, L.Loan_ID FROM Customers C, Accounts A, Loans L WHERE C.Customer_ID = A.Customer_ID AND SUBSTRING(A.AccountNo, 1, 4) like SUBSTRING(L.Loan_ID, 1, 4) AND SUBSTRING(A.AccountNo, 11, 2) like  SUBSTRING(L.Loan_ID,8,4) AND A.Loan_Status = "DEFAULTER";

SELECT AccountNo FROM Accounts WHERE AccountNo like "____E1______";

SELECT L.Loan_ID from Loans L, Customers C, Accounts A where A.Customer_ID = C.Customer_ID AND SUBSTRING(A.AccountNo, 1, 4) like SUBSTRING(L.Loan_ID, 1, 4) AND SUBSTRING(A.AccountNo, 11, 2) like  SUBSTRING(L.Loan_ID,8,4) AND A.Loan_STATUS = "PAID";

SELECT C.Name, L.Loan_ID, L.InterestRate from Customers C, Loans L, Accounts A where A.Customer_ID = C.Customer_ID AND SUBSTRING(A.AccountNo, 1, 4) like SUBSTRING(L.Loan_ID, 1, 4) AND SUBSTRING(A.AccountNo, 11, 2) like  SUBSTRING(L.Loan_ID,8,4) AND C.Age >= 60;

SELECT E.Employee_ID, E.Name FROM Employees E, Works W, BranchManager BM WHERE W.BranchID = BM.BranchID GROUP BY BM.Name;

SELECT C.Name, P.Type, T.Status from Transactions T, Customers C, Payments P WHERE P.Customer_ID = C.Customer_ID AND T.Payment_ID = T.Payment_ID GROUP BY C.name;  

SELECT T.Payment_ID, T.Status FROM Transactions T where T.Amount > 10000;

SELECT C.Name, C.Customer_ID, H.Branch_ID, L.Amount FROM Customers C, Has H, Loan L, Account A WHERE C.Customer_ID = A.Customer_ID AND SUBSTRING(A.AccountNo, 1, 4) like SUBSTRING(L.Loan_ID, 1, 4) AND SUBSTRING(A.AccountNo, 11, 2) like  SUBSTRING(L.Loan_ID,8,4) AND H.AccountNo = A.AccountNo;

SELECT C.Name, C.Customer_ID, A.AccountNo, A.Balance from Accounts A, Customer C where A.Customer_ID = C.Customer_ID GROUP BY C.Customer_ID;

SELECT C.Customer_ID, C.Name, (SELECT COUNT(P1.Payment_ID) FROM Payments P1 where P1.type like "WITHDRAWL" AND P1.Customer_ID = C.Customer_ID) as Withdrawl_Count, (SELECT COUNT(P2.Payment_ID) FROM Payments P2 where P2.type like "DEPOSIT" AND P2.Customer_ID = C.Customer_ID) as Deposit_Count FROM Customers C;

SELECT C.Name, C.Customer_ID FROM Customers C, Payments P, Transactions T where P.Customer_ID = C.Customer_ID AND T.Payment_ID = P. Payment_ID AND T.Status like “FAILED”;

SELECT E.Name FROM Employees E WHERE E.Salary > 50000 AND YEAR(E.Joining_Date) < 2010 AND E.Designation like "Branch Manager";

SELECT COUNT(*), (SELECT COUNT(*) FROM Current_Accounts as Current_Accounts) FROM Savings_Accounts as Savings_Accounts;

SELECT A.AccountNo FROM Accounts A, Savings_Accounts S where A.LoanStatus like “PENDING” AND S.Interest_Rate > 10 AND S.AccountNo = A.AccountNo;




